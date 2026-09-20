# Curio - MVP Status, Roadmap and QA

Updated: 2026-09-21

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

## Content foundation status

The first approval wave is complete enough for supervised product validation.

Live content database checkpoint:
- 8 discovery areas
- 31 curated questions
- 42 reusable Concepts
- 8 books
- 46 Source records
- 182 content-source mappings
- 5 approved full Immersions
- 2 additional draft Immersions with known evidence gaps
- 1 deprecated duplicate Immersion retained only for history

Approved full Immersions:
- termite airflow / self-organization reference
- B01 attention and inattentional blindness
- B02 memory stability
- B03 multisensory balance control
- W01 river baseflow and delayed water storage

For all 5 approved Immersions:
- primary question is approved
- rubric is approved
- all learning steps are approved and bilingual
- recall is linked to the correct question
- connection and completion states are present
- scientific claims are source-mapped
- linked Concepts used by the approved experiences have Source mappings

The termite reference slice was brought into the same evidence standard as the newer content on 2026-09-21. Its airflow, structure, species-variation and self-organization claims are now mapped to peer-reviewed primary research.

Still intentionally gated:
- T01 sensor measurement - draft, evidence gap, no full learning steps yet
- L01 tree water transport - draft, evidence gap, no full learning steps yet

Do not expand these or add more random Immersions before the first-user validation checkpoint unless a product test specifically requires them.

## P0 - First-user product validation

Next product checkpoint:
- observe the first older-adult user using Today and Explore without assistance
- have the learner enter and complete at least one newly approved Immersion
- observe orientation, reading comfort, navigation, recall prompt comprehension and feedback comprehension
- record where help is requested or the learner hesitates
- verify large-text mode and recovery from back/retry paths
- distinguish content-comprehension problems from interaction problems

The goal is to validate the core loop with real behavior before adding another content wave.

## P1 - Audio

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

## P1 - Voice

Implemented in the Chrome web flow:
- record
- upload to the server endpoint
- transcribe
- editable transcript
- explicit confirmation
- evaluate only after confirmation

Provider quality/privacy decisions remain open; Gemini audio transcription is a current implementation for testing, not a permanent provider decision.

## P1 - Persistence and delayed review

Content schema and approved content are live in Supabase.

Next:
- decide anonymous first use vs account required
- add user/progress/answers/review history in a later migration
- migrate browser-local progress deliberately
- enable delayed review only after durable learner state exists

## P1 - API protection

Before broader distribution:
- auth
- rate limiting
- abuse protection
- provider usage monitoring

## P2 - Device/accessibility QA

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
- comparing several complete learning experiences
- content-flow validation across more than one domain

It is not yet a full private alpha of the intended product because:
- TTS playback is not live
- server-side learner persistence is not live
- delayed review is not live
- API protection for broader distribution is not complete
- most discovery questions intentionally expose metadata before their full learning experiences are approved

The next bottleneck is no longer lack of approved sample content. It is real-user validation of the experience.
