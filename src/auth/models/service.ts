import z from 'zod'

export const serviceSchema = z.object({
  __typename: z.literal('Service').default('Service'),
  id: z.string(),
  userId: z.string(),
})
