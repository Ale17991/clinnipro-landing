import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/FAQSection'
import { Icon } from '@/components/Icon'
import { BookingMockup } from '@/components/BookingMockup'
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

const title = 'ClinniPro para odontologia · O consultório inteiro num sistema só'
const description =
  'Agendamento online, lembretes e mensagens automáticas pelo WhatsApp, prontuário, odontograma que vira orçamento, periograma e financeiro. A partir de R$ 187/mês, sem fidelidade e com implantação grátis.'

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
  { label: 'Agenda', href: '#agenda' },
  { label: 'Mensagens', href: '#mensagens' },
  { label: 'Odontograma', href: '#odontograma' },
  { label: 'Financeiro', href: '#financeiro' },
  { label: 'Planos', href: '#planos' },
]

// Atalhos logo abaixo do topo: o que o consultório encontra na página.
const tour = [
  { icon: 'globe', label: 'Agendamento online', href: '#agenda' },
  { icon: 'bell', label: 'Lembretes e mensagens', href: '#mensagens' },
  { icon: 'tooth', label: 'Odontograma e orçamento', href: '#odontograma' },
  { icon: 'cardiogram', label: 'Periograma', href: '#periograma' },
  { icon: 'clipboard', label: 'Prontuário', href: '#prontuario' },
  { icon: 'wallet', label: 'Financeiro', href: '#financeiro' },
]

type Item = { icon: string; title: string; desc: string }

const agendaItems: Item[] = [
  {
    icon: 'globe',
    title: 'Agendamento online 24h',
    desc: 'Link próprio do consultório. O paciente escolhe o dentista, o procedimento e o horário livre, sem login e sem ligar.',
  },
  {
    icon: 'check',
    title: 'Confirma e cancela sozinho',
    desc: 'O paciente recebe a confirmação por e-mail, com o convite para a agenda do celular, e cancela pelo link se precisar.',
  },
  {
    icon: 'settings',
    title: 'Você decide o que aparece',
    desc: 'Escolha quais dentistas e procedimentos entram no agendamento online.',
  },
  {
    icon: 'calendar',
    title: 'Dia, semana e mês',
    desc: 'Filtro por dentista, bloqueio de horários, encaixes e arrastar para remarcar.',
  },
  {
    icon: 'link',
    title: 'Google Agenda',
    desc: 'Sincroniza nos dois sentidos com a agenda pessoal do dentista.',
  },
]

const automations = [
  { when: 'Antes da consulta', what: 'Lembrete com dia, hora e orientação de preparo.' },
  { when: 'Orçamento sem resposta', what: 'Retoma a conversa sobre o tratamento depois de N dias.' },
  { when: 'Etapa sem data marcada', what: 'Convida o paciente a agendar a próxima sessão.' },
  { when: 'Sem retorno há N meses', what: 'Chama o paciente de volta para a revisão.' },
  { when: 'Paciente não compareceu', what: 'Convida a remarcar o horário perdido.' },
  { when: 'Aniversário do paciente', what: 'Uma mensagem por ano, no dia que você escolher.' },
  { when: 'Parcela a vencer', what: 'Um lembrete gentil antes do vencimento, não uma cobrança.' },
  { when: 'Depois do atendimento', what: 'Pergunta como o paciente está.' },
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

const perioItems: Item[] = [
  {
    icon: 'tooth',
    title: 'Seis sítios por dente',
    desc: 'Profundidade de sondagem e recessão em cada sítio, vestibular e lingual ou palatina.',
  },
  {
    icon: 'cardiogram',
    title: 'Nível de inserção calculado',
    desc: 'O sistema calcula o nível de inserção a partir da sondagem e da recessão, sem conta à mão.',
  },
  {
    icon: 'heart',
    title: 'Sangramento e bolsas',
    desc: 'Sangramento à sondagem por sítio, com o percentual de sítios que sangram e de bolsas de 4 mm ou mais.',
  },
  {
    icon: 'trending',
    title: 'Comparação entre exames',
    desc: 'Exames datados lado a lado, com a diferença sítio a sítio para acompanhar a evolução.',
  },
]

const prontuarioItems: Item[] = [
  {
    icon: 'clipboard',
    title: 'Timeline única do paciente',
    desc: 'Consultas, evolução, alergias e diagnósticos numa linha do tempo só, aberta na cadeira.',
  },
  {
    icon: 'scroll',
    title: 'Anamnese com modelos',
    desc: 'Monte a anamnese do consultório uma vez e reaproveite em todo paciente novo.',
  },
  {
    icon: 'file',
    title: 'Atestados, declarações e termos',
    desc: 'Modelos de documento que já saem com os dados do paciente e a identidade visual do consultório.',
  },
  {
    icon: 'receipt',
    title: 'Prescrição digital',
    desc: 'Receita assinada digitalmente pela Memed, enviada ao paciente.',
  },
]

const financeItems: Item[] = [
  {
    icon: 'wallet',
    title: 'Contas a pagar e a receber',
    desc: 'Parcelamento, despesas e impostos do consultório no mesmo lugar.',
  },
  {
    icon: 'trending',
    title: 'Fluxo de caixa projetado',
    desc: 'O que entra e o que sai nos próximos meses, antes de virar surpresa.',
  },
  {
    icon: 'users',
    title: 'Repasse por dentista',
    desc: 'Comissão por procedimento, no modelo comissionado, fixo ou liberal, com fechamento do mês.',
  },
  {
    icon: 'tag',
    title: 'Custo de materiais',
    desc: 'O custo dos insumos usados em cada atendimento, para ver a margem real do procedimento.',
  },
  {
    icon: 'search',
    title: 'Relatórios e dashboard',
    desc: 'Por dentista e por mês, com exportação em PDF e Excel.',
  },
]

function planHref(plan: (typeof odontoPlans)[number]) {
  return (
    plan.checkoutUrl ||
    whatsappLink(`Olá! Quero assinar o plano ${plan.name} da ClinniPro.`)
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

  const features = (
    <>
      <AgendaSection />
      <MessagesSection />
      <OdontogramSection />
      <FeatureSection
        id="periograma"
        tone="white"
        eyebrow="Periograma"
        title={
          <>
            O periograma completo,{' '}
            <span className="text-accent-dark">com a evolução do paciente</span>.
          </>
        }
        desc="O exame periodontal fica no prontuário, datado, e cada exame novo se compara com o anterior."
        items={perioItems}
      />
      <FeatureSection
        id="prontuario"
        tone="paper"
        eyebrow="Prontuário"
        title={
          <>
            A história do paciente{' '}
            <span className="text-accent-dark">aberta na cadeira</span>.
          </>
        }
        desc="Odontograma, periograma, orçamentos e evolução no mesmo prontuário. Ninguém perde os primeiros minutos da consulta procurando papel."
        items={prontuarioItems}
      />
      <FeatureSection
        id="financeiro"
        tone="deep"
        eyebrow="Financeiro"
        badge="No Pro Odonto"
        title={
          <>
            O financeiro do consultório,{' '}
            <span className="text-accent-dark">sem planilha paralela</span>.
          </>
        }
        desc="O orçamento aceito vira sessão na agenda, e a sessão realizada entra no caixa e no repasse do dentista. Você acompanha o mês sem juntar números de três lugares."
        items={financeItems}
      />
    </>
  )

  return (
    <>
      <Header items={nav} logoHref="/" />
      <main id="top">
        {fromForm ? (
          <>
            <section className="bg-paper pb-4 pt-14 sm:pt-20">
              <div className="mx-auto max-w-content px-6 sm:px-10">
                <LeadWelcome />
              </div>
            </section>
            <Plans compact />
            {features}
          </>
        ) : (
          <>
            <Hero />
            {features}
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div aria-hidden className="time-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-content gap-14 px-6 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="stamp text-[9.5px] text-accent-dark">ClinniPro para odontologia</p>
          <h1 className="display mt-6 text-[2.4rem] font-medium leading-[1.02] text-ink sm:text-[3.4rem]">
            O consultório inteiro,
            <br />
            <span className="font-serif italic text-navy">do odontograma ao caixa.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-ink-500">
            O paciente marca sozinho pelo agendamento online, recebe o lembrete
            no WhatsApp e chega com a história aberta no prontuário. Na
            cadeira, o odontograma vira orçamento; depois, a sessão entra no
            financeiro. E a nossa equipe fica do seu lado.
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

      <nav
        aria-label="O que tem na ClinniPro para odontologia"
        className="relative mx-auto mt-16 max-w-content px-6 sm:px-10"
      >
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {tour.map((t) => (
            <li key={t.href}>
              <a
                href={t.href}
                className="flex h-full items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 text-[13px] font-medium text-ink ring-1 ring-ink/[0.07] transition hover:ring-accent/40"
              >
                <Icon name={t.icon} className="h-4 w-4 shrink-0 text-accent-dark" />
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

const tones = {
  paper: 'bg-paper',
  deep: 'bg-paper-deep',
  white: 'bg-white',
} as const

function SectionHeading({
  eyebrow,
  badge,
  title,
  desc,
}: {
  eyebrow: string
  badge?: string
  title: ReactNode
  desc: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-wrap items-center gap-3">
        <p className="stamp text-[9.5px] text-ink-500">{eyebrow}</p>
        {badge && (
          <span className="stamp rounded-full bg-navy px-2.5 py-1 text-[8.5px] text-white">
            {badge}
          </span>
        )}
      </div>
      <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.6rem]">
        {title}
      </h2>
      <p className="mt-6 text-[16px] leading-relaxed text-ink-500">{desc}</p>
    </div>
  )
}

function ItemGrid({ items, card = 'bg-white' }: { items: Item[]; card?: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((f) => (
        <div key={f.title} className={`rounded-2xl p-6 ring-1 ring-ink/[0.06] ${card}`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
            <Icon name={f.icon} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-[16px] font-semibold text-ink">{f.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.desc}</p>
        </div>
      ))}
    </div>
  )
}

function FeatureSection({
  id,
  tone,
  eyebrow,
  badge,
  title,
  desc,
  items,
}: {
  id: string
  tone: keyof typeof tones
  eyebrow: string
  badge?: string
  title: ReactNode
  desc: string
  items: Item[]
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-28 ${tones[tone]}`}>
      <div className="mx-auto grid max-w-content gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={eyebrow} badge={badge} title={title} desc={desc} />
        </div>
        <ItemGrid items={items} card={tone === 'white' ? 'bg-paper' : 'bg-white'} />
      </div>
    </section>
  )
}

function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-16 bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow="Agenda e agendamento online"
            title={
              <>
                A agenda enche{' '}
                <span className="text-accent-dark">sem ocupar a recepção</span>.
              </>
            }
            desc="O paciente marca pelo link do consultório, a qualquer hora, e a consulta cai direto na agenda. Sem ligação, sem troca de mensagens para achar horário e sem conflito de agenda."
          />
          <div className="pb-6 sm:pb-10">
            <BookingMockup
              clinic="Consultório Sorriso"
              professional="Dr. Rafael Costa"
              procedure="Avaliação · 30 min"
              shortName="Dr. Rafael"
            />
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {agendaItems.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
              <Icon name={f.icon} className="h-5 w-5 text-accent-dark" />
              <h3 className="mt-4 text-[15px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MessagesSection() {
  return (
    <section id="mensagens" className="scroll-mt-16 bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-content gap-14 px-6 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-wrap items-center gap-3">
            <p className="stamp text-[9.5px] text-white/60">Lembretes e mensagens automáticas</p>
            <span className="stamp rounded-full bg-accent px-2.5 py-1 text-[8.5px] text-white">
              Nos dois planos
            </span>
          </div>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] sm:text-[2.6rem]">
            Mensagens que saem sozinhas,{' '}
            <span className="font-serif italic text-accent-light">na hora certa</span>.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            Pelo WhatsApp do próprio consultório, e por e-mail. O lembrete
            antes da consulta diminui as faltas, e você monta as outras
            mensagens: escolhe quando cada uma sai e o que ela diz.
          </p>
          <ul className="mt-8 space-y-3 text-[14.5px] text-white/85">
            {[
              'Sai do número do consultório, com o seu texto',
              'Você acompanha o que foi entregue e lido',
              'O paciente pode pedir para não receber',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-2 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between px-4 pb-3 pt-4">
            <p className="stamp text-[9px] text-ink-500">Automações do consultório</p>
            <span className="stamp inline-flex items-center gap-1.5 text-[8.5px] text-ink-500">
              <Icon name="whatsapp" className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp
            </span>
          </div>
          <ul className="divide-y divide-ink/[0.06]">
            {automations.map((a) => (
              <li key={a.when} className="flex items-start gap-3 px-4 py-3.5">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-[13.5px] font-semibold text-ink">{a.when}</p>
                  <p className="text-[13px] leading-snug text-ink-500">{a.what}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function OdontogramSection() {
  return (
    <section id="odontograma" className="scroll-mt-16 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Odontograma com orçamento integrado"
          title={
            <>
              O dente que você marcou é o que{' '}
              <span className="text-accent-dark">entra no orçamento</span>.
            </>
          }
          desc="Nada de sair do desenho para digitar o número do dente em outra tela. A marcação do odontograma já é o começo do plano de tratamento, e o orçamento sai dela."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {flow.map((f) => (
            <li key={f.step} className="rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06] sm:p-7">
              <p className="stamp text-[9px] text-accent-dark">{f.step}</p>
              <h3 className="mt-4 text-[17px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">{f.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
            <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md bg-[#bbf7d0] ring-1 ring-[#4d9468]" />
            <p className="text-[14.5px] leading-relaxed text-ink-500">
              <strong className="font-semibold text-ink">Dente tratado em verde.</strong>{' '}
              Concluiu o plano daquele dente? Ele fica verde-claro sozinho. Se
              preferir, marque à mão.
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
            <Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
            <p className="text-[14.5px] leading-relaxed text-ink-500">
              <strong className="font-semibold text-ink">Depois do sim.</strong>{' '}
              Orçamento aceito, cada etapa vira consulta na agenda, e a sessão
              realizada entra no caixa e no repasse.
            </p>
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
      className={`scroll-mt-16 bg-paper pb-20 sm:pb-28 ${compact ? 'pt-8 sm:pt-12' : 'border-t border-paper-line pt-20 sm:pt-28'}`}
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="stamp text-[9.5px] text-ink-500">Planos para odontologia</p>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.7rem]">
            Dois planos,{' '}
            <span className="text-accent-dark">o consultório inteiro nos dois</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Agendamento online, lembretes e mensagens pelo WhatsApp,
            prontuário, odontograma com orçamento e periograma estão no
            Essencial Odonto e no Pro Odonto. O Pro soma o financeiro completo
            e mais usuários. Mensal, sem fidelidade, e a implantação é por
            nossa conta.
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
                  Com financeiro
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
