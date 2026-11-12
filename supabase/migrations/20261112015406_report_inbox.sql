-- Report inbox for Chemistry Practical & LSM.
-- Students (not signed in) can only add reports and whiteboard pictures.
-- Teachers and lab staff sign in; only accounts listed in public.staff can read, grade or delete reports.

create table public.staff (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'teacher' check (role in ('teacher', 'lab_staff')),
  created_at timestamptz not null default now()
);
alter table public.staff enable row level security;
revoke all on public.staff from anon, authenticated;
grant select on public.staff to authenticated;
create policy "Staff see their own staff row" on public.staff
  for select to authenticated using (user_id = (select auth.uid()));

create function public.is_staff() returns boolean
  language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.staff where user_id = (select auth.uid()));
$$;
revoke execute on function public.is_staff() from public, anon;
grant execute on function public.is_staff() to authenticated;

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  received_at timestamptz not null default now(),
  entry_id text not null check (char_length(entry_id) between 1 and 80),
  student_name text not null check (char_length(btrim(student_name)) between 1 and 120),
  title text not null default '' check (char_length(title) <= 300),
  exam_score text check (char_length(exam_score) <= 40),
  entry jsonb not null check (jsonb_typeof(entry) = 'object' and octet_length(entry::text) <= 500000),
  pictures jsonb not null default '[]'::jsonb check (jsonb_typeof(pictures) = 'array' and jsonb_array_length(pictures) <= 8),
  status text not null default 'submitted' check (status in ('submitted', 'graded')),
  grade_score text check (char_length(grade_score) <= 40),
  teacher_remarks text check (char_length(teacher_remarks) <= 4000),
  skill_scores jsonb,
  graded_at timestamptz,
  -- The same report sent twice (a retry) is kept once.
  unique (entry_id, student_name)
);
create index reports_received_at_idx on public.reports (received_at desc);
alter table public.reports enable row level security;

-- Column rights: a sender can fill in only the report itself, never the status or the grade.
revoke all on public.reports from anon, authenticated;
grant insert (entry_id, student_name, title, exam_score, entry, pictures) on public.reports to anon, authenticated;
grant select, delete on public.reports to authenticated;
grant update (status, grade_score, teacher_remarks, skill_scores, graded_at) on public.reports to authenticated;

create policy "Anyone can send a report" on public.reports
  for insert to anon, authenticated
  with check (status = 'submitted' and grade_score is null and graded_at is null);
create policy "Staff read reports" on public.reports
  for select to authenticated using ((select public.is_staff()));
create policy "Staff grade reports" on public.reports
  for update to authenticated using ((select public.is_staff())) with check ((select public.is_staff()));
create policy "Staff delete reports" on public.reports
  for delete to authenticated using ((select public.is_staff()));

-- Whiteboard pictures: a private bucket. Senders can add pictures; only staff can see or delete them.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('report-pictures', 'report-pictures', false, 2097152, array['image/jpeg', 'image/png']);

create policy "Anyone can add report pictures" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'report-pictures' and name ~ '^[0-9a-f-]{36}/[1-8][.](jpg|png)$');
create policy "Staff see report pictures" on storage.objects
  for select to authenticated using (bucket_id = 'report-pictures' and (select public.is_staff()));
create policy "Staff delete report pictures" on storage.objects
  for delete to authenticated using (bucket_id = 'report-pictures' and (select public.is_staff()));
