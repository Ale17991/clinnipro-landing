import { z } from 'zod'
import { clinicSizes, clinicTypes } from './site'

// Schema compartilhado entre client (form) e server (API route).
export const leadSchema = z.object({
  clinicName: z
    .string()
    .trim()
    .min(2, 'Informe o nome da clínica')
    .max(120, 'Nome muito longo'),
  contactName: z
    .string()
    .trim()
    .min(2, 'Informe o nome do responsável')
    .max(120, 'Nome muito longo'),
  clinicType: z.enum(clinicTypes, {
    message: 'Selecione o tipo de clínica',
  }),
  phone: z
    .string()
    .trim()
    .min(10, 'Telefone incompleto (com DDD)')
    .max(20, 'Telefone muito longo')
    .regex(/^[\d\s()+\-.]+$/, 'Telefone com caracteres inválidos'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('E-mail inválido')
    .max(160, 'E-mail muito longo'),
  professionals: z.enum(clinicSizes, {
    message: 'Informe quantos profissionais atendem',
  }),
  // Campos opcionais para tracking/atribuição
  source: z.string().max(80).optional(),
  utm: z
    .object({
      source: z.string().max(80).optional(),
      medium: z.string().max(80).optional(),
      campaign: z.string().max(120).optional(),
      term: z.string().max(120).optional(),
      content: z.string().max(120).optional(),
    })
    .optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
