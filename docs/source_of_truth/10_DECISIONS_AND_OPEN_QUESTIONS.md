# Curio - Decisions and Open Questions

Updated: 2026-09-21

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
- Discovery is broader than publication: curated question/book/phenomenon metadata may be browsable while full Immersions remain gated.
- Current discovery sequence is Featured Questions -> Areas -> Books -> Phenomena.
- Books open questions; they are not presented as book-summary products.
- Full learning content remains gated until its question, rubric, learning steps and scientific claim mapping pass editorial review.
- Five full Immersions now meet the current approval gate. This is enough content diversity for the first supervised product-validation round; additional content expansion should wait for that evidence.

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
- Supabase is live for the content catalog, source/content records and audio-asset foundation.
- Supabase remains the planned backend for Auth and learner persistence.
- Current learner progress persistence in the browser is temporary.

### Design
- Official logo direction: The Opening.
- Official illustration principle: Reveal the mechanism.
- Production visuals use reusable vector/component assets.
- Impeccable is the UI craft/critique workflow.
- VoltAgent/awesome-design-md is a reference source, not a template to copy.
- Large readable type.
- Stronger Curio color system.
- Illustrations support mechanisms.
- No generic AI gradients, glassmorphism or dashboard aesthetic.
- One clear next action.
- Bottom navigation is used on discovery surfaces for orientation, but stays out of the active Immersion so the learning flow keeps one dominant next action.
- Navigation destinations that are not implemented must be visibly disabled rather than behaving like fake controls.

## Superseded decisions

The following older ideas are no longer canonical:

- Mobile-native first -> superseded by web-first private alpha.
- Mandatory hypothesis before explanation -> superseded by selective hypothesis use.
- Literal termite mound illustration -> superseded by abstract mechanism visuals.
- Showing placeholder audio/microphone controls -> superseded by hide-until-functional.
- Very muted quiet-study visual direction -> evolved into a brighter Curious Study direction while preserving reading clarity.
- Expanding more Immersions before validating the first approved content set -> superseded by first-user validation as the current product checkpoint.

## Open questions

### Content
- How much book-level learning versus concept/phenomenon learning belongs in MVP?
- After first-user validation, should T01 sensor measurement, L01 tree-water transport, or a different question become the next approved Immersion?
- Which additional profession/field lenses are useful enough in discovery to justify a future dedicated entity?

### Sources and rights
- Which uploaded book copies are verified as lawfully acquired?
- Which open-access licenses permit internal research, derivative content or commercial reuse?
- The working approval gate is now claim mapping -> scientific/editorial QA -> bilingual content/rubric QA -> approval. Exact human ownership/sign-off rules for a broader public product remain open.

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

## Current content checkpoint

The balanced Content DB is live in Supabase and the first approval wave has completed.

Current database state verified on 2026-09-21:
- 8 discovery areas
- 31 questions
- 42 Concepts
- 8 books
- 46 Source records
- 182 content-source mappings
- 8 Immersion records total
- 5 approved full Immersions
- 2 draft Immersions with evidence gaps
- 1 deprecated duplicate Immersion
- 78 Immersion steps total

Approved full Immersions:
1. termite airflow / self-organization reference
2. B01 attention and inattentional blindness
3. B02 memory stability
4. B03 multisensory balance control
5. W01 river baseflow and delayed water storage

Integrity QA confirmed for every approved Immersion:
- approved primary question
- approved rubric
- all steps approved and bilingual
- one correctly linked recall step
- connection and completion states
- source mappings for scientific claims
- source mappings for linked Concepts

The original termite reference slice had been the remaining source-traceability exception. On 2026-09-21 it was mapped to peer-reviewed primary work on diurnal thermal ventilation, African mound airflow and decentralized mound morphogenesis, and its evidence status was changed to verified.

## Next planning checkpoint

The next bottleneck is real-user evidence, not more content volume.

Next:
1. Observe the first older-adult user using Today and Explore without assistance.
2. Have the learner complete at least one of B01, B02, B03 or W01 end to end.
3. Log orientation, navigation, reading, recall-prompt and feedback comprehension failures separately.
4. Fix the smallest high-impact UX/content issues found in that session.
5. Then prioritize audio playback and durable learner persistence/delayed review.
6. Keep T01, L01 and new explanatory content gated until evidence and editorial approval are complete.
