# Curio Visual Asset Implementation

Updated: 2026-09-20

## Purpose

This document translates the approved Curio visual direction into reusable production components for Expo / React Native Web.

Brand direction:
- Logo concept: The Opening
- Illustration principle: Reveal the mechanism
- Product tone: adult, warm, clear, editorial, colorful
- Functional icons stay simple; color is supplied by state/container rather than carrying meaning alone.

## Current production assets

### Brand

`src/visuals/CurioMark.tsx`

Use for:
- app header
- compact brand lockups
- app icon source artwork later

The mark uses the approved black anchor with orange/yellow, purple and green internal planes.

### Functional icon system

`src/visuals/CurioUIIcon.tsx`

Current names:

Navigation:
- home
- explore
- review
- library
- profile

Learning:
- read
- listen
- explain
- connect
- search
- save

Utility:
- back
- close
- info
- share
- settings

Feedback/action:
- check
- retry
- warning
- clock

Audio/voice:
- play
- pause
- record
- stop
- edit
- confirm

Example:

```tsx
<CurioUIIcon name="review" size={32} />
<CurioUIIcon name="listen" size={28} accent={colors.green} />
```

## Accessibility rules

- Icons do not replace text labels for unfamiliar actions.
- Primary interactive targets remain at least 56px even when the icon is 24-32px.
- Selected/error/success states must use copy or another non-color signal.
- Decorative icons should be hidden from accessibility APIs.
- Interactive wrappers own the accessibility label, not the SVG itself.

## Visual hierarchy

Functional UI:
- line icon
- 24-32px typical visual size
- one ink stroke language
- accent is optional and secondary

Content/domain visuals:
- may be richer and more colorful
- explain a mechanism, relationship, flow, cycle, layer or connection
- should not become decorative topic mascots

## Next production batches

1. Feedback-state components wired into the existing answer flow.
2. Named mechanism illustrations: airflow, heat-gradient, prediction-loop, network-diffusion, feedback-loop.
3. Empty-state illustrations only when the corresponding product state exists.
4. App icon export set once the mark is validated at small sizes.

Do not add visible audio, microphone, review or navigation controls until their underlying product functionality exists.
