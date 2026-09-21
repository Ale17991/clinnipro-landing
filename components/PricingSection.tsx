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
  implementation,
} from '@/lib/site'

// "1234" -> "1.234"
function formatBRL(n: number) {
  return n.toLocaleString('pt-BR')
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="planos" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="stamp text-[9.5px] text-ink-500">Planos</p>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.7rem]">
            Preço que cresce{' '}
            <span className="text-accent-dark">com a clínica</span>.
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
              !annual ? 'bg-navy text-white' : 'text-ink-500 hover:text-ink'
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
              annual ? 'bg-navy text-white' : 'text-ink-500 hover:text-ink'
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
                    ? 'relative rounded-2xl bg-navy p-8 text-white shadow-[0_30px_80px_-30px_rgba(0,56,131,0.5)] ring-1 ring-navy lg:-mt-4 lg:pb-10'
                    : 'relative rounded-2xl border border-paper-line bg-white p-8 text-ink'
                }
              >
                {plan.badge && (
                  <span className="stamp absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[9px] font-medium text-white">
                    {plan.badge}
                  </span>
                )}

                <h3
                  className={`stamp text-[10.5px] font-medium ${
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
                    {plan.unit}
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
                      ? 'mt-7 flex items-center justify-center rounded-full bg-accent px-5 py-3 text-[14px] font-medium text-white transition hover:bg-accent-dark'
                      : 'mt-7 flex items-center justify-center rounded-full bg-navy px-5 py-3 text-[14px] font-medium text-white transition hover:bg-navy-deep'
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
                            plan.featured ? 'text-white/40' : 'text-ink-400'
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
                    ? `R$ ${formatBRL(annualTotal)}/ano ${plan.annualUnit}`
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
                    <Icon name={addon.icon} className="h-4 w-4 shrink-0 text-accent" />
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

        {/* Implantação — cobrada à parte, por escopo. */}
        <div className="mt-16 rounded-2xl border border-ink/10 bg-white p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                {implementation.eyebrow}
              </p>
              <h3 className="display mt-3 text-2xl font-medium tracking-tight text-ink sm:text-[1.75rem]">
                {implementation.title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                {implementation.desc}
              </p>
            </div>

            <dl className="space-y-6 lg:border-l lg:border-ink/10 lg:pl-16">
              {implementation.items.map((item) => (
                <div key={item.title}>
                  <dt className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-ink-400" />
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-relaxed text-ink-500">
                    {item.desc}
                  </dd>
                </div>
              ))}
              <p className="text-[12px] text-ink-500">{implementation.footnote}</p>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
