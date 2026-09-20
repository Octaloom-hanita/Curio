-- Curio Content DB v1
-- Supabase/Postgres migration
-- Scope: curated content and source traceability only.
-- User/auth/progress tables intentionally deferred to a later migration.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------- Broad discovery ----------

create table if not exists public.categories (
  id text primary key,
  slug text not null unique,
  title_ru text not null,
  title_en text not null,
  description_ru text,
  description_en text,
  sort_order integer not null default 0,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.topics (
  id text primary key,
  category_id text references public.categories(id) on delete set null,
  slug text not null unique,
  title_ru text not null,
  title_en text not null,
  description_ru text,
  description_en text,
  sort_order integer not null default 0,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------- Atomic knowledge ----------

create table if not exists public.concepts (
  id text primary key,
  slug text not null unique,
  title_ru text not null,
  title_en text not null,
  explanation_simple_ru text,
  explanation_simple_en text,
  explanation_detailed_ru text,
  explanation_detailed_en text,
  explanation_deep_ru text,
  explanation_deep_en text,
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.concept_connections (
  id uuid primary key default gen_random_uuid(),
  from_concept_id text not null references public.concepts(id) on delete cascade,
  to_concept_id text not null references public.concepts(id) on delete cascade,
  connection_type text not null
    check (connection_type in ('same_mechanism','prerequisite','contrast','application','historical_development')),
  explanation_ru text,
  explanation_en text,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (from_concept_id, to_concept_id, connection_type),
  check (from_concept_id <> to_concept_id)
);

-- ---------- Questions and evaluation ----------

create table if not exists public.questions (
  id text primary key,
  category_id text references public.categories(id) on delete set null,
  topic_id text references public.topics(id) on delete set null,
  slug text not null unique,
  prompt_ru text not null,
  prompt_en text not null,
  profession_lenses text[] not null default '{}',
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  evidence_status text not null default 'gap'
    check (evidence_status in ('gap','partial','source_mapped','verified')),
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.question_concepts (
  question_id text not null references public.questions(id) on delete cascade,
  concept_id text not null references public.concepts(id) on delete cascade,
  relation_type text not null default 'core'
    check (relation_type in ('core','supporting','prerequisite','extension')),
  primary key (question_id, concept_id)
);

create table if not exists public.rubrics (
  id text primary key,
  question_id text not null references public.questions(id) on delete cascade,
  rubric_version integer not null check (rubric_version > 0),
  required_points jsonb not null default '[]'::jsonb,
  optional_points jsonb not null default '[]'::jsonb,
  misconceptions jsonb not null default '[]'::jsonb,
  critical_contradictions jsonb not null default '[]'::jsonb,
  strong_answer_ru text,
  strong_answer_en text,
  partial_answer_ru text,
  partial_answer_en text,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  created_at timestamptz not null default now(),
  unique (question_id, rubric_version)
);

-- ---------- Guided learning ----------

create table if not exists public.phenomena (
  id text primary key,
  category_id text references public.categories(id) on delete set null,
  slug text not null unique,
  title_ru text not null,
  title_en text not null,
  description_ru text,
  description_en text,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.immersions (
  id text primary key,
  category_id text references public.categories(id) on delete set null,
  topic_id text references public.topics(id) on delete set null,
  primary_question_id text references public.questions(id) on delete set null,
  phenomenon_id text references public.phenomena(id) on delete set null,
  slug text not null unique,
  title_ru text not null,
  title_en text not null,
  summary_ru text,
  summary_en text,
  estimated_minutes smallint check (estimated_minutes between 1 and 120),
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  evidence_status text not null default 'gap'
    check (evidence_status in ('gap','partial','source_mapped','verified')),
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.immersion_steps (
  id text primary key,
  immersion_id text not null references public.immersions(id) on delete cascade,
  position integer not null check (position >= 0),
  step_type text not null
    check (step_type in ('orientation','context','concept','mechanism','example','term','evidence','misconception','debate','connection','question','recall','summary','editorial_note','completion')),
  title_ru text,
  title_en text,
  body_ru jsonb not null default '[]'::jsonb,
  body_en jsonb not null default '[]'::jsonb,
  question_id text references public.questions(id) on delete set null,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (immersion_id, position)
);

create table if not exists public.learning_cards (
  id text primary key,
  concept_id text references public.concepts(id) on delete set null,
  card_type text not null
    check (card_type in ('concept','mechanism','example','term','evidence','misconception','debate','connection','question','recall','editorial_note')),
  title_ru text,
  title_en text,
  body_ru jsonb not null default '[]'::jsonb,
  body_en jsonb not null default '[]'::jsonb,
  difficulty smallint not null default 2 check (difficulty between 1 and 5),
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------- Books and sources ----------

create table if not exists public.authors (
  id text primary key,
  name text not null,
  sort_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.sources (
  id text primary key,
  source_type text not null
    check (source_type in ('primary_research','review','meta_analysis','institution','book','report','dataset','other')),
  title text not null,
  authors_text text,
  publication_year integer,
  publisher text,
  doi text,
  canonical_url text,
  license text,
  rights_status text not null default 'unverified'
    check (rights_status in ('unverified','lawful_research_copy','open','open_restricted','public_domain','permission_required')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.books (
  id text primary key,
  source_id text unique references public.sources(id) on delete set null,
  slug text not null unique,
  title text not null,
  publication_year integer,
  publisher text,
  catalog_status text not null default 'catalog'
    check (catalog_status in ('catalog','overview','full')),
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.book_authors (
  book_id text not null references public.books(id) on delete cascade,
  author_id text not null references public.authors(id) on delete cascade,
  position integer not null default 0,
  primary key (book_id, author_id)
);

create table if not exists public.book_concepts (
  book_id text not null references public.books(id) on delete cascade,
  concept_id text not null references public.concepts(id) on delete cascade,
  relation_type text not null default 'covers'
    check (relation_type in ('covers','background','debate','inspiration')),
  primary key (book_id, concept_id)
);

create table if not exists public.content_sources (
  id uuid primary key default gen_random_uuid(),
  content_type text not null
    check (content_type in ('category','topic','concept','question','rubric','phenomenon','immersion','immersion_step','learning_card','book')),
  content_id text not null,
  source_id text not null references public.sources(id) on delete cascade,
  claim_or_section text,
  source_role text not null
    check (source_role in ('primary_evidence','review','background','historical','debate_opposing_view','inspiration_only')),
  confidence text not null default 'moderate'
    check (confidence in ('low','moderate','high')),
  notes text,
  created_at timestamptz not null default now(),
  unique (content_type, content_id, source_id, claim_or_section)
);

create table if not exists public.audio_assets (
  id uuid primary key default gen_random_uuid(),
  content_type text not null
    check (content_type in ('concept','immersion_step','learning_card')),
  content_id text not null,
  locale text not null check (locale in ('ru','en')),
  content_version integer not null check (content_version > 0),
  provider text not null,
  provider_voice_id text,
  storage_path text not null,
  duration_seconds numeric,
  status text not null default 'pending'
    check (status in ('pending','ready','failed','stale')),
  created_at timestamptz not null default now(),
  unique (content_type, content_id, locale, content_version, provider, storage_path)
);

-- ---------- Search indexes ----------

create index if not exists idx_topics_category on public.topics(category_id);
create index if not exists idx_questions_category on public.questions(category_id);
create index if not exists idx_questions_topic on public.questions(topic_id);
create index if not exists idx_question_concepts_concept on public.question_concepts(concept_id);
create index if not exists idx_immersions_category on public.immersions(category_id);
create index if not exists idx_immersions_question on public.immersions(primary_question_id);
create index if not exists idx_immersion_steps_immersion on public.immersion_steps(immersion_id, position);
create index if not exists idx_content_sources_lookup on public.content_sources(content_type, content_id);
create index if not exists idx_content_sources_source on public.content_sources(source_id);

create index if not exists idx_categories_fts_ru
  on public.categories using gin (to_tsvector('russian', coalesce(title_ru,'') || ' ' || coalesce(description_ru,'')));
create index if not exists idx_categories_fts_en
  on public.categories using gin (to_tsvector('english', coalesce(title_en,'') || ' ' || coalesce(description_en,'')));
create index if not exists idx_questions_fts_ru
  on public.questions using gin (to_tsvector('russian', coalesce(prompt_ru,'')));
create index if not exists idx_questions_fts_en
  on public.questions using gin (to_tsvector('english', coalesce(prompt_en,'')));
create index if not exists idx_concepts_fts_ru
  on public.concepts using gin (
    to_tsvector(
      'russian',
      coalesce(title_ru,'') || ' ' ||
      coalesce(explanation_simple_ru,'') || ' ' ||
      coalesce(explanation_detailed_ru,'')
    )
  );
create index if not exists idx_concepts_fts_en
  on public.concepts using gin (
    to_tsvector(
      'english',
      coalesce(title_en,'') || ' ' ||
      coalesce(explanation_simple_en,'') || ' ' ||
      coalesce(explanation_detailed_en,'')
    )
  );

-- ---------- Updated-at triggers ----------

do $$
declare
  tbl text;
begin
  foreach tbl in array array[
    'categories','topics','concepts','concept_connections','questions',
    'phenomena','immersions','immersion_steps','learning_cards',
    'sources','books'
  ]
  loop
    execute format(
      'drop trigger if exists %I on public.%I',
      'trg_' || tbl || '_updated_at',
      tbl
    );
    execute format(
      'create trigger %I before update on public.%I for each row execute function public.set_updated_at()',
      'trg_' || tbl || '_updated_at',
      tbl
    );
  end loop;
end;
$$;

-- ---------- Row Level Security ----------
-- Draft/review content stays private. Direct anon/authenticated reads expose approved
-- content only. Editorial writes should use server-side/admin credentials.

alter table public.categories enable row level security;
alter table public.topics enable row level security;
alter table public.concepts enable row level security;
alter table public.concept_connections enable row level security;
alter table public.questions enable row level security;
alter table public.rubrics enable row level security;
alter table public.phenomena enable row level security;
alter table public.immersions enable row level security;
alter table public.immersion_steps enable row level security;
alter table public.learning_cards enable row level security;
alter table public.authors enable row level security;
alter table public.sources enable row level security;
alter table public.books enable row level security;
alter table public.book_authors enable row level security;
alter table public.book_concepts enable row level security;
alter table public.question_concepts enable row level security;
alter table public.content_sources enable row level security;
alter table public.audio_assets enable row level security;

drop policy if exists categories_public_read on public.categories;
create policy categories_public_read on public.categories
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists topics_public_read on public.topics;
create policy topics_public_read on public.topics
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists concepts_public_read on public.concepts;
create policy concepts_public_read on public.concepts
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists concept_connections_public_read on public.concept_connections;
create policy concept_connections_public_read on public.concept_connections
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists questions_public_read on public.questions;
create policy questions_public_read on public.questions
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists rubrics_public_read on public.rubrics;
create policy rubrics_public_read on public.rubrics
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists phenomena_public_read on public.phenomena;
create policy phenomena_public_read on public.phenomena
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists immersions_public_read on public.immersions;
create policy immersions_public_read on public.immersions
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists immersion_steps_public_read on public.immersion_steps;
create policy immersion_steps_public_read on public.immersion_steps
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists learning_cards_public_read on public.learning_cards;
create policy learning_cards_public_read on public.learning_cards
  for select to anon, authenticated using (editorial_status = 'approved');

drop policy if exists books_public_read on public.books;
create policy books_public_read on public.books
  for select to anon, authenticated using (editorial_status = 'approved');

-- No direct public policies yet for sources, polymorphic source maps, audio assets,
-- authors, or join tables. Expose them later through vetted views/server endpoints.
