-- The answer key to the Enrichment worksheets, one row per worksheet, kept out of the site's public code.
-- Only signed-in accounts on the staff list can read it. Nobody can change it through the API: the rows are
-- loaded with SQL from supabase/private/answer-key.json, which must never be copied to the public repository.
create table public.answer_key (
  lesson_id text primary key check (char_length(lesson_id) between 1 and 80),
  position smallint not null default 0,
  answers jsonb not null check (jsonb_typeof(answers) = 'array'),
  updated_at timestamptz not null default now()
);

alter table public.answer_key enable row level security;
revoke all on public.answer_key from anon, authenticated;
grant select on public.answer_key to authenticated;

create policy "Staff read the answer key" on public.answer_key
  for select to authenticated using ((select private.is_staff()));
