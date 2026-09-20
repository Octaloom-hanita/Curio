
-- Curio Content DB v1 hardening
-- Security: pin function search_path.
-- Performance: add indexes for foreign keys flagged by Supabase advisor.

alter function public.set_updated_at() set search_path = public, pg_temp;

create index if not exists idx_book_authors_author
  on public.book_authors(author_id);

create index if not exists idx_book_concepts_concept
  on public.book_concepts(concept_id);

create index if not exists idx_concept_connections_to
  on public.concept_connections(to_concept_id);

create index if not exists idx_immersion_steps_question
  on public.immersion_steps(question_id);

create index if not exists idx_immersions_phenomenon
  on public.immersions(phenomenon_id);

create index if not exists idx_immersions_topic
  on public.immersions(topic_id);

create index if not exists idx_learning_cards_concept
  on public.learning_cards(concept_id);

create index if not exists idx_phenomena_category
  on public.phenomena(category_id);
