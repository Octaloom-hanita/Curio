
-- Curio approved audio asset foundation.
-- Public playback is allowed only for rows marked ready; writes remain server-side.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'curio-audio',
  'curio-audio',
  true,
  25000000,
  array['audio/mpeg','audio/mp3']::text[]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists audio_assets_public_read on public.audio_assets;
create policy audio_assets_public_read on public.audio_assets
  for select to anon, authenticated
  using (status = 'ready');
