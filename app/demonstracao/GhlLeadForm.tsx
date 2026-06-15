import Script from 'next/script'

// Pesquisa de captação (multi-etapa) hospedada no GHL (LeadConnector).
// O form_embed.js redimensiona o iframe conforme a etapa/altura do conteúdo.
const SURVEY_ID = '2zxLC9Qng7s9JxOlqyBO'
const SURVEY_SRC = `https://sucesso.homio.com.br/widget/survey/${SURVEY_ID}`

export function GhlLeadForm() {
  return (
    <>
      <iframe
        src={SURVEY_SRC}
        id={SURVEY_ID}
        title="Agendar demonstração · clinni pro"
        scrolling="no"
        style={{
          width: '100%',
          minHeight: '320px',
          border: 'none',
          borderRadius: 12,
        }}
      />
      <Script
        src="https://sucesso.homio.com.br/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}
