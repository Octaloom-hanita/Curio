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
- Large readable type.
- Stronger Curio color system.
- Illustrations support mechanisms.
- No generic AI gradients, glassmorphism or dashboard aesthetic.
- One clear next action.

## Superseded decisions

The following older ideas are no longer canonical:

- Mobile-native first -> superseded by web-first private alpha.
- Mandatory hypothesis before explanation -> superseded by selective hypothesis use.
- Literal termite mound illustration -> superseded by abstract mechanism visuals.
- Showing placeholder audio/microphone controls -> superseded by hide-until-functional.
- Very muted quiet-study visual direction -> evolved into a brighter Curious Study direction while preserving reading clarity.

## Open questions

### Content
- Which 20-30 questions form the first curated knowledge map?
- Which 4-6 should become full Immersions first?
- How much book-level learning versus concept/phenomenon learning belongs in MVP?

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

First complete:
Source Inventory -> Concept Map -> First 20-30 Questions -> First 4-6 Immersions -> Content DB seed.

Then continue microphone, ElevenLabs and Supabase implementation against that structure.
