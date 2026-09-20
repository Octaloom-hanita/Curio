# Curio - Design System and Accessibility

## Current visual direction

Working direction: The Curious Study.

Curio should feel:
- intelligent
- warm
- colorful
- clear
- editorial
- exploratory
- adult

It should not feel:
- childish
- like a school test
- like a SaaS dashboard
- like a generic AI chatbot
- like an infinite social feed

## Brand system

Approved direction: The Opening.

The mark expresses Curio's core promise: open a system and reveal how it works.

Brand-mark rules:
- Ink is the structural anchor.
- Orange/yellow is the leading opening plane.
- Purple and green appear as inner/depth planes.
- The mark must remain legible at small sizes and in monochrome.
- The wordmark and tagline are separate from the core mark so compact UI can use the mark alone.

Approved illustration principle: Reveal the mechanism.

Visuals should expose hidden structure through layers, flows, cycles, connections and cutaways. The mechanism is the subject; illustration is not decorative filler.

Functional UI icons use a consistent simple line language. Their container/state may use Curio colors, but meaning must not depend on color alone.

## Current implementation palette

- Orange: #FF643D
- Green: #35C97A
- Purple: #B98BDE
- Blue: #5DA9FF
- Yellow: #FFD84D
- Ink: #121212
- Text: #1E1E1E
- Muted: #555555
- Canvas: #F8F6F1
- Surface: #FFFFFF
- Soft surface: #F2EEE7
- Hairline: #D8D1C7
- Warm note: #FFF1E8
- Warning soft: #FFF6E5

## Typography

Fonts:
- Golos Text for UI and body
- Literata selectively for editorial display

Current type scale:
- Display 40/48
- Headline 32/40
- Title 24/32
- Body 21/31
- Body small 18/28
- Label 18/24
- Meta 16/22

Body readability wins over decorative hierarchy.

## Accessibility

Minimum requirements:
- target size at least 56px for primary interactions
- large Cyrillic body text by default
- user-selectable larger text
- sufficient contrast
- hierarchy survives text scaling
- meaning never relies on color alone
- familiar labels accompany unfamiliar icons
- recording/playback state is explicit
- keyboard and screen-reader QA before broader release

## Layout

Learning is primarily a single-column reading experience.

Screen rhythm:
1. progress/context
2. main idea
3. explanation
4. optional interaction
5. next action

Avoid repeated cards that narrow the reading measure.

On large screens, constrain readable line length rather than stretching text.

## Illustration language

Illustrations should:
- clarify mechanisms
- use simple bold educational forms
- support motion/flow/structure
- remain secondary to the explanation

Avoid literal decorative illustrations that create ambiguity.

The termite MVP therefore uses abstract airflow/temperature/cycle visuals instead of a literal termite-mound character.

## Motion

Motion should be subtle and explanatory.

Useful motion:
- airflow direction
- cycle/reversal
- recording state
- progress transitions

Avoid:
- confetti
- attention-seeking bounce
- decorative AI sparkles
- gamification animation

## Feedback UI

Feedback is guidance, not grading.

Four states share one component structure.

Use copy and semantic treatment to explain:
- what was understood
- what is missing
- what misconception needs correction
- what to do next

## Older-adult rule

Do not simplify intellectual content merely because the first user is older.

Simplify interaction complexity, not ideas.
