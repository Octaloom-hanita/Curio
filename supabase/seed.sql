-- Curio Content Seed v1
-- Balanced discovery map: broad scientific curiosity with a strong brain/cognition pillar.
-- All editorial content is seeded as draft. Nothing here is publishable merely because it exists in the DB.
begin;

-- Knowledge areas

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_earth', 'earth-water-climate-environment', 'Земля, вода, климат и окружающая среда', 'Earth, water, climate & environment', 'Как устроены Земля, вода, атмосфера и окружающая среда.', 'How Earth, water, the atmosphere, and the environment work.', 1, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_life', 'life-evolution-animals-plants', 'Жизнь, эволюция, животные и растения', 'Life, evolution, animals & plants', 'Как живые организмы устроены, меняются и взаимодействуют со средой.', 'How living organisms are built, change, and interact with their environment.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_brain', 'brain-neuroscience', 'Мозг и нейронаука', 'Brain & neuroscience', 'Как нервная система создаёт восприятие, действие и сознательный доступ.', 'How the nervous system creates perception, action, and conscious access.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_cognition', 'cognition-learning-decisions', 'Познание, обучение и принятие решений', 'Cognition, learning & decision-making', 'Как работают внимание, память, обучение и выбор.', 'How attention, memory, learning, and choice work.', 4, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_society', 'human-behavior-society-culture', 'Поведение человека, общество и культура', 'Human behavior, society & culture', 'Как люди влияют друг на друга и как возникают социальные закономерности.', 'How people influence one another and how social patterns emerge.', 5, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_body', 'body-movement-healthy-aging', 'Тело, движение и здоровое старение', 'Body, movement & healthy aging', 'Как тело сохраняет движение, равновесие и самостоятельность с возрастом.', 'How the body maintains movement, balance, and independence with age.', 6, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_technology', 'materials-buildings-sensors-robotics', 'Материалы, здания, датчики и робототехника', 'Materials, buildings, sensors & robotics', 'Как физические свойства превращаются в конструкции, измерения и машины.', 'How physical properties become structures, measurements, and machines.', 7, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.categories
(id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('area_science', 'scientific-thinking-invention-systems', 'Научное мышление, изобретательство и системы', 'Scientific thinking, invention & systems', 'Как строить объяснения, проверять доказательства и разбираться в сложных системах.', 'How to build explanations, evaluate evidence, and reason about complex systems.', 8, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

-- Initial topics

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_hydrology', 'area_earth', 'hydrology', 'Гидрология и подземные воды', 'Hydrology & groundwater', 'Как вода движется по ландшафту, почве и под землёй.', 'How water moves across landscapes, through soil, and underground.', 1, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_plant_transport', 'area_life', 'plant-water-transport', 'Вода и транспорт в растениях', 'Water transport in plants', 'Как растения перемещают воду без механического насоса.', 'How plants move water without a mechanical pump.', 2, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_attention', 'area_brain', 'attention-conscious-access', 'Внимание и сознательный доступ', 'Attention & conscious access', 'Почему не всё обработанное мозгом становится осознанным.', 'Why not everything processed by the brain becomes conscious.', 3, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_balance', 'area_brain', 'balance-multisensory-control', 'Равновесие и сенсорная интеграция', 'Balance & multisensory control', 'Как мозг объединяет разные сигналы, чтобы управлять позой и движением.', 'How the brain combines different signals to control posture and movement.', 4, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_memory', 'area_cognition', 'memory-learning', 'Память и обучение', 'Memory & learning', 'Как информация кодируется, закрепляется и извлекается.', 'How information is encoded, stabilized, and retrieved.', 5, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_sensors', 'area_technology', 'sensors-measurement', 'Датчики и измерения', 'Sensors & measurement', 'Как физический сигнал превращается в измерение.', 'How a physical signal becomes a measurement.', 6, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_complex_systems', 'area_science', 'complex-systems', 'Сложные системы', 'Complex systems', 'Как структура, обратные связи и локальные правила создают глобальное поведение.', 'How structure, feedback, and local rules create global behavior.', 7, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

insert into public.topics
(id, category_id, slug, title_ru, title_en, description_ru, description_en, sort_order, editorial_status, version)
values ('topic_biomimicry', 'area_life', 'biomimicry', 'Биомимикрия', 'Biomimicry', 'Как идеи из живых систем можно переносить в технологии без упрощения.', 'How ideas from living systems can inform technology without oversimplification.', 8, 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
description_ru=excluded.description_ru, description_en=excluded.description_en,
sort_order=excluded.sort_order, updated_at=now();

-- Reusable concepts for the first-wave Immersions

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_attention', 'attention', 'Внимание', 'Attention', 'Ограниченный отбор информации для приоритетной обработки.', 'Selective prioritization of information for processing.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_conscious_access', 'conscious-access', 'Сознательный доступ', 'Conscious access', 'Состояние, при котором обработанная информация становится доступной для отчёта и гибкого использования.', 'A state in which processed information becomes available for report and flexible use.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_selective_processing', 'selective-processing', 'Избирательная обработка', 'Selective processing', 'Мозг обрабатывает не все входящие сигналы одинаково глубоко.', 'The brain does not process all incoming signals equally deeply.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_memory_encoding', 'memory-encoding', 'Кодирование памяти', 'Memory encoding', 'Формирование начального следа новой информации.', 'Formation of an initial trace of new information.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_memory_consolidation', 'memory-consolidation', 'Консолидация памяти', 'Memory consolidation', 'Процессы, которые со временем делают некоторые следы памяти более устойчивыми.', 'Processes that make some memory traces more stable over time.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_memory_retrieval', 'memory-retrieval', 'Извлечение памяти', 'Memory retrieval', 'Повторная активация ранее сохранённой информации.', 'Reactivation of previously stored information.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_sleep_memory', 'sleep-memory', 'Сон и память', 'Sleep & memory', 'Связь сна с закреплением и перестройкой некоторых форм памяти.', 'The relationship between sleep and stabilization or reorganization of some forms of memory.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_vestibular_system', 'vestibular-system', 'Вестибулярная система', 'Vestibular system', 'Сенсорная система внутреннего уха, чувствительная к движению и положению головы.', 'The inner-ear sensory system that detects head motion and orientation.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_proprioception', 'proprioception', 'Проприоцепция', 'Proprioception', 'Сигналы о положении и движении частей тела.', 'Signals about the position and movement of body parts.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_multisensory_integration', 'multisensory-integration', 'Мультисенсорная интеграция', 'Multisensory integration', 'Объединение информации из нескольких сенсорных каналов.', 'Combining information from multiple sensory channels.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_postural_control', 'postural-control', 'Постуральный контроль', 'Postural control', 'Регуляция положения тела для сохранения устойчивости.', 'Regulation of body position to maintain stability.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_infiltration', 'infiltration', 'Инфильтрация', 'Infiltration', 'Проникновение воды с поверхности в почву и породы.', 'Movement of surface water into soil and rock.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_groundwater', 'groundwater', 'Подземные воды', 'Groundwater', 'Вода, находящаяся в порах и трещинах под поверхностью Земли.', 'Water stored in pores and fractures below Earth''s surface.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_aquifer', 'aquifer', 'Водоносный горизонт', 'Aquifer', 'Проницаемый слой, который хранит и проводит подземную воду.', 'A permeable layer that stores and transmits groundwater.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_baseflow', 'baseflow', 'Подземное питание реки', 'Baseflow', 'Часть речного стока, поддерживаемая поступлением подземных вод.', 'The part of streamflow sustained by groundwater discharge.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_transduction', 'transduction', 'Преобразование сигнала', 'Transduction', 'Преобразование одного физического воздействия в другой тип сигнала, пригодный для измерения.', 'Conversion of a physical input into another signal form that can be measured.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_calibration', 'calibration', 'Калибровка', 'Calibration', 'Сопоставление показаний измерительного устройства с известным эталоном или величиной.', 'Comparing an instrument''s output with a known reference or quantity.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_measurement_noise', 'measurement-noise', 'Шум измерения', 'Measurement noise', 'Нежелательные вариации сигнала, которые затрудняют оценку измеряемой величины.', 'Unwanted signal variation that makes the measured quantity harder to estimate.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_signal', 'signal', 'Сигнал', 'Signal', 'Изменение величины, которое несёт информацию об измеряемом процессе.', 'A varying quantity that carries information about a measured process.', 1, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_xylem', 'xylem', 'Ксилема', 'Xylem', 'Проводящая ткань растений, по которой вода движется от корней вверх.', 'Plant vascular tissue through which water moves upward from the roots.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_transpiration', 'transpiration', 'Транспирация', 'Transpiration', 'Испарение воды из растения, главным образом через устьица листьев.', 'Loss of water vapor from a plant, mainly through leaf stomata.', 2, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_cohesion_tension', 'cohesion-tension', 'Когезионно-тензионный механизм', 'Cohesion-tension mechanism', 'Модель, в которой испарение создаёт натяжение непрерывного столба воды в ксилеме.', 'A model in which evaporation creates tension in a continuous water column in the xylem.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

insert into public.concepts
(id, slug, title_ru, title_en, explanation_simple_ru, explanation_simple_en, difficulty, editorial_status, version)
values ('concept_water_potential', 'water-potential', 'Водный потенциал', 'Water potential', 'Термодинамическая мера, помогающая описывать направление движения воды.', 'A thermodynamic quantity used to describe the direction of water movement.', 3, 'draft', 1)
on conflict (id) do update set
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
explanation_simple_ru=excluded.explanation_simple_ru, explanation_simple_en=excluded.explanation_simple_en,
difficulty=excluded.difficulty, updated_at=now();

-- Concept connections

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_attention', 'concept_conscious_access', 'contrast', 'Внимание и сознательный доступ связаны, но не тождественны.', 'Attention and conscious access are related but not identical.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_selective_processing', 'concept_attention', 'prerequisite', 'Избирательная обработка помогает понять, почему внимание распределяется неравномерно.', 'Selective processing helps explain why attention is allocated unevenly.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_memory_encoding', 'concept_memory_consolidation', 'prerequisite', 'Сначала информация должна быть закодирована, прежде чем след может стабилизироваться.', 'Information must first be encoded before a trace can become more stable.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_memory_consolidation', 'concept_sleep_memory', 'same_mechanism', 'Сон связан с процессами, которые могут поддерживать консолидацию некоторых форм памяти.', 'Sleep is linked to processes that can support consolidation of some forms of memory.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_vestibular_system', 'concept_multisensory_integration', 'prerequisite', 'Вестибулярные сигналы входят в набор данных, который мозг объединяет для оценки положения тела.', 'Vestibular signals are part of the information the brain combines to estimate body orientation.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_proprioception', 'concept_multisensory_integration', 'prerequisite', 'Проприоцептивные сигналы дополняют зрительную и вестибулярную информацию.', 'Proprioceptive signals complement visual and vestibular information.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_multisensory_integration', 'concept_postural_control', 'application', 'Интегрированные сенсорные оценки используются для регулирования позы.', 'Integrated sensory estimates are used to regulate posture.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_infiltration', 'concept_groundwater', 'prerequisite', 'Часть воды после инфильтрации пополняет подземные запасы.', 'Some infiltrated water contributes to groundwater storage.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_groundwater', 'concept_baseflow', 'same_mechanism', 'Подземные воды могут медленно поступать в русло и поддерживать базовый сток.', 'Groundwater can discharge slowly into streams and sustain baseflow.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_transduction', 'concept_signal', 'same_mechanism', 'Преобразование создаёт сигнал, который электронная система может далее измерять.', 'Transduction creates a signal that an electronic system can then measure.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_signal', 'concept_calibration', 'application', 'Калибровка связывает сигнал датчика с физической величиной.', 'Calibration links a sensor signal to a physical quantity.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_measurement_noise', 'concept_calibration', 'contrast', 'Калибровка исправляет систематические отношения с эталоном, но не устраняет весь шум.', 'Calibration corrects systematic relationships to a reference but does not remove all noise.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_transpiration', 'concept_cohesion_tension', 'same_mechanism', 'Испарение воды из листьев связано с возникновением натяжения в водном столбе ксилемы.', 'Evaporation from leaves is linked to tension in the xylem water column.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_xylem', 'concept_cohesion_tension', 'application', 'Ксилема образует проводящую структуру, в которой действует этот механизм.', 'Xylem provides the conducting structure in which this mechanism operates.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

insert into public.concept_connections
(from_concept_id, to_concept_id, connection_type, explanation_ru, explanation_en, editorial_status, version)
values ('concept_water_potential', 'concept_transpiration', 'prerequisite', 'Градиенты водного потенциала помогают описывать направление движения воды через растение.', 'Water-potential gradients help describe the direction of water movement through a plant.', 'draft', 1)
on conflict (from_concept_id, to_concept_id, connection_type) do update set
explanation_ru=excluded.explanation_ru, explanation_en=excluded.explanation_en, updated_at=now();

-- First curated question map: 30 bilingual discovery questions

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_earth_rock_history', 'area_earth', null, 'earth-rock-history', 'Как геолог читает историю Земли по слоям и горным породам?', 'How can a geologist read Earth''s history from layers and rocks?', array['geology']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_water_river_source', 'area_earth', 'topic_hydrology', 'river-flow-without-rain', 'Откуда на самом деле берётся вода в реке, когда дождя давно не было?', 'Where does river water come from when it has not rained for a long time?', array['hydrology']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_weather_forecast', 'area_earth', null, 'weather-forecast', 'Как метеорологи превращают измерения атмосферы в прогноз погоды?', 'How do meteorologists turn atmospheric measurements into a weather forecast?', array['meteorology','climatology']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_water_cleaning', 'area_earth', null, 'water-cleaning', 'Как загрязнённая вода становится безопасной для питья?', 'How does contaminated water become safe to drink?', array['water_treatment_engineering']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_animal_behavior', 'area_life', null, 'animal-instinct-learning', 'Как учёные отличают врождённое поведение животного от поведения, которому оно научилось?', 'How do scientists distinguish innate animal behavior from learned behavior?', array['zoology','ethology']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_adaptation_origin', 'area_life', null, 'adaptation-origin', 'Почему у организма появляется именно такое приспособление, а не любое другое?', 'Why does an organism evolve one particular adaptation rather than any imaginable one?', array['evolutionary_biology']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_plant_water_transport', 'area_life', 'topic_plant_transport', 'plant-water-transport', 'Как вода поднимается от корней к верхушке высокого дерева без насоса?', 'How does water rise from roots to the top of a tall tree without a pump?', array['botany','plant_physiology']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_biomimicry_transfer', 'area_life', 'topic_biomimicry', 'biomimicry-transfer', 'Как понять, какую идею природы можно перенести в технологию, а какую нельзя?', 'How can we tell which ideas from nature can actually be transferred into technology?', array['biomimetics']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_looking_not_noticing', 'area_brain', 'topic_attention', 'looking-without-noticing', 'Почему мы можем смотреть прямо на что-то и всё равно этого не заметить?', 'Why can we look directly at something and still fail to notice it?', array['neurobiology','cognitive_psychology']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_brain_behavior', 'area_brain', null, 'sensory-signals-to-action', 'Как нервная система превращает сигналы от органов чувств в действие?', 'How does a nervous system turn sensory signals into action?', array['neurobiology']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_balance_system', 'area_brain', 'topic_balance', 'brain-balance-system', 'Как мозг объединяет зрение, внутреннее ухо и сигналы от тела, чтобы мы не падали?', 'How does the brain combine vision, the inner ear, and body signals to keep us from falling?', array['neurobiology','balance_falls','movement_science']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_multisensory_world', 'area_brain', 'topic_balance', 'multisensory-world-model', 'Как мозг объединяет зрение, слух и сигналы от тела в одну картину мира?', 'How does the brain combine vision, hearing, and body signals into one model of the world?', array['neurobiology','cognitive_psychology']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_unconscious_processing', 'area_brain', 'topic_attention', 'unconscious-processing', 'Что значит, что большая часть обработки информации в мозге происходит без сознательного доступа?', 'What does it mean that much of the brain''s information processing occurs without conscious access?', array['neurobiology','cognitive_psychology']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_memory_stability', 'area_cognition', 'topic_memory', 'memory-stability', 'Почему одни воспоминания быстро исчезают, а другие закрепляются?', 'Why do some memories fade quickly while others become stable?', array['cognitive_psychology','adult_learning']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_attention_selection', 'area_cognition', 'topic_attention', 'attention-selection', 'Как мозг решает, на что обратить внимание?', 'How does the brain decide what to pay attention to?', array['cognitive_psychology','neurobiology']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_learning_brain_change', 'area_cognition', 'topic_memory', 'brain-change-learning', 'Что меняется в мозге, когда мы чему-то учимся?', 'What changes in the brain when we learn something?', array['cognitive_psychology','neurobiology','adult_learning']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_error_feedback_learning', 'area_cognition', 'topic_memory', 'error-feedback-learning', 'Почему ошибка может помочь обучению - и когда она не помогает?', 'Why can an error help learning - and when does it not?', array['cognitive_psychology','adult_learning']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_attention_vs_consciousness', 'area_cognition', 'topic_attention', 'attention-vs-consciousness', 'Чем внимание отличается от сознательного восприятия?', 'How is attention different from conscious perception?', array['cognitive_psychology','neurobiology']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_decision_bias', 'area_society', null, 'decision-bias', 'Почему человек иногда принимает предсказуемо нерациональные решения?', 'Why do people sometimes make predictably irrational decisions?', array['behavioral_economics','psychology']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_social_norms', 'area_society', null, 'social-norms', 'Как поведение окружающих меняет наши решения, даже когда никто нам ничего не приказывает?', 'How does other people''s behavior change our choices even when nobody tells us what to do?', array['sociology','behavioral_economics','psychology']::text[], 2, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_ux_observation', 'area_society', null, 'ux-observation', 'Почему наблюдение за человеком часто показывает проблему интерфейса лучше, чем вопрос «вам всё понятно?»', 'Why can observing a user reveal an interface problem better than asking “is everything clear?”', array['ux_research']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_strength_adaptation', 'area_body', null, 'strength-adaptation', 'Что меняется в мышцах и нервной системе, когда человек становится сильнее?', 'What changes in muscles and the nervous system when a person becomes stronger?', array['movement_science','functional_movement']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_rehab_relearning', 'area_body', null, 'rehab-relearning', 'Почему восстановление движения после травмы часто похоже на обучение навыку заново?', 'Why does recovering movement after injury often resemble learning a skill again?', array['physiotherapy','occupational_therapy','movement_science']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_healthy_aging_factors', 'area_body', null, 'healthy-aging-factors', 'Какие процессы сильнее всего влияют на сохранение самостоятельности с возрастом?', 'Which processes matter most for maintaining independence as we age?', array['healthy_aging','occupational_therapy','balance_falls']::text[], 3, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_material_strength', 'area_technology', null, 'material-strength', 'Почему два материала одинакового веса могут так сильно отличаться по прочности?', 'Why can two materials of the same weight differ so much in strength?', array['materials_science']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_building_condensation', 'area_technology', null, 'building-condensation', 'Почему в одних местах здания появляется конденсат и плесень, а в других нет?', 'Why do condensation and mold form in some parts of a building but not others?', array['building_physics','building_energy']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_sensor_measurement', 'area_technology', 'topic_sensors', 'sensor-measurement', 'Как датчик превращает температуру, давление или движение в число?', 'How does a sensor turn temperature, pressure, or motion into a number?', array['sensor_engineering','smart_home','robotics']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_evidence_anecdote', 'area_science', null, 'evidence-vs-anecdote', 'Как отличить убедительное научное доказательство от красивой истории или совпадения?', 'How can we distinguish strong scientific evidence from a compelling story or coincidence?', array['scientific_reasoning','science_communication']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_system_root_cause', 'area_science', 'topic_complex_systems', 'system-root-cause', 'Почему очевидная причина проблемы в сложной системе часто оказывается не главной?', 'Why is the obvious cause of a problem in a complex system often not the main cause?', array['systems_analysis']::text[], 3, 'partial', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

insert into public.questions
(id, category_id, topic_id, slug, prompt_ru, prompt_en, profession_lenses, difficulty, evidence_status, editorial_status, version)
values ('q_explain_without_distortion', 'area_science', null, 'explain-without-distortion', 'Как объяснить сложную идею простыми словами, не исказив её смысл?', 'How can we explain a complex idea simply without distorting it?', array['science_communication','educational_content']::text[], 2, 'gap', 'draft', 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, slug=excluded.slug,
prompt_ru=excluded.prompt_ru, prompt_en=excluded.prompt_en,
profession_lenses=excluded.profession_lenses, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, updated_at=now();

-- Question -> concept links where the first concept map is already explicit

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_looking_not_noticing', 'concept_attention', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_looking_not_noticing', 'concept_conscious_access', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_looking_not_noticing', 'concept_selective_processing', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_memory_stability', 'concept_memory_encoding', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_memory_stability', 'concept_memory_consolidation', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_memory_stability', 'concept_memory_retrieval', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_memory_stability', 'concept_sleep_memory', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_balance_system', 'concept_vestibular_system', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_balance_system', 'concept_proprioception', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_balance_system', 'concept_multisensory_integration', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_balance_system', 'concept_postural_control', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_multisensory_world', 'concept_multisensory_integration', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_unconscious_processing', 'concept_conscious_access', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_unconscious_processing', 'concept_selective_processing', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_attention_selection', 'concept_attention', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_attention_selection', 'concept_selective_processing', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_attention_vs_consciousness', 'concept_attention', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_attention_vs_consciousness', 'concept_conscious_access', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_learning_brain_change', 'concept_memory_encoding', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_learning_brain_change', 'concept_memory_consolidation', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_error_feedback_learning', 'concept_memory_encoding', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_error_feedback_learning', 'concept_memory_retrieval', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_water_river_source', 'concept_infiltration', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_water_river_source', 'concept_groundwater', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_water_river_source', 'concept_aquifer', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_water_river_source', 'concept_baseflow', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_sensor_measurement', 'concept_transduction', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_sensor_measurement', 'concept_calibration', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_sensor_measurement', 'concept_measurement_noise', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_sensor_measurement', 'concept_signal', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_plant_water_transport', 'concept_xylem', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_plant_water_transport', 'concept_transpiration', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_plant_water_transport', 'concept_cohesion_tension', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

insert into public.question_concepts (question_id, concept_id, relation_type)
values ('q_plant_water_transport', 'concept_water_potential', 'core')
on conflict (question_id, concept_id) do update set relation_type=excluded.relation_type;

-- Six balanced first-wave Immersions. Skeleton records only.

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_b01_looking_not_noticing', 'area_brain', 'topic_attention', 'q_looking_not_noticing', 'looking-without-noticing',
 'Почему мы можем смотреть и не замечать?', 'Why can we look without noticing?', 'Разобраться, почему зрительный вход и сознательное замечание - не одно и то же.', 'Understand why visual input and conscious noticing are not the same thing.',
 8, 2, 'partial', 'draft', 1, true, 1)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_b02_memory_stability', 'area_cognition', 'topic_memory', 'q_memory_stability', 'memory-stability',
 'Почему одни воспоминания исчезают, а другие закрепляются?', 'Why do some memories fade while others become stable?', 'Разобраться, как кодирование, консолидация, извлечение и сон связаны с устойчивостью памяти.', 'Understand how encoding, consolidation, retrieval, and sleep relate to memory stability.',
 10, 2, 'partial', 'draft', 1, true, 2)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_b03_balance', 'area_brain', 'topic_balance', 'q_balance_system', 'balance-multisensory-control',
 'Как мозг удерживает нас в равновесии?', 'How does the brain keep us balanced?', 'Разобраться, как зрение, вестибулярная система и сигналы от тела объединяются для контроля позы.', 'Understand how vision, the vestibular system, and body signals combine to control posture.',
 10, 2, 'partial', 'draft', 1, true, 3)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_w01_river_baseflow', 'area_earth', 'topic_hydrology', 'q_water_river_source', 'river-flow-without-rain',
 'Почему река течёт, даже когда давно не было дождя?', 'Why does a river keep flowing when it has not rained?', 'Проследить путь воды от осадков через почву и подземные воды обратно в реку.', 'Trace water from precipitation through soil and groundwater back into a river.',
 9, 2, 'gap', 'draft', 1, true, 4)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_t01_sensor_measurement', 'area_technology', 'topic_sensors', 'q_sensor_measurement', 'sensor-to-number',
 'Как датчик превращает мир в число?', 'How does a sensor turn the world into a number?', 'Разобраться в преобразовании сигнала, калибровке, шуме и измерении.', 'Understand transduction, calibration, noise, and measurement.',
 9, 2, 'gap', 'draft', 1, true, 5)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

insert into public.immersions
(id, category_id, topic_id, primary_question_id, slug, title_ru, title_en, summary_ru, summary_en,
 estimated_minutes, difficulty, evidence_status, editorial_status, version, is_featured, sort_order)
values ('immersion_l01_tree_water', 'area_life', 'topic_plant_transport', 'q_plant_water_transport', 'water-climbing-tree',
 'Как дерево поднимает воду без насоса?', 'How can a tree lift water without a pump?', 'Разобраться, как транспирация, свойства воды и ксилема помогают воде подниматься вверх.', 'Understand how transpiration, water properties, and xylem help move water upward.',
 10, 2, 'gap', 'draft', 1, true, 6)
on conflict (id) do update set
category_id=excluded.category_id, topic_id=excluded.topic_id, primary_question_id=excluded.primary_question_id,
slug=excluded.slug, title_ru=excluded.title_ru, title_en=excluded.title_en,
summary_ru=excluded.summary_ru, summary_en=excluded.summary_en,
estimated_minutes=excluded.estimated_minutes, difficulty=excluded.difficulty,
evidence_status=excluded.evidence_status, is_featured=excluded.is_featured, sort_order=excluded.sort_order,
updated_at=now();

-- Current project source inventory

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_vital_question', 'book', 'The Vital Question: Why Is Life the Way It Is?', 'Nick Lane', 2015,
 'Profile Books', null, null, null, 'unverified', 'Project file provenance is unverified. Use as a research input only; do not reuse source text in publishable Curio content.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_self_evidencing_agent', 'book', 'The Self-Evidencing Agent: Mind, Existence, and Predictive Processing', 'Jakob Hohwy', 2026,
 'The MIT Press', '10.7551/mitpress/15901.001.0001', 'https://direct.mit.edu/books/oa-monograph/', 'CC BY-NC-ND', 'open_restricted', 'Open-access monograph with noncommercial/no-derivatives restrictions. Use for research and framing; do not treat the license as permission for unrestricted commercial reuse.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_complexity', 'book', 'Complexity: A Guided Tour', 'Melanie Mitchell', 2009,
 'Oxford University Press', null, null, null, 'unverified', 'Project file provenance is unverified. Use as a research input only; replace with lawful edition or primary/open sources for production claim mapping.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_how_we_learn', 'book', 'How We Learn: Why Brains Learn Better Than Any Machine... for Now', 'Stanislas Dehaene', 2020,
 'Viking / Penguin Random House', null, null, null, 'unverified', 'Project file provenance is unverified. Use as a research input only; use cited primary/review literature for production scientific claims.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_biomimicry', 'book', 'Biomimicry: Innovation Inspired by Nature', 'Janine M. Benyus', 1997,
 'William Morrow / HarperCollins', null, null, null, 'unverified', 'Project file provenance is unverified. Useful for discovery and framing, not sufficient alone for contested scientific claims.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_thinking_in_systems', 'book', 'Thinking in Systems: A Primer', 'Donella H. Meadows', 2008,
 'Chelsea Green Publishing', null, null, null, 'unverified', 'Project file provenance is unverified. Useful for systems framing and discovery; verify lawful source access before reuse.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_human_network', 'book', 'The Human Network: How We''re Connected and Why It Matters', 'Matthew O. Jackson', 2019,
 'Pantheon / Atlantic Books', null, null, null, 'unverified', 'Project file provenance is unverified. Use as research input and supplement with primary/review sources.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

insert into public.sources
(id, source_type, title, authors_text, publication_year, publisher, doi, canonical_url, license, rights_status, notes)
values ('source_book_consciousness_brain', 'book', 'Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts', 'Stanislas Dehaene', 2014,
 'Viking / Penguin', null, null, null, 'unverified', 'Project file provenance is unverified. Use as research input; production claims should trace to stronger primary/review sources where appropriate.')
on conflict (id) do update set
source_type=excluded.source_type, title=excluded.title, authors_text=excluded.authors_text,
publication_year=excluded.publication_year, publisher=excluded.publisher, doi=excluded.doi,
canonical_url=excluded.canonical_url, license=excluded.license, rights_status=excluded.rights_status,
notes=excluded.notes, updated_at=now();

-- Authors and books

insert into public.authors (id, name, sort_name)
values ('author_nick_lane', 'Nick Lane', 'Lane, Nick')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_jakob_hohwy', 'Jakob Hohwy', 'Hohwy, Jakob')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_melanie_mitchell', 'Melanie Mitchell', 'Mitchell, Melanie')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_stanislas_dehaene', 'Stanislas Dehaene', 'Dehaene, Stanislas')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_janine_benyus', 'Janine M. Benyus', 'Benyus, Janine M.')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_donella_meadows', 'Donella H. Meadows', 'Meadows, Donella H.')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.authors (id, name, sort_name)
values ('author_matthew_jackson', 'Matthew O. Jackson', 'Jackson, Matthew O.')
on conflict (id) do update set name=excluded.name, sort_name=excluded.sort_name;

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_vital_question', 'source_book_vital_question', 'the-vital-question', 'The Vital Question: Why Is Life the Way It Is?', 2015,
 'Profile Books', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_self_evidencing_agent', 'source_book_self_evidencing_agent', 'the-self-evidencing-agent', 'The Self-Evidencing Agent: Mind, Existence, and Predictive Processing', 2026,
 'The MIT Press', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_complexity_guided_tour', 'source_book_complexity', 'complexity-a-guided-tour', 'Complexity: A Guided Tour', 2009,
 'Oxford University Press', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_how_we_learn', 'source_book_how_we_learn', 'how-we-learn', 'How We Learn: Why Brains Learn Better Than Any Machine... for Now', 2020,
 'Viking / Penguin Random House', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_biomimicry', 'source_book_biomimicry', 'biomimicry', 'Biomimicry: Innovation Inspired by Nature', 1997,
 'William Morrow / HarperCollins', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_thinking_in_systems', 'source_book_thinking_in_systems', 'thinking-in-systems', 'Thinking in Systems: A Primer', 2008,
 'Chelsea Green Publishing', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_human_network', 'source_book_human_network', 'the-human-network', 'The Human Network: How We''re Connected and Why It Matters', 2019,
 'Pantheon / Atlantic Books', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.books
(id, source_id, slug, title, publication_year, publisher, catalog_status, editorial_status, version)
values ('book_consciousness_brain', 'source_book_consciousness_brain', 'consciousness-and-the-brain', 'Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts', 2014,
 'Viking / Penguin', 'catalog', 'draft', 1)
on conflict (id) do update set
source_id=excluded.source_id, slug=excluded.slug, title=excluded.title,
publication_year=excluded.publication_year, publisher=excluded.publisher,
catalog_status=excluded.catalog_status, updated_at=now();

insert into public.book_authors (book_id, author_id, position)
values ('book_vital_question', 'author_nick_lane', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_self_evidencing_agent', 'author_jakob_hohwy', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_complexity_guided_tour', 'author_melanie_mitchell', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_how_we_learn', 'author_stanislas_dehaene', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_biomimicry', 'author_janine_benyus', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_thinking_in_systems', 'author_donella_meadows', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_human_network', 'author_matthew_jackson', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

insert into public.book_authors (book_id, author_id, position)
values ('book_consciousness_brain', 'author_stanislas_dehaene', 0)
on conflict (book_id, author_id) do update set position=excluded.position;

-- Conservative source links: research/background only, never automatic publication approval

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('immersion', 'immersion_b01_looking_not_noticing', 'source_book_consciousness_brain', 'overall framing', 'background', 'moderate', 'Useful research input on attention and conscious access; replace/support with primary or review literature before approval.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('immersion', 'immersion_b02_memory_stability', 'source_book_how_we_learn', 'overall framing', 'background', 'moderate', 'Useful research input on learning and consolidation; claim-level primary/review mapping still required.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('immersion', 'immersion_b03_balance', 'source_book_consciousness_brain', 'multisensory/consciousness framing', 'background', 'low', 'Only partial background support. Dedicated vestibular and postural-control reviews are required.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('immersion', 'immersion_l01_tree_water', 'source_book_biomimicry', 'discovery framing', 'inspiration_only', 'low', 'Discovery inspiration only. Plant physiology claims require dedicated primary/review sources.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('question', 'q_system_root_cause', 'source_book_thinking_in_systems', 'systems framing', 'background', 'moderate', 'Background source for systems structure and feedback; production claims still need appropriate support.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('question', 'q_biomimicry_transfer', 'source_book_biomimicry', 'discovery framing', 'inspiration_only', 'moderate', 'Useful for framing biomimicry, not sufficient evidence for specific biological mechanisms.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

insert into public.content_sources
(content_type, content_id, source_id, claim_or_section, source_role, confidence, notes)
values ('question', 'q_social_norms', 'source_book_human_network', 'network/social framing', 'background', 'moderate', 'Useful research input; specific claims should map to original studies or reviews.')
on conflict (content_type, content_id, source_id, claim_or_section) do update set
source_role=excluded.source_role, confidence=excluded.confidence, notes=excluded.notes;

commit;

-- Seed QA expectations:
-- categories: 8
-- questions: 30
-- first-wave immersions: 6
-- first-wave reusable concepts: 23
-- project source records: 8
-- No rubric or immersion-step records are seeded yet because those require claim-level research/review.
