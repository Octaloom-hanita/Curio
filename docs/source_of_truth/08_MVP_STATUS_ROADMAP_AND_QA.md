# Curio - MVP Status, Roadmap and QA

Updated: 2026-09-20

## Current status

Production web MVP is deployed on Vercel.

Working:
- RU / EN UI
- bounded Today surface
- Explore surface with featured questions, all 8 discovery areas, 8 research books and phenomena
- category browsing with curated question maps
- accessible large typography
- text-size control
- guided learning flow
- local progress/resume
- open text answers
- server-side Gemini evaluation
- deterministic classification
- misconception feedback
- retry
- return to explanation
- bounded session ending
- Chrome microphone recording
- server-side transcription
- editable transcript + explicit confirmation before evaluation
- Supabase-backed discovery/catalog reads
- TypeScript build gate

## AI QA status

Gemini is working end to end.

A regression suite passed 11/11 cases, including:
- strong RU
- strong EN
- partial RU
- partial EN
- one-point answer
- central-leader misconception
- multiple misconceptions
- correct ideas mixed with misconception
- too-short answer
- over-length answer
- prompt-injection attempt

## Remaining product gaps

### P0 - Content foundation

Prepared:
- source inventory and broadened coverage map
- balanced discovery structure
- first curated 30-question RU/EN seed
- first 6 balanced Immersion skeletons
- reusable first-wave Concepts
- Supabase content schema + seed in the repository

Still required before approving/publishing the new Immersions:
- claim-level source mapping
- primary/review source acquisition for evidence gaps
- scientific/editorial review
- Russian editorial review

### P1 - More learning content

Add credible topics beyond the termite reference slice.

Initial candidates:
- how order emerges without central control
- why the brain predicts
- why memory is reconstructive
- how influence or contagion spreads through networks
- how feedback loops create surprising system behavior
- why energy constraints matter for the evolution of complex life

### P1 - Audio

Foundation implemented:
- gated server-side ElevenLabs generation endpoint
- approved-text-only generation rule
- Supabase Storage bucket and versioned audio asset records

Still required:
- generate and verify the first production audio asset
- play / pause
- seek
- speed
- resume
- playback error handling

### P1 - Voice

Implemented in the Chrome web flow:
- record
- upload to the server endpoint
- transcribe
- editable transcript
- explicit confirmation
- evaluate only after confirmation

Provider quality/privacy decisions remain open; Gemini audio transcription is a current implementation for testing, not a permanent provider decision.

### P1 - Persistence and review

Content schema and seed are live in Supabase and passed initial structural QA.

Next:
- decide anonymous first use vs account required
- add user/progress/answers/review history in a later migration
- migrate browser-local progress deliberately
- then enable delayed review

### P1 - API protection

Before broader distribution:
- auth
- rate limiting
- abuse protection
- provider usage monitoring

### P2 - Device/accessibility QA

Run:
- narrow Chrome viewport
- wide desktop
- keyboard-only
- screen reader
- larger text
- first older-adult user observation

## Release interpretation

Current build is appropriate for:
- product review
- supervised user testing
- content-flow validation

It is not yet a full private alpha of the intended product because:
- TTS playback is not live
- server-side learner persistence is not live
- delayed review is not live
- only one full Immersion is approved for public learning
- most discovery questions intentionally expose metadata before their full learning experiences are approved
