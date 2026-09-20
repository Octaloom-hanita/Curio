
-- Curio discovery areas are product taxonomy metadata, not scientific lesson claims.
-- Approve the eight explicitly selected discovery areas so the public catalog can
-- show the breadth of Curio while keeping unreviewed questions/lessons private.

update public.categories
set editorial_status = 'approved',
    updated_at = now()
where id in (
  'area_earth',
  'area_life',
  'area_brain',
  'area_cognition',
  'area_society',
  'area_body',
  'area_technology',
  'area_science'
);
