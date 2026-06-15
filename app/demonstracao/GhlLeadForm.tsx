import Script from 'next/script'

// Form de captação hospedado no GHL (LeadConnector). O form_embed.js
// redimensiona o iframe conforme a altura do conteúdo.
const FORM_ID = '8iYcuB6I93n7eWX4sY9B'
const FORM_SRC = `https://sucesso.homio.com.br/widget/form/${FORM_ID}`

export function GhlLeadForm() {
  return (
    <>
      <iframe
        src={FORM_SRC}
        id={`inline-${FORM_ID}`}
        title="Agendar demonstração · clinni pro"
        style={{
          width: '100%',
          height: '828px',
          border: 'none',
          borderRadius: 12,
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="For Lead Lp Clinnipro"
        data-height="828"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
      />
      <Script
        src="https://sucesso.homio.com.br/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  )
}
