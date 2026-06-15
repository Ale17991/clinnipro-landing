'use client'

import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { leadSchema, type LeadInput } from '@/lib/lead-schema'
import {
  clinicSizes,
  clinicTypes,
  planOptions,
  lgpdNotice,
  privacyEmail,
} from '@/lib/site'

type FieldErrors = Partial<Record<keyof LeadInput, string>>

const initial = {
  clinicName: '',
  contactName: '',
  clinicType: '',
  phone: '',
  email: '',
  professionals: '',
  intendedPlan: '',
}

export function LeadForm() {
  const params = useSearchParams()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [state, setState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  function update<K extends keyof typeof initial>(
    key: K,
    value: (typeof initial)[K],
  ) {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError(null)

    const utm = {
      source: params.get('utm_source') ?? undefined,
      medium: params.get('utm_medium') ?? undefined,
      campaign: params.get('utm_campaign') ?? undefined,
      term: params.get('utm_term') ?? undefined,
      content: params.get('utm_content') ?? undefined,
    }

    const parsed = leadSchema.safeParse({
      ...values,
      source: 'landing',
      utm,
    })

    if (!parsed.success) {
      const next: FieldErrors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof LeadInput
        if (!next[key]) next[key] = issue.message
      }
      setErrors(next)
      return
    }

    setState('submitting')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as
          | { error?: string }
          | null
        setServerError(
          json?.error ?? 'Não conseguimos enviar agora. Tente novamente.',
        )
        setState('error')
        return
      }
      setState('success')
    } catch {
      setServerError('Falha de rede. Verifique sua conexão e tente de novo.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="display mt-6 text-2xl font-medium text-ink">
          Recebido.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink-500">
          Nossa equipe entra em contato em até <strong className="text-ink">1 dia útil</strong> pelos
          dados que você passou.
        </p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <Field
        label="Nome da clínica"
        id="clinicName"
        autoComplete="organization"
        value={values.clinicName}
        onChange={(v) => update('clinicName', v)}
        error={errors.clinicName}
        placeholder="Clínica Bem-Estar"
      />

      <Field
        label="Seu nome"
        id="contactName"
        autoComplete="name"
        value={values.contactName}
        onChange={(v) => update('contactName', v)}
        error={errors.contactName}
        placeholder="Dra. Helena Martins"
      />

      <Select
        label="Tipo de clínica"
        id="clinicType"
        value={values.clinicType}
        onChange={(v) => update('clinicType', v)}
        error={errors.clinicType}
        options={clinicTypes}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Telefone"
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          onChange={(v) => update('phone', v)}
          error={errors.phone}
          placeholder="(11) 99999-9999"
        />
        <Field
          label="E-mail"
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={(v) => update('email', v)}
          error={errors.email}
          placeholder="voce@clinica.com.br"
        />
      </div>

      <Select
        label="Quantos profissionais atendem"
        id="professionals"
        value={values.professionals}
        onChange={(v) => update('professionals', v)}
        error={errors.professionals}
        options={clinicSizes}
      />

      <Select
        label="Plano pretendido"
        id="intendedPlan"
        value={values.intendedPlan}
        onChange={(v) => update('intendedPlan', v)}
        error={errors.intendedPlan}
        options={planOptions}
      />

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-ink-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'submitting' ? 'Enviando…' : 'Agendar demonstração'}
        {state !== 'submitting' && (
          <span aria-hidden className="text-white/60">
            →
          </span>
        )}
      </button>

      <p className="text-center text-[11.5px] leading-relaxed text-ink-500">
        {lgpdNotice} Para acesso, correção ou exclusão, escreva para{' '}
        <a
          href={`mailto:${privacyEmail}`}
          className="underline transition hover:text-ink"
        >
          {privacyEmail}
        </a>
        .
      </p>

      {serverError && (
        <p className="text-center text-[13px] text-rose-700" role="alert">
          {serverError}
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
  inputMode,
  placeholder,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
  autoComplete?: string
  inputMode?: 'tel' | 'email' | 'text'
  placeholder?: string
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[13px] font-medium text-ink">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-[14px] text-ink outline-none transition placeholder:text-ink-500/50 focus:border-ink focus:ring-1 focus:ring-ink/10 ${
          error ? 'border-rose-400' : 'border-ink/10'
        }`}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-[12px] text-rose-700">
          {error}
        </span>
      )}
    </label>
  )
}

function Select({
  label,
  id,
  value,
  onChange,
  options,
  error,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  options: readonly string[]
  error?: string
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[13px] font-medium text-ink">{label}</span>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-2 block w-full appearance-none rounded-lg border bg-white px-4 py-3 text-[14px] text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink/10 ${
          error ? 'border-rose-400' : 'border-ink/10'
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23516676' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1rem',
          paddingRight: '2.5rem',
        }}
      >
        <option value="" disabled>
          Selecione…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-[12px] text-rose-700">
          {error}
        </span>
      )}
    </label>
  )
}
