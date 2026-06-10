'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/Icon'
import {
  plans,
  addons,
  pricingNote,
  pricingFootnote,
  annualDiscount,
} from '@/lib/site'

// "1234" -> "1.234"
function formatBRL(n: number) {
  return n.toLocaleString('pt-BR')
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="planos" className="border-t border-ink/5 bg-[#FAFAFB] py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Planos
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
            Preço que cresce <span className="font-serif italic text-ink-700">com a clínica</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">{pricingNote}</p>
        </div>

        {/* Toggle Mensal / Anual */}
        <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-ink/10 bg-white p-1">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
              !annual ? 'bg-ink text-white' : 'text-ink-500 hover:text-ink'
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
              annual ? 'bg-ink text-white' : 'text-ink-500 hover:text-ink'
            }`}
          >
            Anual
          </button>
        </div>

        {/* Cards de plano */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => {
            const monthlyEq = annual
              ? Math.round(plan.price * (1 - annualDiscount))
              : plan.price
            const annualTotal = Math.round(plan.price * 12 * (1 - annualDiscount))

            return (
              <div
                key={plan.id}
                className={
                  plan.featured
                    ? 'relative rounded-2xl bg-ink p-8 text-white shadow-[0_30px_80px_-30px_rgba(11,27,38,0.55)] ring-1 ring-ink lg:-mt-4 lg:pb-10'
                    : 'relative rounded-2xl border border-ink/10 bg-white p-8 text-ink'
                }
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 rounded-full bg-teal px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white">
                    {plan.badge}
                  </span>
                )}

                <h3
                  className={`text-[15px] font-medium uppercase tracking-[0.14em] ${
                    plan.featured ? 'text-white/70' : 'text-ink-500'
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="display text-4xl font-medium tracking-tight sm:text-[2.75rem]">
                    R$ {formatBRL(monthlyEq)}
                  </span>
                  <span
                    className={`text-[13px] ${plan.featured ? 'text-white/55' : 'text-ink-500'}`}
                  >
                    /prof · mês
                  </span>
                </div>

                <p
                  className={`mt-2 text-[13px] ${
                    plan.featured ? 'text-white/55' : 'text-ink-500'
                  }`}
                >
                  {plan.tagline}
                </p>

                <Link
                  href="/demonstracao"
                  className={
                    plan.featured
                      ? 'mt-7 flex items-center justify-center rounded-full bg-teal px-5 py-3 text-[14px] font-medium text-white transition hover:bg-teal-dark'
                      : 'mt-7 flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-white transition hover:bg-ink-900'
                  }
                >
                  Começar
                </Link>

                <div
                  className={`mt-8 border-t pt-6 ${
                    plan.featured ? 'border-white/10' : 'border-ink/10'
                  }`}
                >
                  {plan.inherits && (
                    <p
                      className={`mb-4 text-[13px] font-medium ${
                        plan.featured ? 'text-white/80' : 'text-ink-700'
                      }`}
                    >
                      {plan.inherits}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex gap-3">
                        <Icon
                          name="check"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.featured ? 'text-teal-light' : 'text-teal'
                          }`}
                        />
                        <span
                          className={`text-[14px] leading-snug ${
                            plan.featured ? 'text-white/85' : 'text-ink-700'
                          }`}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p
                  className={`mt-7 text-[12px] ${
                    plan.featured ? 'text-white/45' : 'text-ink-500'
                  }`}
                >
                  {annual
                    ? `R$ ${formatBRL(annualTotal)}/ano por profissional`
                    : `ou R$ ${formatBRL(
                        Math.round(plan.price * 12 * (1 - annualDiscount)),
                      )}/ano no plano anual`}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-[13px] leading-relaxed text-ink-500">{pricingFootnote}</p>

        {/* Módulos à la carte */}
        <div className="mt-24">
          <div className="flex items-baseline gap-3">
            <h3 className="display text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem]">
              Módulos à la carte
            </h3>
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-500">
              somados a qualquer plano
            </span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon.title}
                className="flex items-start justify-between gap-6 rounded-xl border border-ink/10 bg-white p-6"
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <Icon name={addon.icon} className="h-4 w-4 shrink-0 text-teal" />
                    <h4 className="text-[15px] font-medium text-ink">{addon.title}</h4>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-500">{addon.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[15px] font-medium text-ink">{addon.price}</p>
                  <p className="text-[12px] text-ink-500">{addon.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
