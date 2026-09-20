# Curio Supabase Content DB v1

Status: implementation-ready schema + seed, not yet applied to a Supabase project.

## What this contains

`migrations/0001_content_schema.sql`
- Curio content entities from the canonical architecture
- RU/EN localized fields on the same language-independent IDs
- editorial statuses and versioning
- source/claim traceability
- PostgreSQL full-text indexes for Russian and English
- RLS that only allows direct public reads of approved content
- no user-learning tables yet

`seed.sql`
- 8 balanced discovery areas
- 8 initial Topics
- 30 curated RU/EN learning questions
- 23 reusable Concepts for the first-wave Immersions
- 15 initial Concept Connections
- 6 first-wave Immersion skeletons
- 8 current project-book Source records
- conservative source mappings where the existing books are useful as background or inspiration

## Important product decisions encoded here

### One knowledge graph, two languages

RU and EN live on the same IDs. Example:

- `concept_attention`
- `title_ru = Внимание`
- `title_en = Attention`

There are not separate Russian and English databases.

### Broad discovery, not a nature-only product

The eight discovery areas are:

1. Earth, water, climate & environment
2. Life, evolution, animals & plants
3. Brain & neuroscience
4. Cognition, learning & decision-making
5. Human behavior, society & culture
6. Body, movement & healthy aging
7. Materials, buildings, sensors & robotics
8. Scientific thinking, invention & systems

Brain/cognition is intentionally a major pillar.

### Professions are a discovery lens, not a core entity

The current profession/field list mixes professions, disciplines and practical roles.
For v1, relevant profession/field IDs are stored on Questions in `profession_lenses text[]`.

Do not add a dedicated `professions` table until actual product behavior proves that it needs one.

### Draft means draft

The seed intentionally inserts editorial content as `draft`.

Only `approved` content should become publicly readable/publishable.
A database seed is not editorial approval.

### Books are research objects

The uploaded project books are stored as Source/Book records.
Where provenance or reuse rights are unclear, `rights_status` remains `unverified`.

The seed does not copy book text.

## First-wave Immersions

1. Looking without noticing - attention / conscious access
2. Memory stability - encoding / consolidation / retrieval / sleep
3. Balance - vestibular / proprioception / multisensory control
4. River baseflow - infiltration / groundwater / aquifers
5. Sensor to number - transduction / calibration / noise
6. Water climbing a tree - xylem / transpiration / cohesion-tension

These are skeleton records only.

Do not add Learning Steps or Rubrics for the new Immersions until claim-level source mapping is complete enough to support them.

## What is deliberately not in migration 0001

- Supabase Auth profile tables
- learning sessions
- user progress
- answers
- review history
- saved items
- voice uploads
- provider secrets

Those should be added in later migrations after the Supabase project is connected and the anonymous-vs-account-first persistence decision is made.

## Applying after Supabase is connected

Recommended sequence:

1. Create/link the Supabase project.
2. Add Supabase project configuration locally without committing secrets.
3. Apply `0001_content_schema.sql`.
4. Run `seed.sql`.
5. Verify seed counts and RLS.
6. Add a server-side content-read path.
7. Only then replace hard-coded discovery content in the app.

Do not put the Supabase service-role key in Expo/browser code.

## Initial QA queries

After applying the migration and seed:

```sql
select count(*) from public.categories;
-- expected: 8

select count(*) from public.questions;
-- expected: 30

select count(*) from public.immersions;
-- expected: 6

select count(*) from public.concepts;
-- expected: 23

select count(*) from public.sources;
-- expected: 8

select id, title_ru, title_en, evidence_status, editorial_status
from public.immersions
order by sort_order;
```

Check the publication gate:

```sql
select count(*)
from public.immersions
where editorial_status = 'approved';
-- expected initially: 0
```

That zero is intentional.
