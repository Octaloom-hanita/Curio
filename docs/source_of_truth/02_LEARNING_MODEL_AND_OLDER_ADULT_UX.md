# Curio - Learning Model and Older-Adult UX

## Goal

Curio is designed for durable understanding, not passive exposure.

The system combines:
- progressive explanation
- self-explanation
- retrieval practice
- spaced review
- feedback
- cross-domain transfer
- optional hypothesis generation when it is pedagogically meaningful

## Understanding and memory are separate

### Understanding state

Suggested canonical states:
- unknown
- exposed
- partial
- understood
- misconception_detected
- unable_to_evaluate

### Memory strength

Memory is tracked separately and depends primarily on delayed retrieval history.

A correct answer immediately after learning does not establish durable memory.

## Healthy learning sequence

For a learner who does not already have the necessary background:

1. Orientation - what will be understood
2. Context
3. Mechanism in small causal steps
4. Example or observation
5. Summary of the central model
6. Scientific nuance or limitation
7. Explain in own words
8. Feedback
9. Connection
10. Clear stopping point
11. Delayed recall later

Do not test before teaching when prior knowledge is unlikely.

## Hypothesis prompts

Hypothesis generation is optional, not mandatory.

Use it when:
- the learner can reasonably form an intuition
- it activates useful prior knowledge
- a wrong hypothesis will make the later mechanism more memorable

Do not use it merely to create interaction.

A wrong hypothesis is never a failure state.

## Open-answer evaluation

Every recall question should define:
- required semantic points
- optional enrichment points
- known misconceptions
- critical contradictions
- example strong answer
- example partial answer
- rubric version

Evaluation is semantic, not keyword-based.

## User-facing feedback states

Current canonical labels:

Russian:
- Понял
- Почти понял
- Стоит повторить
- Не удалось уверенно оценить

English:
- Understood
- Almost there
- Worth reviewing
- Could not evaluate confidently

A technical failure must never look like learner failure.

## Review scheduling

Private-alpha heuristic:

- understood on first exposure -> review around 3 days
- partial or review -> around 1 day
- successful delayed recall -> around 7 days
- second successful delayed recall -> around 21 days
- unable_to_evaluate -> neutral retry/reschedule

These intervals are provisional and can be replaced by a stronger scheduler later.

## Progressive depth

### Simple
Intuition and plain language.

### More detail
Mechanism and important terminology.

### Deeper
Evidence, technical nuance, limitations and debate.

Deeper layers are optional and should add information rather than restate the same paragraph.

## Older-adult UX rules

The first user should be able to use Curio without instruction.

Rules:
- orient before asking for action
- explain why a question is being asked
- large text by default
- explicit text-size control
- large touch targets
- one dominant next action
- avoid unnecessary jargon
- preserve answers on failure
- allow return to the explanation without penalty
- no fake or disabled-looking features presented as functional
- visuals must clarify a mechanism, not become a guessing game
- sessions must feel bounded and finishable

## Real-user acceptance

The learner should be able to:
- know what to do on every screen
- read for several minutes without strain
- answer without feeling ambushed by a test
- recover easily after uncertainty
- stop after a meaningful unit
