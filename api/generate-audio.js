const SUPABASE_URL = 'https://quxhnwpbrkiisrseaexs.supabase.co';
const BUCKET = 'curio-audio';
const MODEL_ID = 'eleven_multilingual_v2';

function safeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function buildStepText(row, locale) {
  const title = safeText(row?.[`title_${locale}`]);
  const body = row?.[`body_${locale}`];
  const paragraphs =
    body && typeof body === 'object' && Array.isArray(body.paragraphs)
      ? body.paragraphs.filter((item) => typeof item === 'string')
      : [];

  return [title, ...paragraphs].filter(Boolean).join('\n\n').trim();
}

async function supabaseJson(path, options, serviceRoleKey) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(`SUPABASE_${response.status}_${text.slice(0, 300)}`);
  }

  return data;
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const elevenKey = process.env.ELEVENLABS_API_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const internalSecret = process.env.CURIO_TTS_ADMIN_SECRET;

  if (!elevenKey || !serviceRoleKey || !internalSecret) {
    res.status(503).json({ error: 'TTS_NOT_CONFIGURED' });
    return;
  }

  const authorization = req.headers.authorization || '';
  if (authorization !== `Bearer ${internalSecret}`) {
    res.status(401).json({ error: 'UNAUTHORIZED' });
    return;
  }

  const stepId = safeText(req.body?.stepId);
  const locale = req.body?.locale === 'en' ? 'en' : 'ru';
  const voiceId =
    locale === 'ru'
      ? process.env.ELEVENLABS_VOICE_ID_RU
      : process.env.ELEVENLABS_VOICE_ID_EN;

  if (!stepId || !voiceId) {
    res.status(400).json({
      error: !stepId ? 'STEP_ID_REQUIRED' : 'VOICE_ID_NOT_CONFIGURED',
    });
    return;
  }

  try {
    const rows = await supabaseJson(
      `immersion_steps?id=eq.${encodeURIComponent(
        stepId
      )}&editorial_status=eq.approved&select=id,version,title_ru,title_en,body_ru,body_en`,
      { method: 'GET' },
      serviceRoleKey
    );

    const row = Array.isArray(rows) ? rows[0] : null;
    if (!row) {
      res.status(404).json({ error: 'APPROVED_STEP_NOT_FOUND' });
      return;
    }

    const text = buildStepText(row, locale);
    if (!text) {
      res.status(400).json({ error: 'EMPTY_APPROVED_TEXT' });
      return;
    }

    const speech = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(
        voiceId
      )}?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': elevenKey,
          'Content-Type': 'application/json',
          Accept: 'audio/mpeg',
        },
        body: JSON.stringify({
          text,
          model_id: MODEL_ID,
        }),
      }
    );

    if (!speech.ok) {
      const detail = await speech.text();
      console.error('ElevenLabs error', speech.status, detail.slice(0, 1000));
      res.status(502).json({ error: 'ELEVENLABS_REQUEST_FAILED' });
      return;
    }

    const bytes = Buffer.from(await speech.arrayBuffer());
    const storagePath = `immersion-steps/${stepId}/v${row.version}/${locale}.mp3`;

    const upload = await fetch(
      `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${storagePath}`,
      {
        method: 'POST',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': 'audio/mpeg',
          'x-upsert': 'true',
        },
        body: bytes,
      }
    );

    if (!upload.ok) {
      const detail = await upload.text();
      console.error('Supabase Storage upload error', upload.status, detail.slice(0, 1000));
      res.status(502).json({ error: 'AUDIO_STORAGE_FAILED' });
      return;
    }

    await supabaseJson(
      'audio_assets?on_conflict=content_type,content_id,locale,content_version,provider,storage_path',
      {
        method: 'POST',
        headers: {
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify({
          content_type: 'immersion_step',
          content_id: stepId,
          locale,
          content_version: row.version,
          provider: 'elevenlabs',
          provider_voice_id: voiceId,
          storage_path: storagePath,
          status: 'ready',
        }),
      },
      serviceRoleKey
    );

    res.status(200).json({
      status: 'ready',
      stepId,
      locale,
      provider: 'elevenlabs',
      storagePath,
      publicUrl: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`,
    });
  } catch (error) {
    console.error('TTS generation failure', error);
    res.status(500).json({ error: 'TTS_GENERATION_FAILED' });
  }
};
