# Curio - Canonical Source of Truth

Updated: 2026-09-20

## Purpose

This folder is the canonical product documentation set for Curio.

It consolidates earlier PRDs, learning documents, design versions, vertical-slice specifications, QA notes and implementation decisions into a smaller set of current documents.

When an older generated Markdown file conflicts with this folder, this folder wins.

## Canonical documents

1. `01_PRODUCT_VISION_AND_SCOPE.md`
2. `02_LEARNING_MODEL_AND_OLDER_ADULT_UX.md`
3. `03_INFORMATION_ARCHITECTURE_AND_CONTENT_MODEL.md`
4. `04_CONTENT_SOURCES_RIGHTS_AND_EDITORIAL.md`
5. `05_AI_AUDIO_AND_VOICE_SYSTEM.md`
6. `06_TECHNICAL_ARCHITECTURE_AND_DATA.md`
7. `07_DESIGN_SYSTEM_AND_ACCESSIBILITY.md`
8. `08_MVP_STATUS_ROADMAP_AND_QA.md`
9. `09_TERMITE_REFERENCE_SLICE.md`
10. `10_DECISIONS_AND_OPEN_QUESTIONS.md`

## What is archival

Earlier files such as:
- numbered PRD documents 01-30
- previous DESIGN versions and design previews
- old surface briefs
- Impeccable workflow notes
- intermediate accessibility documents
- temporary QA plans
- superseded termite flow specifications

remain useful as history, but they are not product authority unless a canonical document explicitly points to them.

## Current product hierarchy

If two canonical documents still appear to conflict, use this order:

1. Product vision and scope
2. Learning model and older-adult UX
3. Content/source integrity
4. Current MVP status and QA
5. Technical architecture and data
6. AI/audio/voice system
7. Information architecture and content model
8. Design system and accessibility
9. Reference vertical slices

## Working rule

Curio should optimize for durable understanding, not content consumption.

The learner should be able to:
- understand the central mechanism
- explain it in their own words
- recall it later
- connect it to another idea
- continue exploring without feeling trapped in a rigid course

## Current platform reality

The current private alpha is web-first and runs in Chrome.

React Native + Expo remains the universal application direction so native iOS/Android can follow later.
