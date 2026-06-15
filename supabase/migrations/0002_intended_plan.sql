-- =====================================================================
-- Migration 0002 — adiciona `intended_plan` em `leads`.
-- Plano pretendido informado no formulário /demonstracao da landing.
-- Valores: 'Essencial' | 'Pro' | 'Clínica' | 'Ainda não sei' (texto livre).
-- =====================================================================

alter table public.leads
    add column if not exists intended_plan text;

comment on column public.leads.intended_plan is
    'Plano que o lead pretende contratar, escolhido no form (Essencial/Pro/Clínica/Ainda não sei).';
