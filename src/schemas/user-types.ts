import { z } from 'zod'

export const usertypeSchema = z.enum([
  'EMPLOYEE',
  'DOCTOR',
  'CLINIC',
  'PATIENT',
])

export type IUserType = z.infer<typeof usertypeSchema>
