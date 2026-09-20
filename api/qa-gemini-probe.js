module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok:false });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(503).json({ ok:false, stage:'key' });

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent',
      {
        method:'POST',
        headers:{'Content-Type':'application/json','x-goog-api-key':apiKey},
        body: JSON.stringify({
          contents:[{parts:[{text:'Reply with exactly: OK'}]}],
          generationConfig:{temperature:0}
        })
      }
    );

    const raw = await response.text();
    if (!response.ok) {
      return res.status(502).json({
        ok:false,
        stage:'gemini',
        upstreamStatus:response.status,
        detail:raw.slice(0,500)
      });
    }

    const data = JSON.parse(raw);
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
    return res.status(200).json({ok:true,text});
  } catch (error) {
    return res.status(500).json({ok:false,stage:'exception',message:String(error).slice(0,300)});
  }
};