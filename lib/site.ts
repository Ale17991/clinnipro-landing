// Configuração e conteúdo da landing da clinni pro.
// >>> TROCAR: número real do WhatsApp (DDI+DDD+numero, só dígitos).
export const WHATSAPP_NUMBER = '5500000000000' // PLACEHOLDER — ex.: 5511999999999

export const site = {
  name: 'clinni pro',
  domain: 'clinnipro.com.br',
  url: 'https://clinnipro.com.br',
  appUrl: 'https://app.clinnipro.io',
  description:
    'Sistema de gestão para clínicas e consultórios: agenda, prontuário eletrônico, financeiro e repasse médico, lembretes e agendamento online — tudo em um só lugar.',
}

const WHATSAPP_MESSAGE = 'Olá! Quero conhecer a clinni pro para a minha clínica.'
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const nav = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

// Sidebar do mockup (hero)
export const appMenu = [
  'Agenda',
  'Pacientes',
  'Prontuário',
  'Financeiro',
  'Repasse',
  'Lembretes',
  'Relatórios',
]

// Cards da seção escura
export const featureCards = [
  {
    icon: 'calendar',
    title: 'Agenda inteligente',
    desc: 'Dia, semana e por profissional. Sem conflito de horário, sem caderno.',
  },
  {
    icon: 'file',
    title: 'Prontuário eletrônico',
    desc: 'Anamnese, evolução e documentos do paciente em segundos, com LGPD.',
  },
  {
    icon: 'wallet',
    title: 'Financeiro e repasse',
    desc: 'Receitas, despesas e o repasse de cada profissional, automáticos.',
  },
]

export const steps = [
  { n: '01', title: 'Crie sua conta', desc: 'Cadastre a sua clínica em minutos, sem burocracia.' },
  { n: '02', title: 'Configure agenda e equipe', desc: 'Profissionais, horários e procedimentos do seu jeito.' },
  { n: '03', title: 'Comece a atender', desc: 'Agende, atenda e cobre, com tudo em um só lugar.' },
]
