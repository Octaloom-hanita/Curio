-- Curio discovery experience v1
-- Adds browse-safe discovery metadata and book -> question paths.
-- Full explanatory content remains gated by editorial status.

alter table public.books
  add column if not exists discovery_author_text text,
  add column if not exists discovery_blurb_ru text,
  add column if not exists discovery_blurb_en text,
  add column if not exists is_discoverable boolean not null default false,
  add column if not exists sort_order integer not null default 100;

alter table public.topics
  add column if not exists is_discoverable boolean not null default false;

alter table public.phenomena
  add column if not exists is_discoverable boolean not null default false;

alter table public.questions
  add column if not exists discover_rank integer;

create table if not exists public.book_questions (
  book_id text not null references public.books(id) on delete cascade,
  question_id text not null references public.questions(id) on delete cascade,
  relation_type text not null check (relation_type in ('opens_question','background','advanced_lens')),
  sort_order integer not null default 100,
  editorial_status text not null default 'draft'
    check (editorial_status in ('draft','ai_generated','reviewed','approved','deprecated')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (book_id, question_id)
);

alter table public.book_questions enable row level security;

drop policy if exists book_questions_public_read on public.book_questions;
create policy book_questions_public_read on public.book_questions
  for select to anon, authenticated
  using (editorial_status in ('reviewed','approved'));

drop policy if exists books_public_read on public.books;
create policy books_public_read on public.books
  for select to anon, authenticated
  using (editorial_status = 'approved' or is_discoverable = true);

drop policy if exists topics_public_read on public.topics;
create policy topics_public_read on public.topics
  for select to anon, authenticated
  using (editorial_status = 'approved' or is_discoverable = true);

drop policy if exists phenomena_public_read on public.phenomena;
create policy phenomena_public_read on public.phenomena
  for select to anon, authenticated
  using (editorial_status = 'approved' or is_discoverable = true);

update public.topics set is_discoverable = true;
update public.phenomena
set is_discoverable = true
where id = 'phenomenon_inattentional_blindness'
  and editorial_status in ('ai_generated','reviewed','approved');

update public.books set discovery_author_text='Stanislas Dehaene',
  discovery_blurb_ru='Исследовательская опора для вопросов о сознательном доступе, внимании и о том, почему часть обработки остаётся вне осознания.',
  discovery_blurb_en='A research anchor for questions about conscious access, attention, and why some processing remains outside awareness.',
  is_discoverable=true,sort_order=1 where id='book_consciousness_brain';
update public.books set discovery_author_text='Stanislas Dehaene',
  discovery_blurb_ru='Отправная точка для вопросов о внимании, ошибках, памяти и механизмах, благодаря которым обучение действительно меняет мозг.',
  discovery_blurb_en='A starting point for questions about attention, error, memory, and the mechanisms through which learning changes the brain.',
  is_discoverable=true,sort_order=2 where id='book_how_we_learn';
update public.books set discovery_author_text='Nick Lane',
  discovery_blurb_ru='Источник вопросов о происхождении сложной жизни, энергетических ограничениях и том, почему эволюция пошла именно по некоторым траекториям.',
  discovery_blurb_en='A source of questions about the origin of complex life, energetic constraints, and why evolution followed some trajectories rather than others.',
  is_discoverable=true,sort_order=3 where id='book_vital_question';
update public.books set discovery_author_text='Melanie Mitchell',
  discovery_blurb_ru='Книга-навигатор по самоорганизации, эмерджентности, адаптации и другим идеям, которые связывают многие области Curio.',
  discovery_blurb_en='A guide to self-organization, emergence, adaptation, and other ideas that connect many Curio domains.',
  is_discoverable=true,sort_order=4 where id='book_complexity_guided_tour';
update public.books set discovery_author_text='Donella H. Meadows',
  discovery_blurb_ru='Опора для системного мышления: запасы и потоки, обратные связи, задержки и точки, где вмешательство действительно меняет систему.',
  discovery_blurb_en='A foundation for systems thinking: stocks and flows, feedback loops, delays, and places where intervention can actually change a system.',
  is_discoverable=true,sort_order=5 where id='book_thinking_in_systems';
update public.books set discovery_author_text='Matthew O. Jackson',
  discovery_blurb_ru='Источник вопросов о сетях: как структура связей влияет на информацию, поведение, возможности и неравенство.',
  discovery_blurb_en='A source of questions about networks: how connection structure shapes information, behavior, opportunity, and inequality.',
  is_discoverable=true,sort_order=6 where id='book_human_network';
update public.books set discovery_author_text='Janine M. Benyus',
  discovery_blurb_ru='Отправная точка для вопросов о том, как природные механизмы вдохновляют инженерные решения - и где аналогии с природой перестают работать.',
  discovery_blurb_en='A starting point for questions about how biological mechanisms can inspire engineering - and where analogies with nature stop being useful.',
  is_discoverable=true,sort_order=7 where id='book_biomimicry';
update public.books set discovery_author_text='Jakob Hohwy',
  discovery_blurb_ru='Продвинутая исследовательская книга о predictive processing и self-evidencing. В Curio используется осторожно: часть идей теоретическая и обсуждаемая.',
  discovery_blurb_en='An advanced research book on predictive processing and self-evidencing. Curio uses it cautiously because parts of the framework are theoretical and debated.',
  is_discoverable=true,sort_order=8 where id='book_self_evidencing_agent';

update public.questions set discover_rank=null where discover_rank is not null;
update public.questions set discover_rank=1 where id='q_termite_airflow_reference';
update public.questions set discover_rank=2 where id='q_looking_not_noticing';
update public.questions set discover_rank=3 where id='q_water_river_source';
update public.questions set discover_rank=4 where id='q_memory_stability';
update public.questions set discover_rank=5 where id='q_plant_water_transport';
update public.questions set discover_rank=6 where id='q_sensor_measurement';
update public.questions set discover_rank=7 where id='q_social_norms';
update public.questions set discover_rank=8 where id='q_system_root_cause';

insert into public.book_questions
(book_id,question_id,relation_type,sort_order,editorial_status)
values
('book_consciousness_brain','q_looking_not_noticing','opens_question',1,'reviewed'),
('book_consciousness_brain','q_attention_vs_consciousness','opens_question',2,'reviewed'),
('book_consciousness_brain','q_unconscious_processing','opens_question',3,'reviewed'),
('book_how_we_learn','q_attention_selection','opens_question',1,'reviewed'),
('book_how_we_learn','q_error_feedback_learning','opens_question',2,'reviewed'),
('book_how_we_learn','q_memory_stability','opens_question',3,'reviewed'),
('book_how_we_learn','q_learning_brain_change','background',4,'reviewed'),
('book_human_network','q_social_norms','opens_question',1,'reviewed'),
('book_thinking_in_systems','q_system_root_cause','opens_question',1,'reviewed'),
('book_vital_question','q_adaptation_origin','background',1,'reviewed'),
('book_biomimicry','q_biomimicry_transfer','opens_question',1,'reviewed'),
('book_self_evidencing_agent','q_brain_behavior','advanced_lens',1,'reviewed')
on conflict (book_id,question_id) do update set
relation_type=excluded.relation_type,
sort_order=excluded.sort_order,
editorial_status=excluded.editorial_status,
updated_at=now();

create index if not exists idx_books_discoverable_sort on public.books(is_discoverable,sort_order);
create index if not exists idx_topics_discoverable_category on public.topics(category_id,is_discoverable,sort_order);
create index if not exists idx_phenomena_discoverable_category on public.phenomena(category_id,is_discoverable);
create index if not exists idx_questions_discover_rank on public.questions(discover_rank) where discover_rank is not null;
create index if not exists idx_book_questions_question on public.book_questions(question_id);
create index if not exists idx_book_questions_book_sort on public.book_questions(book_id,sort_order);
