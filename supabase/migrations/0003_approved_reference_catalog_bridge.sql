
-- Curio approved catalog bridge for the existing termite reference slice.
-- This exposes only the already-live reference topic/question/Immersion metadata.
-- The learning steps themselves remain in the current app code until their DB migration is reviewed.

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values (
  'topic_biomimicry',
  'area_life',
  'biomimicry',
  'Биомимикрия',
  'Biomimicry',
  'Как живые системы подсказывают инженерные решения.',
  'How living systems can inspire engineering solutions.',
  8,
  'approved',
  1
)
on conflict (id) do update set
  category_id = excluded.category_id,
  slug = excluded.slug,
  title_ru = excluded.title_ru,
  title_en = excluded.title_en,
  description_ru = excluded.description_ru,
  description_en = excluded.description_en,
  sort_order = excluded.sort_order,
  editorial_status = 'approved',
  updated_at = now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values (
  'q_termite_airflow_reference',
  'area_life',
  'topic_biomimicry',
  'termite-airflow-reference',
  'Почему в некоторых термитниках воздух может циркулировать без вентилятора и без центрального управления?',
  'Why can air circulate in some termite mounds without a fan or central controller?',
  array['biomimetics','biology','systems_analysis']::text[],
  2,
  'source_mapped',
  'approved',
  1
)
on conflict (id) do update set
  category_id = excluded.category_id,
  topic_id = excluded.topic_id,
  slug = excluded.slug,
  prompt_ru = excluded.prompt_ru,
  prompt_en = excluded.prompt_en,
  profession_lenses = excluded.profession_lenses,
  difficulty = excluded.difficulty,
  evidence_status = excluded.evidence_status,
  editorial_status = 'approved',
  updated_at = now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values (
  'immersion_termite_reference',
  'area_life',
  'topic_biomimicry',
  'q_termite_airflow_reference',
  'termite-airflow-reference',
  'Как воздух движется без вентилятора?',
  'How can air move without a fan?',
  'Разбор физического механизма вентиляции на примере некоторых термитников.',
  'A physical-mechanism exploration of ventilation in some termite mounds.',
  9,
  2,
  'source_mapped',
  'approved',
  1,
  true,
  0
)
on conflict (id) do update set
  category_id = excluded.category_id,
  topic_id = excluded.topic_id,
  primary_question_id = excluded.primary_question_id,
  slug = excluded.slug,
  title_ru = excluded.title_ru,
  title_en = excluded.title_en,
  summary_ru = excluded.summary_ru,
  summary_en = excluded.summary_en,
  estimated_minutes = excluded.estimated_minutes,
  difficulty = excluded.difficulty,
  evidence_status = excluded.evidence_status,
  editorial_status = 'approved',
  is_featured = excluded.is_featured,
  sort_order = excluded.sort_order,
  updated_at = now();
