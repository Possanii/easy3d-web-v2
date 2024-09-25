import { z } from 'zod'

export const roleSchema = z.enum([
  'ADMIN',
  'SUPERVISOR',
  'BILLING',
  'AGENT',
  'CUSTOMER',
  'USER',
])

export type IRole = z.infer<typeof roleSchema>
