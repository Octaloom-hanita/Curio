
-- Curio category browsing v1
-- Allow curated discovery-question prompts to be visible before the full lesson is approved.
-- This does not expose rubrics, learning steps, or unreviewed explanatory content.

alter table public.questions
  add column if not exists is_discoverable boolean not null default false;

update public.questions
set is_discoverable = true
where id in (
  'q_healthy_aging_factors',
  'q_rehab_relearning',
  'q_strength_adaptation',
  'q_balance_system',
  'q_brain_behavior',
  'q_looking_not_noticing',
  'q_multisensory_world',
  'q_unconscious_processing',
  'q_attention_selection',
  'q_attention_vs_consciousness',
  'q_error_feedback_learning',
  'q_learning_brain_change',
  'q_memory_stability',
  'q_earth_rock_history',
  'q_water_cleaning',
  'q_water_river_source',
  'q_weather_forecast',
  'q_adaptation_origin',
  'q_animal_behavior',
  'q_biomimicry_transfer',
  'q_plant_water_transport',
  'q_termite_airflow_reference',
  'q_evidence_anecdote',
  'q_explain_without_distortion',
  'q_system_root_cause',
  'q_decision_bias',
  'q_social_norms',
  'q_ux_observation',
  'q_building_condensation',
  'q_material_strength',
  'q_sensor_measurement'
);

drop policy if exists questions_public_read on public.questions;
create policy questions_public_read on public.questions
  for select to anon, authenticated
  using (editorial_status = 'approved' or is_discoverable = true);

create index if not exists idx_questions_discoverable_category
  on public.questions(category_id, is_discoverable);
