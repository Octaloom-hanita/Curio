# Curio - AI, Audio and Voice System

## Principle

AI assists the learning system.

AI does not own mastery logic, content truth or review state.

## Current AI implementation

The current web MVP uses a server-side Gemini evaluation endpoint.

Current flow:
1. learner submits answer
2. server sends question + rubric + misconceptions + answer
3. Gemini extracts semantic evidence
4. output schema is validated
5. deterministic application logic classifies the answer
6. deterministic feedback explains strengths, gaps and misconceptions

Current result states:
- understood
- partial
- review
- unable

The learner answer is treated as untrusted prompt data.

## AI evaluation rules

The model should return evidence such as:
- covered point IDs
- misconception IDs
- confidence

The model should not independently decide durable mastery.

Important outputs require schema validation.

Every evaluation should eventually store:
- question ID
- concept ID
- rubric version
- model/provider metadata
- evidence
- deterministic result

## Contextual tutor

Future tutor context should contain:
- current concept
- current learning step
- active book or Immersion
- approved source set
- learner depth
- locale
- relevant known concepts

The tutor should prefer grounded answers and expose uncertainty.

It must not invent sources.

## TTS - ElevenLabs

Planned architecture:

Approved Curio text -> TTS generation job -> audio asset -> storage -> playback

Do not generate normal playback live every time.

Audio requirements:
- Russian quality suitable for the first user
- EN support
- play/pause
- seek
- speed control
- resume position
- graceful failure
- version linked to approved text

Audio completion does not equal understanding.

## Microphone and speech flow

Canonical flow:

Record -> Upload -> Transcribe -> Show editable transcript -> User confirms -> Evaluate

Never evaluate an unconfirmed speech transcript in the primary flow.

If transcription confidence is poor:
- preserve audio/draft when appropriate
- allow rerecord
- allow manual correction
- allow text answer instead
- never classify transcription failure as learner failure

## Current voice decision

The first target environment is Chrome on the web MVP.

Voice UI should only be shown after recording and transcription work end to end.

## Privacy

Before broad release, decide and document:
- raw audio retention
- deletion timing
- transcript retention
- provider data handling
- analytics exclusions

Generic product analytics must not receive raw audio or full answer text.

## Provider abstraction

Keep interfaces separable:
- evaluateAnswer()
- generateTutorReply()
- transcribeAudio()
- synthesizeSpeech()
- createEmbedding()

This allows providers to change without rewriting learning logic.
