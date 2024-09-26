import { z } from 'zod'

export const patientSchema = z.object({
  __typename: z.literal('Patient').default('Patient'),
  id: z.string(),
  ownerId: z.string(),
  createdBy: z.string().nullish(),
})

export type Patient = z.infer<typeof patientSchema>
