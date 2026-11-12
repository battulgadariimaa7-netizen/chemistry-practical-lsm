-- The staff check is used only inside access rules, so it lives in a schema the API does not expose.
create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

create function private.is_staff() returns boolean
  language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.staff where user_id = (select auth.uid()));
$$;
revoke execute on function private.is_staff() from public, anon;
grant execute on function private.is_staff() to authenticated;

alter policy "Staff read reports" on public.reports using ((select private.is_staff()));
alter policy "Staff grade reports" on public.reports using ((select private.is_staff())) with check ((select private.is_staff()));
alter policy "Staff delete reports" on public.reports using ((select private.is_staff()));
alter policy "Staff see report pictures" on storage.objects using (bucket_id = 'report-pictures' and (select private.is_staff()));
alter policy "Staff delete report pictures" on storage.objects using (bucket_id = 'report-pictures' and (select private.is_staff()));

drop function public.is_staff();
