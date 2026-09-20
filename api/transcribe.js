const MODEL = 'gemini-3.8-flash';
const MAX_BASE64_CHARS = 12_000_000;

const SUPPORTED_MIME_PREFIXES = [
  'audio/webm',
  'audio/ogg',
  'audio/mp4',
  'audio/mpeg',
  'audio/wav',
  'audio/x-wav',
];

function isSupportedMime(value) {
  if (typeof value !== 'string') return false;
  return SUPPORTED_MIME_PREFIXES.some((item) => value.startsWith(item));
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'GEMINI_NOT_CONFIGURED' });
    return;
  }

  const audioBase64 =
    typeof req.body?.audioBase64 === 'string' ? req.body.audioBase64 : '';
  const mimeType =
    typeof req.body?.mimeType === 'string' ? req.body.mimeType : 'audio/webm';
  const locale = req.body?.locale === 'en' ? 'en' : 'ru';

  if (!audioBase64 || audioBase64.length > MAX_BASE64_CHARS) {
    res.status(400).json({ error: 'INVALID_AUDIO' });
    return;
  }

  if (!isSupportedMime(mimeType)) {
    res.status(400).json({ error: 'UNSUPPORTED_AUDIO_TYPE' });
    return;
  }

  const languageInstruction =
    locale === 'ru'
      ? 'The expected language is Russian. Preserve the speaker\'s wording and meaning. Do not translate.'
      : 'The expected language is English. Preserve the speaker\'s wording and meaning. Do not translate.';

  const prompt = `
Transcribe the learner's spoken answer.
${languageInstruction}

Return only the transcript text.
Do not answer the learner's question.
Do not evaluate, correct, summarize, or add content.
If a word is unclear, make the most conservative transcription possible.
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType,
                    data: audioBase64,
                  },
                },
                { text: prompt },
              ],
            },
          ],
          generationConfig: {
            temperature: 0,
          },
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      console.error('Gemini transcription error', response.status, detail.slice(0, 1000));
      res.status(502).json({
        error:
          response.status === 403
            ? 'GEMINI_ACCESS_DENIED'
            : 'TRANSCRIPTION_REQUEST_FAILED',
      });
      return;
    }

    const data = await response.json();
    const transcript = data?.candidates?.[0]?.content?.parts
      ?.map((part) => (typeof part?.text === 'string' ? part.text : ''))
      .join('')
      .trim();

    if (!transcript) {
      res.status(502).json({ error: 'EMPTY_TRANSCRIPT' });
      return;
    }

    res.status(200).json({
      transcript,
      model: MODEL,
    });
  } catch (error) {
    console.error('Transcription failure', error);
    res.status(500).json({ error: 'TRANSCRIPTION_FAILED' });
  }
};
