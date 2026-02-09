-- Uruchom w Supabase: SQL Editor → New query → wklej i Run

create table if not exists public.survey_responses (
  id bigint generated always as identity primary key,
  rating smallint not null check (rating between 1 and 5),
  projects_amount text not null,
  improvements text default '',
  language text not null default 'en',
  created_at timestamptz not null default now()
);

-- Zezwól na wstawianie bez logowania (anon key)
alter table public.survey_responses enable row level security;

create policy "Allow anonymous insert"
  on public.survey_responses
  for insert
  to anon
  with check (true);

-- Odczyt tylko z dashboardu Supabase (service_role)
create policy "Allow read for service role"
  on public.survey_responses
  for select
  to service_role
  using (true);
  