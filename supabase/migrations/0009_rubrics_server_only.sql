-- Keep evaluation rubrics server-only.
-- Public clients do not need answer keys, misconception lists, or rubric examples.

drop policy if exists rubrics_public_read on public.rubrics;
