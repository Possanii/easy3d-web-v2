import { z } from 'zod'

export const customerSchema = z.object({
  __typename: z.literal('Customer').default('Customer'),
  id: z.string(),
  ownerId: z.string(),
})

export type Customer = z.infer<typeof customerSchema>
