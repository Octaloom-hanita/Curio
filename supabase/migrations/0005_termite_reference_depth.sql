
-- Curio termite reference slice: move the already-approved learning depth into the Content DB.
-- This is original Curio copy from the canonical reference slice / current app, not source-book text.

update public.questions
set evidence_status = 'partial',
    updated_at = now()
where id = 'q_termite_airflow_reference';

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values
(
  'concept_temperature_driven_airflow',
  'temperature-driven-airflow',
  'Движение воздуха из-за разницы температур',
  'Temperature-driven airflow',
  'Разница температур может создавать различия плотности и давления воздуха и тем самым поддерживать движение.',
  'Temperature differences can create differences in air density and pressure and thereby help sustain movement.',
  2,
  'approved',
  1
),
(
  'concept_structure_guides_flow',
  'structure-guides-flow',
  'Структура направляет поток',
  'Structure guides flow',
  'Геометрия, каналы и пористые области ограничивают и направляют возможные пути потока.',
  'Geometry, channels, and porous regions constrain and guide possible flow paths.',
  2,
  'approved',
  1
),
(
  'concept_self_organization',
  'self-organization',
  'Самоорганизация',
  'Self-organization',
  'Глобальный порядок может возникать из локальных взаимодействий без центрального управляющего.',
  'Global order can emerge from local interactions without a central controller.',
  2,
  'approved',
  1
)
on conflict (id) do update set
  title_ru = excluded.title_ru,
  title_en = excluded.title_en,
  explanation_simple_ru = excluded.explanation_simple_ru,
  explanation_simple_en = excluded.explanation_simple_en,
  difficulty = excluded.difficulty,
  editorial_status = 'approved',
  updated_at = now();

insert into public.question_concepts (question_id, concept_id, relation_type)
values
  ('q_termite_airflow_reference','concept_temperature_driven_airflow','core'),
  ('q_termite_airflow_reference','concept_structure_guides_flow','core'),
  ('q_termite_airflow_reference','concept_self_organization','core')
on conflict (question_id, concept_id) do update
set relation_type = excluded.relation_type;

insert into public.rubrics
(id, question_id, rubric_version, required_points, optional_points, misconceptions, critical_contradictions,
 strong_answer_ru, strong_answer_en, partial_answer_ru, partial_answer_en, editorial_status)
values (
  'rubric_termite_airflow_v1',
  'q_termite_airflow_reference',
  1,
  '[
    {"id":"P1","text_en":"Temperature or heating differences can drive air movement.","text_ru":"Разница температур или нагрева может приводить воздух в движение."},
    {"id":"P2","text_en":"Mound structure, geometry, or channels help guide airflow.","text_ru":"Структура, геометрия или каналы помогают направлять поток воздуха."},
    {"id":"P3","text_en":"No central controller is required; circulation emerges from physical conditions and structure.","text_ru":"Центральный управляющий не нужен; циркуляция возникает из физических условий и структуры."}
  ]'::jsonb,
  '[
    {"id":"P4","text_en":"Daily heating/cooling can change the circulation pattern.","text_ru":"Суточный нагрев и охлаждение могут менять характер циркуляции."},
    {"id":"P5","text_en":"Air exchange supports gas exchange.","text_ru":"Движение воздуха поддерживает газообмен."},
    {"id":"P6","text_en":"The mechanism is not identical across all termite species.","text_ru":"Механизм не одинаков у всех видов термитов."}
  ]'::jsonb,
  '[
    {"id":"M1","text_en":"Termites actively fan the nest as the primary mechanism.","text_ru":"Основной механизм - активное обмахивание гнезда термитами."},
    {"id":"M2","text_en":"One simple one-way chimney explains the flow all day.","text_ru":"Весь поток весь день объясняется одной простой односторонней трубой."},
    {"id":"M3","text_en":"Ventilation automatically means constant temperature.","text_ru":"Вентиляция автоматически означает постоянную температуру."},
    {"id":"M4","text_en":"A queen or leader centrally coordinates ventilation.","text_ru":"Королева или лидер централизованно управляет вентиляцией."}
  ]'::jsonb,
  '[]'::jsonb,
  'Разные части гнезда нагреваются и остывают по-разному, что помогает приводить воздух в движение. Структура и каналы направляют поток, и для этого не нужен центральный управляющий.',
  'Different parts of the nest heat and cool differently, which helps move air. The structure and channels guide the flow, and no central controller is required.',
  'Ответ передаёт две из трёх ключевых причинных идей без критического заблуждения.',
  'The answer conveys two of the three key causal ideas without a critical misconception.',
  'approved'
)
on conflict (id) do update set
  required_points = excluded.required_points,
  optional_points = excluded.optional_points,
  misconceptions = excluded.misconceptions,
  critical_contradictions = excluded.critical_contradictions,
  strong_answer_ru = excluded.strong_answer_ru,
  strong_answer_en = excluded.strong_answer_en,
  partial_answer_ru = excluded.partial_answer_ru,
  partial_answer_en = excluded.partial_answer_en,
  editorial_status = 'approved';

delete from public.immersion_steps
where immersion_id = 'immersion_termite_reference';

insert into public.immersion_steps
(id, immersion_id, position, step_type, title_ru, title_en, body_ru, body_en, question_id, editorial_status, version)
values
(
  'termite_step_00',
  'immersion_termite_reference',
  0,
  'orientation',
  'Как воздух движется без вентилятора?',
  'How can air move without a fan?',
  '{"eyebrow":"Исследование · 8-10 минут","paragraphs":["Разберём это на примере термитников - не как загадку и не как тест, а как понятный физический механизм.","К концу вы сможете объяснить три вещи: что запускает движение воздуха, какую роль играет структура и почему для этого не нужен центральный управляющий."],"cta":"Начать"}'::jsonb,
  '{"eyebrow":"Exploration · 8-10 minutes","paragraphs":["We will use termite mounds as a case study - not as a puzzle or a test, but as a physical mechanism you can follow.","By the end you should be able to explain three things: what drives airflow, what the structure contributes, and why no central controller is needed."],"cta":"Start"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_01',
  'immersion_termite_reference',
  1,
  'context',
  'Зачем гнезду вообще нужен обмен воздуха?',
  'Why does a nest need air exchange at all?',
  '{"eyebrow":"Сначала контекст","paragraphs":["В большой колонии постоянно идёт обмен газов: организмы потребляют кислород и выделяют углекислый газ.","Поэтому воздуху нужно перемещаться между внутренними частями гнезда и окружающей средой."],"cta":"Дальше"}'::jsonb,
  '{"eyebrow":"Start with context","paragraphs":["In a large colony, organisms continuously consume oxygen and release carbon dioxide.","Air therefore needs to move between the inner parts of the nest and the surrounding environment."],"cta":"Next"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_02',
  'immersion_termite_reference',
  2,
  'mechanism',
  'Разные части нагреваются и остывают по-разному',
  'Different parts heat and cool at different rates',
  '{"eyebrow":"Механизм 1 из 3","paragraphs":["Наружные и внутренние части конструкции могут реагировать на дневное нагревание с разной скоростью.","Из-за разницы температур возникают различия в плотности и давлении воздуха. В изученных системах это может поддерживать циркуляцию."],"cta":"Дальше"}'::jsonb,
  '{"eyebrow":"Mechanism 1 of 3","paragraphs":["Outer and inner parts of a structure can respond to daytime heating at different speeds.","Those temperature differences create differences in air density and pressure. In studied systems, that can help sustain circulation."],"cta":"Next"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_03',
  'immersion_termite_reference',
  3,
  'mechanism',
  'Структура задаёт воздуху путь',
  'The structure gives the air a path',
  '{"eyebrow":"Механизм 2 из 3","paragraphs":["Одной разницы температур недостаточно, чтобы понять весь поток.","Геометрия гнезда, каналы и пористые участки влияют на то, куда воздух может двигаться и как разные зоны соединяются между собой."],"cta":"Дальше"}'::jsonb,
  '{"eyebrow":"Mechanism 2 of 3","paragraphs":["Temperature differences alone do not explain the whole flow.","Nest geometry, channels, and porous regions influence where air can move and how different zones connect."],"cta":"Next"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_04',
  'immersion_termite_reference',
  4,
  'mechanism',
  'Центрального инженера нет',
  'There is no central engineer',
  '{"eyebrow":"Механизм 3 из 3","paragraphs":["Никто не управляет воздушным потоком в реальном времени.","Термиты строят и изменяют структуру через множество локальных действий, но никто из них не управляет воздушным потоком. Физические условия и сама структура вместе создают циркуляцию."],"cta":"Дальше"}'::jsonb,
  '{"eyebrow":"Mechanism 3 of 3","paragraphs":["No individual termite controls the airflow in real time.","Termites build and modify the structure through many local actions, but no individual controls the airflow. Physical conditions and the structure together produce the circulation."],"cta":"Next"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_05',
  'immersion_termite_reference',
  5,
  'mechanism',
  'Днём и ночью движение может меняться',
  'The flow can change between day and night',
  '{"eyebrow":"Суточный цикл","paragraphs":["Когда разные части конструкции нагреваются и остывают, температурные различия тоже меняются.","Поэтому в некоторых изученных термитниках направление циркуляции может меняться в течение суток."],"cta":"Собрать идею"}'::jsonb,
  '{"eyebrow":"Daily cycle","paragraphs":["As different parts of the structure heat and cool, the temperature differences change too.","In some studied mounds, the direction of circulation can therefore change over the course of a day."],"cta":"Put the idea together"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_06',
  'immersion_termite_reference',
  6,
  'summary',
  'Соберём механизм вместе',
  'Put the mechanism together',
  '{"eyebrow":"Три идеи, которые стоит удержать","paragraphs":["1. Разница температур помогает приводить воздух в движение.","2. Структура и каналы задают этому движению путь.","3. Для циркуляции не нужен центральный управляющий - она возникает из физических условий и структуры."],"cta":"Ещё одна важная деталь"}'::jsonb,
  '{"eyebrow":"Three ideas to keep","paragraphs":["1. Temperature differences help drive air movement.","2. Structure and channels give that movement a path.","3. Circulation does not require a central controller - it emerges from physical conditions and structure."],"cta":"One important nuance"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_07',
  'immersion_termite_reference',
  7,
  'debate',
  '«Природный кондиционер» - слишком простая метафора',
  '“Natural air conditioner” is too simple a metaphor',
  '{"eyebrow":"Научная точность","paragraphs":["Разные виды термитов строят разные гнёзда, и механизмы вентиляции не одинаковы у всех видов.","Поэтому Curio не превращает один изученный механизм в универсальное правило."],"cta":"Проверить понимание"}'::jsonb,
  '{"eyebrow":"Scientific accuracy","paragraphs":["Different termite species build different nests, and their ventilation mechanisms are not identical.","Curio therefore does not turn one studied mechanism into a universal rule."],"cta":"Check understanding"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_08',
  'immersion_termite_reference',
  8,
  'recall',
  'Объясните механизм своими словами',
  'Explain the mechanism in your own words',
  '{"eyebrow":"Теперь ваша очередь","paragraphs":["Почему в некоторых термитниках воздух может циркулировать без вентилятора и без центрального управления?"]}'::jsonb,
  '{"eyebrow":"Now it is your turn","paragraphs":["Why can air circulate in some termite mounds without a fan or central controller?"]}'::jsonb,
  'q_termite_airflow_reference',
  'approved',
  1
),
(
  'termite_step_09',
  'immersion_termite_reference',
  9,
  'connection',
  'Самоорганизация',
  'Self-organization',
  '{"eyebrow":"Связь с другой идеей","paragraphs":["Похожий принцип встречается в колониях муравьёв: сложное поведение всей системы может возникать из множества простых локальных взаимодействий.","Это одна из центральных идей науки о сложных системах."],"cta":"Завершить"}'::jsonb,
  '{"eyebrow":"Connect another idea","paragraphs":["A related principle appears in ant colonies: complex system-level behavior can emerge from many simple local interactions.","This is one of the central ideas in complex-systems science."],"cta":"Finish"}'::jsonb,
  null,
  'approved',
  1
),
(
  'termite_step_10',
  'immersion_termite_reference',
  10,
  'completion',
  'На сегодня достаточно',
  'That is enough for today',
  '{"eyebrow":"Готово","paragraphs":["Вы разобрали один механизм от контекста до собственного объяснения.","Позже Curio сможет вернуть эту идею для короткого повторения."]}'::jsonb,
  '{"eyebrow":"Done","paragraphs":["You followed one mechanism from context through your own explanation.","Later Curio can bring the idea back for a short review."]}'::jsonb,
  null,
  'approved',
  1
);
