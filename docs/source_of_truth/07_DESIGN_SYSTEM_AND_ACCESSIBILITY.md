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

## Brand mark and visual thesis

Official logo direction: **The Opening**.

Official illustration principle: **Reveal the mechanism**.

The visual system should make mechanisms visible through layers, flows, cycles, connections and cutaways. Black/ink anchors the system. Orange leads. Purple, green, blue and yellow support explanatory structure.

Reference workflow:
- use Impeccable as the UI craft/critique/polish framework
- use VoltAgent/awesome-design-md as a reference library, not a template to copy
- Curio keeps its own visual language and accessibility rules

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

### Production visual asset families

Current code-level visual system:
- `src/BrandSystem.tsx` - reusable implementation of The Opening mark
- `src/IconSystem.tsx` - navigation, learning, audio/voice, feedback, utility and discovery icons
- `src/IllustrationSystem.tsx` - mechanism illustrations, topic visuals and empty-state illustrations
- `src/Visuals.tsx` - maps learning scenes to the production illustration system

Discovery cards use dedicated topic visuals when available. Mechanism illustrations sit on quiet bounded surfaces while explanatory text remains dominant.

### Visual craft pass v2

The approved visual references are treated as a specification for craft, not as loose inspiration.

Implementation rules:
- navigation and learning-action icons use filled, recognizable silhouettes with strong color fields and dark outlines
- color is allowed to occupy meaningful shape area; avoid reducing the palette to tiny accent strokes
- topic visuals are free-standing illustrations rather than generic gray icon tiles
- discovery pages use editorial rhythm, separators, generous whitespace and selective tinted blocks instead of stacking every object inside identical bordered cards
- one visual family should feel coherent at 24px, 32px and 48px
- mechanism illustrations should reveal structure, direction, layers or relationships, not decorate the lesson
- Curio may learn composition principles from external DESIGN.md references, but must not copy another product's visual identity

Bottom navigation is visible on discovery/home surfaces, where it supports orientation without interrupting the bounded learning flow. Today and Explore are functional in the current MVP. Review, Library and Profile may appear only as clearly disabled future destinations until those product areas exist. The Immersion itself keeps one dominant next action and does not show persistent primary navigation.

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
