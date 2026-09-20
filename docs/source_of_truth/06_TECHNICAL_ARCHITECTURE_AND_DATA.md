# Curio - Technical Architecture and Data

## Current implementation reality

### Client
- Expo
- React Native Web
- TypeScript
- web-first MVP

### Hosting
- Vercel

### Server
- Vercel Functions

### AI
- Gemini through a server-side adapter

### Current persistence
- browser localStorage for MVP progress/draft

### Backend data layer
Planned runtime:
- Supabase Postgres
- Supabase Auth
- Supabase Storage

Prepared in repository, not yet applied to a Supabase project:
- content migration v1
- balanced bilingual content seed v1

### Planned audio
- ElevenLabs TTS
- stored generated audio assets

### Planned analytics
- PostHog after the core loop is stable

## Platform direction

The architecture remains universal.

Current order:
1. web MVP in Chrome
2. validate learning/voice/audio loop
3. add durable backend state
4. package native builds later with Expo/EAS

## Security

Never expose:
- Gemini API keys
- ElevenLabs secret keys
- Supabase service-role keys
- internal admin secrets

Provider calls that require secrets run server-side.

Voice uploads should eventually use signed upload URLs directly to storage.

## Current API

Working:
- POST `/api/evaluate-answer`

Planned:
- POST `/api/audio/upload-url`
- POST `/api/transcribe`
- POST `/api/answers`
- POST `/api/answers/:id/evaluate`
- POST `/api/sessions/:id/complete`
- GET `/api/reviews/due`
- internal TTS generation endpoint/job

## Data model - content

The repository now contains an implementation-ready first migration for the content layer.
It uses stable language-independent text IDs with RU/EN localized fields on the same records.

Core tables/entities:
- users
- user_interests
- authors
- books
- categories
- topics
- concepts
- book_concepts
- concept_connections
- phenomena
- immersions
- immersion_steps
- learning_cards
- questions
- question_concepts
- rubrics
- sources
- content_sources
- audio_assets

## Data model - learning

### learning_sessions
Tracks bounded learning sessions.

### user_concept_progress
Stores separate learning state, review dates and depth.

Do not reduce this to one mastery flag.

### user_answers
Should store:
- answer text
- input mode
- evaluation result
- covered points
- missing points
- misconceptions
- rubric version
- model metadata
- timestamps

### review history
Keep enough history to evolve the scheduler later.

### saved_items
Books/topics/concepts saved by the learner.

## Important invariants

- one concept can appear in many books/Immersions
- evaluations reference exact rubric versions
- audio references exact content versions
- source-backed claims can trace to source records
- technical failure does not downgrade progress
- client state is not the final source of truth once Supabase is active

## Search

Phase 1:
- metadata filters
- PostgreSQL full-text

Phase 2:
- embeddings
- pgvector
- hybrid ranking

Do not introduce vector infrastructure before curated content volume justifies it.
