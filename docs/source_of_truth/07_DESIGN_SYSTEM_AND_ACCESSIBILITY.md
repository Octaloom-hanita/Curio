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

The mark suggests opening a system and seeing what is happening inside. It should not be treated as a literal book, door, brain or AI symbol.

Official illustration principle: **Reveal the mechanism**.

The visual system should make mechanisms visible through:
- layers
- flows
- cycles
- connections
- cutaways
- restrained spot illustrations

Black/ink anchors the system. Orange leads. Purple, green, blue and yellow support functional distinctions and explanatory structure.

Reference workflow:
- use Impeccable as the UI craft/critique/polish framework
- use VoltAgent/awesome-design-md as a reference library, including strong editorial/audio product patterns
- do not copy gradients, layouts, typography or brand devices from references
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

Production illustrations and icons should be reusable assets/components rather than screenshots cropped from concept boards.

Illustrations should:
- clarify mechanisms
- use simple bold educational forms
- support motion/flow/structure
- remain secondary to the explanation
- stay legible at older-adult text scales
- use a consistent stroke/shape grammar across subject areas
- avoid encoding meaning by color alone

For reusable UI icons:
- keep the core SVG/icon geometry independent from its circular background
- add color/background in the UI layer when possible
- label unfamiliar icons
- preserve at least 56px touch targets for primary actions

Avoid literal decorative illustrations that create ambiguity.

The termite MVP therefore uses abstract airflow/temperature/cycle visuals instead of a literal termite-mound character.

### Production visual asset families

Current code-level visual system:
- `src/BrandSystem.tsx` - production implementation of The Opening mark
- `src/IconSystem.tsx` - navigation, learning, audio/voice, feedback, utility and discovery icons
- `src/IllustrationSystem.tsx` - mechanism illustrations, topic visuals and empty-state illustrations
- `src/Visuals.tsx` - compatibility layer that maps learning-step scenes to the production illustration system

Mechanism illustration set:
- airflow
- temperature difference
- structural paths
- decentralized/local interaction
- daily cycle
- recall
- concept connection
- completion

Topic visual set:
- Earth
- life
- brain
- cognition
- society
- body
- technology
- science

Empty-state set:
- no reviews due
- no saved items
- coming soon
- offline

Visual assets should be implemented as reusable SVG-backed React Native components so the same source works on web now and native Expo later.

Current UI polish rules:
- use The Opening mark in the product header instead of a generic colored dot
- use topic visuals on discovery cards when a dedicated visual exists
- do not reduce entire unavailable cards with opacity; use clear status copy plus softer surfaces/borders so text remains readable
- mechanism illustrations may sit on a quiet bounded surface, but explanatory text remains the dominant layer
- use the same icon system for navigation controls such as Back instead of text glyph substitutes

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
