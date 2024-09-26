import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('ADMIN'),
  z.literal('SUPERVISOR'),
  z.literal('BILLING'),
  z.literal('AGENT'),
  z.literal('CUSTOMER'),
  z.literal('USER'),
])

export type Role = z.infer<typeof roleSchema>
