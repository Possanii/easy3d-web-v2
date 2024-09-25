import { z } from 'zod'

export const customertypesSchema = z.enum([
  'CLINICA_RADIOLOGICA_ODONTOLOGICA',
  'CLINICA_RADIOLOGICA_MEDICA',
  'CIRURGIAO_DENTISTA',
])

export type ICustomerTypes = z.infer<typeof customertypesSchema>
