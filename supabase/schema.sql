-- Minimal schema for households & contracts
create table if not exists households (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamp with time zone default now()
);
create table if not exists household_members (
  household_id uuid references households(id) on delete cascade,
  user_id uuid not null,
  role text check (role in ('owner','admin','member')) default 'member',
  primary key (household_id, user_id)
);
-- add other tables per scaffold
