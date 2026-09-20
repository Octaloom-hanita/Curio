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
- Discovery is broader than publication: curated question/book/phenomenon metadata may be browsable while full Immersions remain gated.
- Current discovery sequence is Featured Questions -> Areas -> Books -> Phenomena.
- Books open questions; they are not presented as book-summary products.

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

Current discovery/content state:
- 8 discovery areas are browsable
- 31 curated discovery questions are visible (30-question seed + termite reference question)
- 8 project books are visible as discovery/research objects
- 1 phenomenon is currently mapped
- 1 full Immersion (termite reference) is approved
- B01 attention/inattentional-blindness is evidence-verified but remains ai_generated pending owner/editorial approval
- Chrome voice record -> transcribe -> edit -> confirm -> evaluate is implemented
- ElevenLabs generation/storage foundation is implemented; playback remains pending

Next:
1. Validate the new Today/Explore discovery experience with the first user.
2. Complete editorial approval of B01 before publishing or generating TTS from it.
3. Add audio playback for ready audio assets.
4. Decide anonymous first use vs account required.
5. Add learner/progress/review persistence in a later migration.
6. Keep explanatory content, rubrics and learning steps gated until approval.
