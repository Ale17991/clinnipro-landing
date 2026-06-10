-- =====================================================================
-- Migration 0001 — tabela `leads` para o formulário de demonstração.
-- Projeto Supabase: clinnipro-landing (separado do app Prontool).
-- =====================================================================

create extension if not exists "pgcrypto";

create table if not exists public.leads (
    id              uuid primary key default gen_random_uuid(),
    created_at      timestamptz not null default now(),
    updated_at      timestamptz not null default now(),

    -- Dados do form
    clinic_name     text not null check (char_length(clinic_name)   between 2 and 120),
    contact_name    text not null check (char_length(contact_name)  between 2 and 120),
    clinic_type     text not null,
    phone           text not null check (char_length(phone)         between 10 and 20),
    email           text not null check (position('@' in email) > 1),
    professionals   text not null,

    -- Atribuição
    source          text default 'landing',
    utm_source      text,
    utm_medium      text,
    utm_campaign    text,
    utm_term        text,
    utm_content     text,

    -- Forense leve
    ip              text,
    user_agent      text,
    referer         text,

    -- Estado de sincronização com o GHL
    ghl_status      text not null default 'pending'
                    check (ghl_status in ('pending', 'sent', 'failed')),
    ghl_contact_id  text,
    ghl_synced_at   timestamptz,
    ghl_error       text
);

comment on table  public.leads is 'Leads vindos do formulário /demonstracao da landing clinni pro.';
comment on column public.leads.ghl_status is 'pending = ainda não enviado ao GHL · sent = ok · failed = ver ghl_error';

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx      on public.leads (lower(email));
create index if not exists leads_ghl_status_idx on public.leads (ghl_status) where ghl_status <> 'sent';

-- Trigger: updated_at automático
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at := now();
    return new;
end;
$$;

drop trigger if exists trg_leads_updated_at on public.leads;
create trigger trg_leads_updated_at
    before update on public.leads
    for each row execute function public.set_updated_at();

-- =====================================================================
-- RLS — bloqueia todo acesso anônimo. Só o service_role (usado pelo
-- backend Next.js e pela Edge Function) escreve/lê.
-- =====================================================================
alter table public.leads enable row level security;

-- Nenhuma policy para anon/authenticated → ninguém lê via API pública.
-- service_role bypassa RLS por padrão.

-- =====================================================================
-- (Opcional) Database Webhook → Edge Function `ghl-create-lead`.
-- Configurar no painel Supabase:
--   Database → Webhooks → Create
--     - Table: public.leads
--     - Events: INSERT
--     - Type: Supabase Edge Functions
--     - Edge Function: ghl-create-lead
-- =====================================================================
