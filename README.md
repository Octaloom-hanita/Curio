# Curio

Bilingual learning web app MVP for curious adult learners.

## Current milestone

A web-first private alpha that validates one complete learning loop before expanding the catalog.

Current prototype includes:
- Russian and English UI
- Topic selection before learning
- Large accessible typography
- Adjustable reading size
- Guided explanation before recall
- Abstract educational visuals
- Open text answer
- Real Gemini rubric-based answer evaluation
- Retry and review-explanation paths
- Clear session ending

The prototype deliberately hides unfinished audio and voice controls instead of showing fake functionality.

## Product rule for the first user

The first real user is an older adult learner.

The MVP should therefore:
- Orient before asking
- Explain before testing when prior knowledge is unlikely
- Use large text and large targets by default
- Keep one clear next action
- Avoid unnecessary jargon and decorative UI
- Preserve user answers on technical failure
- Let the learner review the explanation without penalty

## Next

- Test the revised flow with the first user
- Add real audio only when playback works end to end
- Add Chrome microphone recording
- Add speech transcription and editable transcript
- Persist progress and review state in Supabase
- Expand the topic catalog after the core loop is validated

## Run

```bash
npm install
npm run web
```

## Build

```bash
npm run build
```

Vercel output directory: `dist`
