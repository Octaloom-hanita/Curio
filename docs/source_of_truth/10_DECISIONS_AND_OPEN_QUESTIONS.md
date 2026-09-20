# Curio - Decisions and Open Questions

Updated: 2026-09-20

## Confirmed decisions

### Platform
- Web-first MVP in Chrome.
- Expo / React Native Web now.
- Native iOS/Android later if the core loop validates.

### Languages
- Russian-first.
- RU and EN supported from the content/model layer.

### First user
- Optimize accessibility and comprehension for an older adult.
- Do not make tone or intellectual content childish.

### Learning
- Understanding and memory are separate.
- Explanation precedes testing when prior knowledge is unlikely.
- Hypothesis prompts are selective.
- AI extracts evidence.
- Deterministic logic classifies.
- Immediate correct answer does not mean mastery.
- Delayed recall is the stronger memory signal.

### Content
- Books are discovery/research objects.
- Concepts are reusable atomic units.
- Curio publishes original explanations.
- Important claims map to sources.
- Scientific disagreement is represented honestly.
- Curio is broad scientific curiosity, not a nature-only product.
- Brain/neuroscience and cognition/learning are major pillars alongside Earth, life, society, body, technology and systems.
- Professions/fields are a discovery lens in v1, not a dedicated core database entity.
- The first curated database seed contains 30 bilingual questions and 6 balanced Immersion skeletons.

### AI
- Current evaluation provider is Gemini through Vercel server-side code.
- Provider secrets never go to the client.
- Structured model output is validated.
- Technical failures do not penalize learning.

### Audio
- ElevenLabs is the planned TTS provider.
- Generate from approved Curio text.
- Store/version audio instead of generating on every play.

### Voice
- Record -> transcribe -> editable transcript -> confirm -> evaluate.
- Never evaluate unconfirmed STT output.

### Data
- Supabase is the planned backend for Postgres/Auth/Storage.
- Current browser-local persistence is temporary.

### Design
- Official logo direction: The Opening.
- The Opening has a reusable in-app vector implementation in `src/BrandSystem.tsx`.
- Official illustration principle: Reveal the mechanism.
- Production visuals use reusable vector/component assets, not crops from concept boards.
- The production asset taxonomy includes UI icons, mechanism illustrations, topic visuals and empty states.
- Mechanism visuals for the termite slice distinguish airflow, temperature difference, structural paths, decentralized interaction and daily cycle instead of reusing one generic diagram.
- Impeccable is the UI craft/critique workflow.
- VoltAgent/awesome-design-md is a reference source, not a template to copy.
- Large readable type.
- Stronger Curio color system.
- Illustrations support mechanisms.
- No generic AI gradients, glassmorphism or dashboard aesthetic.
- One clear next action.
- Unavailable discovery items use softer surfaces and explicit status labels rather than low-opacity treatment that harms readability.

## Superseded decisions

The following older ideas are no longer canonical:

- Mobile-native first -> superseded by web-first private alpha.
- Mandatory hypothesis before explanation -> superseded by selective hypothesis use.
- Literal termite mound illustration -> superseded by abstract mechanism visuals.
- Showing placeholder audio/microphone controls -> superseded by hide-until-functional.
- Very muted quiet-study visual direction -> evolved into a brighter Curious Study direction while preserving reading clarity.

## Open questions

### Content
- How much book-level learning versus concept/phenomenon learning belongs in MVP?
- Which of the first six Immersion skeletons should reach scientific/editorial approval first?
- Which additional profession/field lenses are useful enough in discovery to justify a future dedicated entity?

### Sources and rights
- Which uploaded book copies are verified as lawfully acquired?
- Which open-access licenses permit internal research, derivative content or commercial reuse?
- What exact source-review workflow will be used before approval?

### Audio
- Which ElevenLabs Russian voice?
- One house voice or multiple voices?
- Which playback speeds should be prominent?

### Speech-to-text
- Which provider gives the best Russian accuracy/cost/privacy tradeoff?
- Gemini audio versus a dedicated transcription model should be tested rather than assumed.

### Persistence
- Anonymous first use or account required?
- When should browser-local data migrate to Supabase?

### Review
- How many daily reviews feel bounded for the first user?
- When should the simple review heuristic be replaced?

### Privacy
- How long should raw voice recordings be retained?
- Can the user delete voice/transcript history?
- What provider-data settings are required?

### Commercial direction
- Personal project/private alpha first.
- Future public/commercial model remains undecided.

## Next planning checkpoint

Do not add many random topics directly to code.

The first balanced Content DB schema and seed are now live in Supabase and versioned in the repository.

Initial QA confirmed:
- 18 content tables
- RLS enabled on every content table
- 8 discovery areas
- 30 bilingual questions
- 23 first-wave concepts
- 6 first-wave Immersion skeletons
- 8 project source records
- 0 approved Immersions, intentionally

Next:
1. Continue claim-level source mapping and editorial review for the first six Immersions.
2. Decide anonymous first use vs account required.
3. Add learning/user persistence in a later migration.
4. Wire approved catalog/discovery data into the app.
5. Keep draft/review content inaccessible to public client reads.

Microphone and ElevenLabs continue after the content/persistence foundation is stable.
