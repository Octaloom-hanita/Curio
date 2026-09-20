# Curio - Older Adult MVP UX Audit and First-User Protocol

Updated: 2026-09-21

## Product rule

The private alpha must optimize for an older adult who wants to understand mechanisms, not for showcasing features.

Interaction should be simple even when the intellectual content is not.

## Problems already corrected

Earlier versions exposed several avoidable UX problems:
- asking for a hypothesis before enough context was taught
- showing unfinished controls
- using a literal termite illustration that obscured the mechanism
- introducing caveats before a simple mental model existed
- weak recovery after uncertainty
- large typography without an explicit reading-size control
- unclear distinction between discovery metadata and learning content that was actually ready

The current product rules are:
- orient before interacting
- teach before checking when prior knowledge is unlikely
- use hypothesis prompts selectively
- present mechanisms in small causal steps
- summarize before recall
- put nuance after the basic model
- never display fake controls
- preserve learner work on failure
- offer retry and return-to-explanation paths
- keep primary targets large
- make text size adjustable
- use visuals only when they clarify a mechanism
- keep sessions bounded with a clear ending

## Current testable product

Working in the Chrome MVP:
- RU / EN
- Today and Explore discovery
- category browsing
- five approved full Immersions
- adjustable text size
- guided text learning flow
- open-answer recall
- Gemini evaluation with deterministic learning-state classification
- misconception-aware feedback
- retry and return to explanation
- local progress/resume
- microphone recording
- server-side transcription
- editable transcript and explicit confirmation before evaluation

Not yet part of the intended full alpha:
- live TTS playback
- durable server-side learner progress
- delayed review
- complete API protection for broader distribution

## First-user session

Use Russian unless the learner chooses English.

Primary test Immersion:
- B01 - why we can look and still fail to notice

Why B01:
- familiar everyday phenomenon
- little specialist background required
- clear mechanism
- exercises the complete Explain -> Feedback loop without making the first session feel medical or overly technical

Optional second Immersion if the learner wants to continue:
- B03 - how the brain keeps us balanced

### Moderator rule

Do not teach the interface in advance.

Only intervene if the learner is genuinely blocked. When intervening, record what caused the block before helping.

Do not explain scientific content for the learner. The test is partly whether Curio itself can do that.

### Session flow

1. Open Curio on the normal Chrome setup.
2. Ask the learner to find something they would like to understand.
3. Observe Today / Explore navigation without guidance.
4. If B01 is not chosen naturally, ask the learner to open the question about looking without noticing.
5. Let the learner complete the Immersion at their own pace.
6. Let the learner answer the recall prompt in their own words.
7. Observe how they interpret the feedback and whether the next action is clear.
8. Ask them to finish the session.
9. After completion, ask only a few short retrospective questions.

### What to observe

Record concrete behavior, not impressions:
- where the learner pauses for orientation
- whether labels are understood without explanation
- whether text is comfortable before and after using text-size control
- accidental taps or navigation mistakes
- whether the learner understands why the recall question is being asked
- whether they can answer without returning to the explanation
- whether feedback feels like guidance rather than grading
- whether retry / return-to-explanation is understood
- whether the end of the session feels clearly finished
- any place where the moderator has to intervene

Also separate:
- content confusion
- interaction confusion
- technical failure
- reading/accessibility friction

## Post-session questions

Keep the debrief short:
- Что вы теперь можете объяснить своими словами?
- Был ли момент, когда было непонятно, что делать дальше?
- Был ли текст слишком мелким, большим или длинным?
- Что в объяснении помогло понять механизм лучше всего?
- Хотелось ли вам продолжить изучать что-то ещё?

Do not ask the learner to rate many screens or features. Behavioral evidence from the session is more useful at this stage.

## Pass condition for this checkpoint

The session is good enough to continue when the learner can:
- enter a learning experience without instruction
- understand the orientation and mechanism
- read comfortably for the bounded session
- understand the recall prompt
- interpret feedback and the next action
- recover from uncertainty without feeling punished
- recognize the end of the session

A scientifically correct immediate answer is not the pass condition for memory. Delayed memory remains a separate future test.

## After the session

Make only the smallest high-impact fixes revealed by observed behavior.

Do not respond to one session by adding broad new navigation, more gamification or a large new content wave.

After UX/content fixes, the next implementation priorities remain:
1. production audio playback
2. durable learner persistence
3. delayed review
