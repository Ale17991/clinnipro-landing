// Configuração e conteúdo da landing da clinni pro.
// >>> TROCAR: coloque o número real do WhatsApp (formato DDI+DDD+numero, só dígitos).
export const WHATSAPP_NUMBER = '5500000000000' // PLACEHOLDER — ex.: 5511999999999

export const site = {
  name: 'clinni pro',
  domain: 'clinnipro.com.br',
  url: 'https://clinnipro.com.br',
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

export const features = [
  {
    icon: 'calendar',
    title: 'Agenda inteligente',
    desc: 'Visão por dia, semana e profissional. Sem conflito de horário, sem caderno.',
  },
  {
    icon: 'file',
    title: 'Prontuário eletrônico',
    desc: 'Anamnese, evolução e documentos do paciente em segundos — com segurança e LGPD.',
  },
  {
    icon: 'wallet',
    title: 'Financeiro e repasse',
    desc: 'Receitas, despesas e o repasse de cada profissional calculados automaticamente.',
  },
  {
    icon: 'bell',
    title: 'Lembretes automáticos',
    desc: 'Avisos de consulta para o paciente e menos faltas na sua agenda.',
  },
  {
    icon: 'globe',
    title: 'Agendamento online',
    desc: 'Seus pacientes agendam sozinhos, 24h por dia, integrado à sua agenda.',
  },
  {
    icon: 'shield',
    title: 'Seguro e na nuvem',
    desc: 'Seus dados protegidos, acessíveis de qualquer lugar, sem instalar nada.',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Crie sua conta',
    desc: 'Cadastre a sua clínica em minutos, sem cartão e sem burocracia.',
  },
  {
    n: '02',
    title: 'Configure agenda e equipe',
    desc: 'Adicione profissionais, horários e procedimentos do seu jeito.',
  },
  {
    n: '03',
    title: 'Comece a atender',
    desc: 'Agende, atenda e cobre — com tudo organizado em um só sistema.',
  },
]
