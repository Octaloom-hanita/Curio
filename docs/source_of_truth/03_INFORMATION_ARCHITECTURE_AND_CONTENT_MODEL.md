# Curio - Information Architecture and Content Model

## Primary product surfaces

Long-term primary navigation:

- Сегодня - bounded daily starting point
- Исследовать - discovery
- Повторить - active recall
- Библиотека - saved and ongoing learning
- Profile/settings via avatar

The current MVP uses a reduced topic-first navigation.

## Explore

Explore supports:

### Books
Browse by category, author, topic, difficulty and content depth.

### Topics
Topic pages can contain:
- overview
- concepts
- books
- Immersions
- questions
- phenomena
- related topics

### Questions
Curiosity-first entry points.

### Phenomena
Real-world cases that reveal a mechanism.

## Core content entities

### Book
A discovery and research object.

A book may have:
- catalog-only status
- overview status
- full structured learning status

Books do not own duplicate copies of concepts.

### Concept
Reusable atomic knowledge unit.

Fields should support:
- canonical name
- RU and EN titles
- simple explanation
- detailed explanation
- deeper explanation
- difficulty
- editorial status
- version
- source links

### Immersion
A bounded guided learning experience around a question, mechanism or phenomenon.

Typical elements:
- orientation
- context
- mechanism
- evidence
- nuance/debate
- recall
- feedback
- connection
- completion

### Learning step/card
Possible types:
- concept
- mechanism
- example
- term
- evidence
- misconception
- debate
- connection
- question
- recall
- editorial note

### Question and rubric
A question references one or more concepts and a versioned rubric.

### Source
A source is a first-class record, not a note pasted into prose.

### Connection
A connection between concepts must explain why the link matters.

Connection types:
- same mechanism in another domain
- prerequisite
- contrast
- application
- historical development

## Content scale target

Initial catalog direction:
- 200-300 discoverable books over time
- 30-50 full structured learning experiences
- 20-30 Immersions
- 300-500 reusable concepts

Do not build this full scale before the editorial and learning pipelines are validated.

## Suggested content statuses

### Catalog status
- catalog
- overview
- full

### Editorial status
- draft
- ai_generated
- reviewed
- approved
- deprecated

Only approved content is publishable.

## Bilingual model

The application is Russian-first but supports RU and EN.

Content objects should have localized fields instead of embedding all copy directly in UI code.

The same concept ID should map to both language versions.

## Search direction

Phase 1:
- metadata
- exact title/author
- full-text

Phase 2:
- embeddings and semantic retrieval
- editorial relevance
- concept graph connections
