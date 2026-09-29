import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/FAQSection'
import { Icon } from '@/components/Icon'
import { OdontoBudgetMockup } from '@/components/odonto/OdontoBudgetMockup'
import { LeadWelcome } from '@/components/odonto/LeadWelcome'
import {
  ODONTO_PATH,
  odontoFaqs,
  odontoImplementation,
  odontoPlanTerms,
  odontoPlans,
  odontoWhatsappUrl,
  whatsappLink,
} from '@/lib/site'

const title = 'ClinniPro para odontologia · Odontograma que vira orçamento'
const description =
  'Marque no odontograma e o orçamento já sai pronto, em PDF, com o dente desenhado. Agenda, prontuário e financeiro do consultório odontológico. A partir de R$ 187/mês, sem fidelidade e com implantação grátis.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ODONTO_PATH },
  openGraph: {
    title,
    description,
    url: ODONTO_PATH,
    siteName: 'ClinniPro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
}

const nav = [
  { label: 'Odontograma', href: '#odontograma' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Implantação', href: '#implantacao' },
  { label: 'Perguntas', href: '#faq' },
]

const flow = [
  {
    step: '01 · No desenho',
    title: 'Você marca o que encontrou',
    desc: 'No dente desenhado com coroa e raiz, por face ou pelo dente inteiro. Dentição permanente e decídua.',
  },
  {
    step: '02 · No orçamento',
    title: 'O achado vira item do plano',
    desc: 'Cada marcação entra no plano de tratamento no dente certo, com o valor combinado com o paciente.',
  },
  {
    step: '03 · No papel',
    title: 'O paciente leva o PDF',
    desc: 'Orçamento impresso com o odontograma desenhado, os dentes do orçamento em destaque e as linhas de assinatura.',
  },
]

const odontoFeatures = [
  {
    icon: 'tooth',
    title: 'Odontograma anatômico',
    desc: 'Dente desenhado com coroa e raiz, marcação por face e por dente, dentição permanente e decídua.',
  },
  {
    icon: 'check',
    title: 'Dente tratado em verde',
    desc: 'Concluiu o plano daquele dente? Ele fica verde-claro sozinho. Se preferir, marque à mão.',
  },
  {
    icon: 'receipt',
    title: 'Do odontograma ao orçamento',
    desc: 'Os achados viram itens do plano de tratamento, cada um com o valor combinado com o paciente.',
  },
  {
    icon: 'file',
    title: 'Orçamento em PDF',
    desc: 'Com o odontograma desenhado, os dentes do orçamento destacados e as linhas de assinatura do paciente.',
  },
  {
    icon: 'cardiogram',
    title: 'Periograma',
    desc: 'O exame periodontal registrado no prontuário do paciente, junto com o resto da história clínica.',
  },
]

const coreFeatures = [
  { icon: 'calendar', title: 'Agenda' },
  { icon: 'clipboard', title: 'Prontuário' },
  { icon: 'wallet', title: 'Financeiro' },
  { icon: 'bell', title: 'Lembretes' },
  { icon: 'globe', title: 'Agendamento online' },
]

function planHref(plan: (typeof odontoPlans)[number]) {
  return (
    plan.checkoutUrl ||
    whatsappLink(`Olá! Quero assinar o plano ${plan.name} da ClinniPro.`)
  )
}

function TermsRow({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {odontoPlanTerms.map((t) => (
        <li
          key={t}
          className="stamp inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[9px] text-ink-700 ring-1 ring-ink/[0.08]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function OdontoAssinarPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Vindo do formulário de demonstração: a pessoa já deixou os dados, então a
  // página abre com o reconhecimento e os planos, sem o topo de apresentação.
  const fromForm = searchParams.origem === 'demonstracao'

  return (
    <>
      <Header items={nav} logoHref="/" />
      <main id="top">
        {fromForm ? (
          <section className="bg-paper pb-4 pt-14 sm:pt-20">
            <div className="mx-auto max-w-content px-6 sm:px-10">
              <LeadWelcome />
            </div>
          </section>
        ) : (
          <Hero />
        )}

        {fromForm ? (
          <>
            <Plans compact />
            <OdontogramSection />
          </>
        ) : (
          <>
            <OdontogramSection />
            <Plans />
          </>
        )}
        <Implementation />
        <FAQSection
          items={odontoFaqs}
          title={
            <>
              O que todo dentista{' '}
              <span className="text-accent-dark">pergunta</span>.
            </>
          }
        />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div aria-hidden className="time-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-content gap-14 px-6 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="stamp text-[9.5px] text-accent-dark">ClinniPro para odontologia</p>
          <h1 className="display mt-6 text-[2.4rem] font-medium leading-[1.02] text-ink sm:text-[3.4rem]">
            Clicou no dente,
            <br />
            <span className="font-serif italic text-navy">virou orçamento.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-ink-500">
            O odontograma da ClinniPro desenha o dente com coroa e raiz e leva
            o que você marcou direto para o orçamento do paciente, em PDF. Com
            agenda, prontuário e financeiro do consultório no mesmo lugar, e a
            nossa equipe do seu lado.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-navy-deep"
            >
              Ver planos e assinar
              <span aria-hidden className="text-white/60">
                →
              </span>
            </a>
            <a
              href={odontoWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[14px] font-medium text-ink transition hover:border-ink/30"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <TermsRow className="mt-8" />
        </div>

        <OdontoBudgetMockup />
      </div>
    </section>
  )
}

function OdontogramSection() {
  return (
    <section id="odontograma" className="bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="stamp text-[9.5px] text-ink-500">Odontograma com orçamento integrado</p>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.7rem]">
            O dente que você marcou é o que{' '}
            <span className="text-accent-dark">entra no orçamento</span>.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-500">
            Nada de sair do desenho para digitar o número do dente em outra
            tela. A marcação do odontograma já é o começo do plano de
            tratamento, e o orçamento sai dela.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
          {flow.map((f) => (
            <li key={f.step} className="rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06] sm:p-7">
              <p className="stamp text-[9px] text-accent-dark">{f.step}</p>
              <h3 className="mt-4 text-[17px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">{f.desc}</p>
            </li>
          ))}
        </ol>

        <div id="recursos" className="mt-20 scroll-mt-24">
          <p className="stamp text-[9.5px] text-ink-500">O que vem para a odontologia</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {odontoFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-paper-line bg-paper p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[16px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.desc}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="stamp text-[9px] text-white/60">E o núcleo de toda clínica</p>
              <ul className="mt-5 space-y-3">
                {coreFeatures.map((c) => (
                  <li key={c.title} className="flex items-center gap-3 text-[14.5px]">
                    <Icon name={c.icon} className="h-4 w-4 text-accent-light" />
                    {c.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// `compact`: logo abaixo da saudação de quem veio do formulário, sem o respiro
// de seção nova no topo.
function Plans({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="planos"
      className={`scroll-mt-16 bg-paper pb-20 sm:pb-28 ${compact ? 'pt-8 sm:pt-12' : 'pt-20 sm:pt-28'}`}
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="stamp text-[9.5px] text-ink-500">Planos para odontologia</p>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.7rem]">
            Dois planos,{' '}
            <span className="text-accent-dark">odontograma nos dois</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            O odontograma com orçamento integrado e o periograma estão no
            Essencial Odonto e no Pro Odonto. Mensal, sem fidelidade, e a
            implantação é por nossa conta.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 md:items-start">
          {odontoPlans.map((plan) => (
            <div
              key={plan.id}
              className={
                plan.featured
                  ? 'relative rounded-2xl bg-navy p-7 text-white shadow-[0_30px_80px_-30px_rgba(0,56,131,0.5)] ring-1 ring-navy sm:p-8'
                  : 'relative rounded-2xl border border-paper-line bg-white p-7 text-ink sm:p-8'
              }
            >
              {plan.featured && (
                <span className="stamp absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[9px] font-medium text-white sm:left-8">
                  Para a equipe
                </span>
              )}
              <h3 className={`stamp text-[10.5px] font-medium ${plan.featured ? 'text-white/70' : 'text-ink-500'}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="display text-4xl font-medium tracking-tight sm:text-[2.75rem]">
                  R$ {plan.price}
                </span>
                <span className={`text-[13px] ${plan.featured ? 'text-white/55' : 'text-ink-500'}`}>/mês</span>
              </div>
              <p className={`mt-2 text-[13px] ${plan.featured ? 'text-white/70' : 'text-ink-500'}`}>
                <strong className={plan.featured ? 'font-medium text-white' : 'font-medium text-ink'}>
                  {plan.users}
                </strong>{' '}
                · {plan.tagline}
              </p>

              <a
                href={planHref(plan)}
                {...(plan.checkoutUrl
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                data-plan={plan.id}
                className={
                  plan.featured
                    ? 'mt-7 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-[14px] font-medium text-white transition hover:bg-accent-dark'
                    : 'mt-7 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3.5 text-[14px] font-medium text-white transition hover:bg-navy-deep'
                }
              >
                Assinar o {plan.name}
                <span aria-hidden className="text-white/60">
                  →
                </span>
              </a>

              <div className={`mt-7 border-t pt-6 ${plan.featured ? 'border-white/15' : 'border-paper-line'}`}>
                {plan.inherits && (
                  <p className={`mb-4 text-[13px] font-medium ${plan.featured ? 'text-white/80' : 'text-ink'}`}>
                    {plan.inherits}
                  </p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-snug">
                      <Icon
                        name="check"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-accent-light' : 'text-accent-dark'}`}
                      />
                      <span className={plan.featured ? 'text-white/85' : 'text-ink-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <TermsRow className="mx-auto mt-10 max-w-4xl justify-center" />
      </div>
    </section>
  )
}

function Implementation() {
  return (
    <section id="implantacao" className="bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="stamp text-[9.5px] text-ink-500">Implantação</p>
            <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.6rem]">
              {odontoImplementation.title}
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink-500">
              {odontoImplementation.desc}
            </p>
          </div>
          <ol className="space-y-4">
            {odontoImplementation.items.map((item, i) => (
              <li key={item.title} className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
                <span className="stamp pt-1 text-[11px] text-accent-dark">0{i + 1}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div aria-hidden className="time-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-content px-6 text-center sm:px-10">
        <p className="stamp text-[9.5px] text-accent-dark">A partir de R$ 187/mês</p>
        <h2 className="display mx-auto mt-6 max-w-2xl text-[2.1rem] font-medium leading-[1.04] text-ink sm:text-[2.9rem]">
          Seu consultório,
          <br />
          <span className="font-serif italic text-navy">com a gente do lado.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
          Escolha o plano e a nossa equipe cuida da implantação com você. Sem
          fidelidade.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#planos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-navy-deep sm:w-auto"
          >
            Escolher meu plano
            <span aria-hidden className="text-white/60">
              →
            </span>
          </a>
          <a
            href={odontoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[14px] font-medium text-ink transition hover:border-ink/30 sm:w-auto"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Tirar uma dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
