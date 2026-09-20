# Curio - MVP Status, Roadmap and QA

Updated: 2026-09-20

## Current status

Production web MVP is deployed on Vercel.

Working:
- RU / EN UI
- topic selection
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

Implement ElevenLabs for approved Curio text:
- generate
- store
- play
- pause
- seek
- speed
- resume
- error handling

### P1 - Voice

Chrome microphone:
- record
- upload
- transcribe
- editable transcript
- explicit confirmation
- evaluate

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
- audio is not live
- microphone/transcription is not live
- server persistence is not live
- delayed review is not live
- content breadth is still minimal
