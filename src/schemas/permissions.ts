import { z } from 'zod'

export const permissionsSchema = z.enum([
  'OPEN',
  'ANALYSIS',
  'MARKING_XRAY',
  'MARKING',
  'XRAY',
  'IN_PROGRESS',
  'PENDING_MARKING_XRAY',
  'PENDING_MARKING',
  'PENDING_XRAY',
  'DOCUMENTATION',
  'DOCUMENTING',
  'PENDING_DOCUMENTATION',
  'REVIEW',
  'REVIEWING',
])

export type IPermissions = z.infer<typeof permissionsSchema>
