import { z } from 'zod'

import { orderStepsSchema } from '@/schemas/order'

export const orderSchema = z.object({
  __typename: z.literal('Order').default('Order'),
  id: z.string(),
  patientId: z.string().nullable(),
  doctorId: z.string().nullable(),
  clinicId: z.string().nullable(),
  status: orderStepsSchema,
  employeeWorking: z.array(z.string()).nullish(),
  createdByUserId: z.string(),
})

export type Order = z.infer<typeof orderSchema>
