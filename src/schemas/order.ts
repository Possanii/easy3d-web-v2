import { z } from 'zod'

export const orderStepsSchema = z.enum([
  'DRAFT',
  'OPEN',
  'BOOKED',
  'PENDING_OPEN',
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
  'CONCLUDED',
  'CANCELED',
  'INVALID',
])

export type IOrderSteps = z.infer<typeof orderStepsSchema>
