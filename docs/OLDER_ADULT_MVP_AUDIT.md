# Curio - Older Adult MVP UX Audit

## Decision

The private alpha must optimize for an older adult who wants to learn, not for showcasing features.

## Problems found in the previous MVP

1. The first immersion asked for a hypothesis before enough context was taught.
2. The product showed unfinished audio and voice controls, which looked functional even though they were not.
3. The literal termite illustration was visually ambiguous and distracted from the mechanism.
4. The lesson introduced scientific caveats too early, before the learner had a simple mental model.
5. The answer check did not provide enough recovery paths for a learner who was unsure.
6. The interface had large typography, but no explicit reading-size control.
7. The first screen did not clearly explain which content was actually ready.

## Product rules applied

- Orient before interacting.
- Teach before checking when the learner has little likely prior knowledge.
- Use hypothesis prompts only when prior knowledge makes a meaningful hypothesis possible.
- Present one mechanism in small causal steps.
- Summarize the mechanism before recall.
- Put scientific nuance after the basic mental model.
- Never display fake controls.
- Keep the answer when evaluation fails.
- Offer retry and return-to-explanation paths.
- Keep touch targets large.
- Make text size adjustable.
- Use visual elements to support a concept, never to create a guessing game.
- Keep the session bounded with a visible end.

## Revised first immersion

1. Topic selection
2. Orientation - what will be learned
3. Why air exchange matters
4. Temperature difference
5. Structure and channels
6. No central controller
7. Day-night cycle
8. Three-point summary
9. Scientific nuance
10. Explain in own words
11. AI feedback
12. Connection to self-organization
13. Clear session end

## Current prototype scope

Working:
- RU / EN
- Topic choice
- Adjustable text size
- Text learning flow
- Gemini answer evaluation
- Retry / review explanation
- Abstract airflow visuals

Intentionally hidden until real:
- Audio playback
- Microphone recording
- Speech transcription

## Acceptance for the first real-user test

The learner should be able to:
- Understand what to do on every screen without instruction
- Read for several minutes without strain
- Know why a question is being asked
- Answer without feeling tested before being taught
- Recover easily after uncertainty or technical failure
- Finish the session without being pushed into another item
