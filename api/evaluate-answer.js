const MODEL = 'gemini-3.8-flash';

const POINTS = {
  P1: 'The answer explains that temperature or heating differences can drive air movement.',
  P2: 'The answer explains that mound structure, geometry, or channels contribute to guiding airflow.',
  P3: 'The answer explains that no central controller or leader is required; the circulation emerges from physical conditions.',
  P4: 'Optional: mentions the daily heating/cooling cycle or day/night reversal.',
  P5: 'Optional: mentions gas exchange or carbon dioxide removal.',
  P6: 'Nuance: avoids claiming that one mechanism applies identically to every termite species.',
};

const MISCONCEPTIONS = {
  M1: 'Claims termites actively fan the nest as the primary mechanism in this lesson.',
  M2: 'Claims hot air simply rises through one central chimney all day as a universal explanation.',
  M3: 'Claims ventilation automatically keeps temperature constant.',
  M4: 'Claims a queen or leader centrally coordinates ventilation.',
};

const schema = {
  type: 'object',
  properties: {
    coveredPoints: {
      type: 'array',
      items: { type: 'string', enum: Object.keys(POINTS) },
    },
    missingPoints: {
      type: 'array',
      items: { type: 'string', enum: ['P1', 'P2', 'P3'] },
    },
    misconceptions: {
      type: 'array',
      items: { type: 'string', enum: Object.keys(MISCONCEPTIONS) },
    },
    confidence: {
      type: 'number',
      minimum: 0,
      maximum: 1,
    },
  },
  required: ['coveredPoints', 'missingPoints', 'misconceptions', 'confidence'],
};

function classify(evidence) {
  if (!evidence || typeof evidence.confidence !== 'number' || evidence.confidence < 0.65) {
    return 'unable';
  }

  if (Array.isArray(evidence.misconceptions) && evidence.misconceptions.length > 0) {
    return 'review';
  }

  const required = ['P1', 'P2', 'P3'];
  const covered = new Set(evidence.coveredPoints || []);
  const count = required.filter((point) => covered.has(point)).length;

  if (count === 3) return 'understood';
  if (count === 2) return 'partial';
  return 'review';
}

function feedbackFor(status, evidence, locale) {
  const ru = locale === 'ru';

  const pointText = {
    P1: ru ? 'разница температур может приводить воздух в движение' : 'temperature differences can drive air movement',
    P2: ru ? 'структура и каналы направляют поток' : 'the structure and channels help guide the flow',
    P3: ru ? 'для этого не нужен центральный управляющий' : 'no central controller is required',
  };

  const titles = {
    understood: ru ? 'Понял' : 'Understood',
    partial: ru ? 'Почти понял' : 'Almost there',
    review: ru ? 'Стоит повторить' : 'Worth reviewing',
    unable: ru ? 'Не удалось уверенно оценить' : 'Could not evaluate confidently',
  };

  const coveredRequired = ['P1', 'P2', 'P3'].filter((p) => (evidence.coveredPoints || []).includes(p));
  const missingRequired = ['P1', 'P2', 'P3'].filter((p) => !(evidence.coveredPoints || []).includes(p));

  let summary;
  if (status === 'understood') {
    summary = ru
      ? 'В ответе есть все три ключевые части механизма.'
      : 'Your answer includes all three key parts of the mechanism.';
  } else if (status === 'partial') {
    summary = ru
      ? 'Основная идея есть, но одной важной части пока не хватает.'
      : 'You have the core idea, but one important part is still missing.';
  } else if (status === 'review') {
    summary = ru
      ? 'В ответе пока не хватает ключевых причинно-следственных связей.'
      : 'The answer is still missing key causal links.';
  } else {
    summary = ru
      ? 'Ответ слишком короткий или модель не уверена, что поняла его правильно.'
      : 'The answer is too short or the model is not confident it interpreted it correctly.';
  }

  const strengths = coveredRequired.map((p) => pointText[p]);
  const next = missingRequired.map((p) => pointText[p]);

  return { title: titles[status], summary, strengths, next };
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'GEMINI_NOT_CONFIGURED' });
    return;
  }

  const { answerText, locale = 'ru' } = req.body || {};
  const clean = typeof answerText === 'string' ? answerText.trim() : '';

  if (clean.length < 8) {
    const evidence = {
      coveredPoints: [],
      missingPoints: ['P1', 'P2', 'P3'],
      misconceptions: [],
      confidence: 0,
    };
    res.status(200).json({
      status: 'unable',
      evidence,
      feedback: feedbackFor('unable', evidence, locale),
    });
    return;
  }

  const prompt = `
You are evaluating a learner's explanation of one specific science concept.

Question:
Why can air circulate in some termite mounds without a fan and without central control?

Evaluate semantic understanding, not exact terminology. A learner can use simple language.
Do not reward verbosity. Do not require every optional point.
Do not invent meaning that is not present in the answer.

Required ideas:
P1: ${POINTS.P1}
P2: ${POINTS.P2}
P3: ${POINTS.P3}

Optional/nuance:
P4: ${POINTS.P4}
P5: ${POINTS.P5}
P6: ${POINTS.P6}

Possible misconceptions:
M1: ${MISCONCEPTIONS.M1}
M2: ${MISCONCEPTIONS.M2}
M3: ${MISCONCEPTIONS.M3}
M4: ${MISCONCEPTIONS.M4}

Learner answer:
${clean}

Return evidence only. Do not assign a grade or mastery label.
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
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0,
            responseMimeType: 'application/json',
            responseSchema: schema,
          },
        }),
      }
    );

    if (!response.ok) {
      const detail = await response.text();
      console.error('Gemini error', response.status, detail.slice(0, 1000));
      res.status(502).json({ error: 'GEMINI_REQUEST_FAILED' });
      return;
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      res.status(502).json({ error: 'GEMINI_EMPTY_RESPONSE' });
      return;
    }

    let evidence;
    try {
      evidence = JSON.parse(text);
    } catch {
      res.status(502).json({ error: 'GEMINI_INVALID_JSON' });
      return;
    }

    const status = classify(evidence);

    res.status(200).json({
      status,
      evidence,
      feedback: feedbackFor(status, evidence, locale),
      model: MODEL,
    });
  } catch (error) {
    console.error('Evaluation failure', error);
    res.status(500).json({ error: 'EVALUATION_FAILED' });
  }
};
