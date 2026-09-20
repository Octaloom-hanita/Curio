# Curio DESIGN.md

## Design thesis

Curio is an adult learning companion that makes hidden mechanisms visible.

The visual identity combines:
- **The Opening** - the approved black C shell with the traced purple rear plane, orange front plane, white opening seam and green projection from the reference board
- **Reveal the mechanism** - illustrations expose structure, movement, layers, cycles and relationships
- **The Curious Study** - editorial, warm, intelligent, colorful and calm

This file is implementation guidance for design and coding agents. The canonical product rules remain in `docs/source_of_truth/`.

## Visual character

Curio should feel editorial, colorful, precise, warm, adult and curious.

Avoid long stacks of identical bordered cards, generic SaaS chrome, tiny colored accent lines standing in for a real color system, decorative science imagery, fake controls and decorative background gradients.

## Palette

Primary:
- Orange `#FF643D`
- Green `#35C97A`
- Purple `#B98BDE`
- Blue `#5DA9FF`
- Yellow `#FFD84D`
- Ink `#121212`

Soft fields:
- Orange soft `#FFE8DF`
- Green soft `#E2F7EA`
- Purple soft `#EEE2F7`
- Blue soft `#E4F1FF`
- Yellow soft `#FFF3BE`

Surfaces:
- Canvas `#F8F6F1`
- Surface `#FFFFFF`
- Soft `#F2EEE7`
- Hairline `#D8D1C7`

Color supports meaning but never carries meaning by itself.

## Typography

- Golos Text for UI, controls and reading body
- Literata for selective editorial display headings
- Large Cyrillic body text is a product requirement
- Body readability wins over decorative hierarchy

## Icon system

Icons use strong filled shapes, dark outlines or dark internal geometry, simple silhouettes readable at 24px, one dominant semantic color, and consistent visual weight. Avoid thin generic outline-library aesthetics.

Primary navigation:
- Today: orange house
- Explore: green compass disc
- Review: purple check disc
- Library: blue book spines
- Profile: yellow person

Core learning actions:
- Read: orange open book
- Listen: green play disc
- Explain: purple speech bubble
- Connect: blue network nodes
- Search: ink magnifier
- Save: yellow bookmark

## Illustration system

Mechanism visuals are explanatory illustrations, not generic diagrams. For the termite reference slice, reuse a consistent mound/cutaway silhouette across steps so the learner sees one system change over time. Use colored zones, dark structural outlines, bold arrows, nodes/lines, cutaways and layers when they clarify the mechanism. Do not imply unsupported scientific detail.

Topic visuals are bolder and more iconic than mechanism diagrams. They may be playful in shape while remaining adult.

## Layout

Discovery uses editorial sections, generous whitespace, hairline separators and selective large tinted blocks. Avoid one-card-per-object repetition.

Immersion rhythm:
1. orientation/progress
2. mechanism visual when useful
3. main idea
4. explanation
5. pedagogically justified interaction
6. one dominant next action

Bottom navigation is visible on discovery surfaces and hidden during active Immersion.

## Reference-use rule

External DESIGN.md references contribute transferable craft principles only:
- Figma: confident color blocks inside a rigorous frame
- Notion: warm editorial hierarchy
- Apple: restraint and whitespace
- Airbnb: clear navigation and generous interaction sizing
- The Verge: strong contrast between editorial display and utility metadata

Do not copy their brand assets, proprietary typography, layouts or component identity.
