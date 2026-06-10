// Configuração e conteúdo da landing da clinni pro.
// >>> TROCAR: número real do WhatsApp (DDI+DDD+numero, só dígitos).
export const WHATSAPP_NUMBER = '5500000000000'

export const site = {
  name: 'clinni pro',
  domain: 'clinnipro.com.br',
  url: 'https://clinnipro.com.br',
  appUrl: 'https://app.clinnipro.com.br',
  description:
    'Sistema de gestão para clínicas e consultórios. Agenda, prontuário, financeiro e agendamento online em um só lugar.',
}

const WHATSAPP_MESSAGE = 'Olá! Quero conhecer a clinni pro.'
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const nav = [
  { label: 'Sistema', href: '#sistema' },
  { label: 'Prontuário', href: '#prontuario' },
  { label: 'Financeiro', href: '#financeiro' },
  { label: 'Planos', href: '#planos' },
]

// 4 módulos centrais (cortado de 8 para 4 — foco).
export const modules = [
  {
    id: 'agenda',
    eyebrow: '01 — Operação',
    title: 'Agenda',
    desc: 'Dia, semana e mês. Arrastar para remarcar. Conflito impossível.',
    icon: 'calendar',
  },
  {
    id: 'prontuario',
    eyebrow: '02 — Operação',
    title: 'Prontuário',
    desc: 'Anamnese, evolução SOAP e timeline única do paciente.',
    icon: 'clipboard',
  },
  {
    id: 'repasse',
    eyebrow: '03 — Análise',
    title: 'Repasse médico',
    desc: 'Comissão por procedimento. Fechamento mensal automático.',
    icon: 'wallet',
  },
  {
    id: 'agendamento',
    eyebrow: '04 — Operação',
    title: 'Agendamento online',
    desc: 'Link próprio da clínica. Paciente agenda em 90 segundos.',
    icon: 'globe',
  },
]

// 3 compromissos (LGPD, infra, auditoria).
export const compromissos = [
  {
    title: 'LGPD na fundação',
    desc: 'Dados de paciente isolados por clínica e cifrados em repouso.',
  },
  {
    title: 'Trilha de auditoria',
    desc: 'Cada ação registrada de forma imutável — quem, quando, o quê.',
  },
  {
    title: 'Infra brasileira',
    desc: 'Servidores no Brasil, backup contínuo, ponto-no-tempo.',
  },
]

// Planos — preço por profissional de saúde/mês.
export const pricingNote =
  'Cobrança por profissional de saúde · recepção e admin gratuitos · sem fidelidade no mensal.'

// Desconto do plano anual (mensal × 12 × (1 − desconto)).
export const annualDiscount = 0.17

export const plans = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 99,
    tagline: 'Consultório solo / início',
    featured: false,
    badge: null,
    inherits: null,
    features: [
      'Agenda + atendimentos',
      'Pacientes + Prontuário + Anamnese',
      'Prescrição digital (Memed)',
      'Agendamento público',
      'Lembretes por e-mail',
      'Tarefas e notificações',
      'Relatórios básicos',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 169,
    tagline: 'Clínica em crescimento',
    featured: true,
    badge: 'Mais popular',
    inherits: 'Tudo do Essencial, mais:',
    features: [
      'Financeiro completo (contas, fluxo de caixa, despesas, impostos)',
      'Repasse médico + Comissões',
      'Lembrete e confirmação por WhatsApp',
      'Relatórios + Dashboard completos',
      'Suporte prioritário',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 259,
    tagline: 'Multiespecialidade / rede',
    featured: false,
    badge: null,
    inherits: 'Tudo do Pro, mais:',
    features: [
      'Multiunidade (multi-clínica)',
      'BI avançado',
      'Auditoria e logs avançados',
      'Suporte avançado + acompanhamento personalizado',
    ],
  },
] as const

export const pricingFootnote =
  'Plano Solo: R$ 149/mês — 1 profissional, Essencial + WhatsApp. Trial de 14 dias do Pro, sem cartão de crédito.'

// Módulos à la carte — somados a qualquer plano.
export const addons = [
  {
    title: 'Faturamento TISS / Convênios',
    desc: 'Regulado (RN 501/2022), XML assinado ICP-Brasil. Substitui o faturista.',
    price: 'R$ 89',
    unit: '/prof · ou R$ 199/clínica',
    icon: 'receipt',
  },
  {
    title: 'Portal do Paciente',
    desc: 'Diferencial de retenção. Cobrança por clínica.',
    price: 'R$ 79',
    unit: '/clínica',
    icon: 'users',
  },
  {
    title: 'Telemedicina',
    desc: 'Pacote ou por uso, no padrão de mercado.',
    price: 'R$ 39',
    unit: '/prof',
    icon: 'cardiogram',
  },
  {
    title: 'Integrações / CRM',
    desc: 'Disponível em qualquer plano. O homio não está incluso — conecte o CRM da sua preferência. Valor opcional, para quem quiser contratar o homio junto da clinni.',
    price: 'a partir de R$ 156',
    unit: '/clínica',
    icon: 'link',
  },
] as const

// Opções do select "tipo de clínica" no formulário de demonstração.
export const clinicTypes = [
  'Consultório individual',
  'Clínica multiprofissional',
  'Estética e bem-estar',
  'Odontologia',
  'Psicologia e terapia',
  'Fisioterapia e reabilitação',
  'Outro',
] as const

export const clinicSizes = [
  '1 (só eu)',
  '2 a 5',
  '6 a 10',
  '11 a 20',
  'Mais de 20',
] as const

// FAQ — curto e direto.
export const faqs = [
  {
    q: 'Funciona para quem atende sozinho?',
    a: 'Sim. Médicos solo usam pelo celular e tablet — sem recepção e sem ligar para confirmar consulta.',
  },
  {
    q: 'Como é o repasse no fim do mês?',
    a: 'A clinni pro consolida o realizado, aplica a comissão vigente e tira um snapshot. Bruto, taxa e líquido por consulta — visíveis ao médico.',
  },
  {
    q: 'Meus dados estão seguros? E a LGPD?',
    a: 'Cada clínica é isolada no banco via RLS. Dados pessoais cifrados em repouso. Toda ação fica em trilha de auditoria.',
  },
  {
    q: 'Preciso instalar algo?',
    a: 'Não. Roda no navegador — computador, tablet e celular. Sua equipe só faz login.',
  },
  {
    q: 'Consigo migrar pacientes do sistema atual?',
    a: 'Nossa equipe importa pacientes, planos, profissionais e agenda futura a partir de planilha ou exportação. Faz parte do onboarding.',
  },
]
