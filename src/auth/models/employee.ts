import { z } from 'zod'

export const employeeSchema = z.object({
  __typename: z.literal('Employee').default('Employee'),
  id: z.string(),
  ownerId: z.string(),
})

export type Empĺoyee = z.infer<typeof employeeSchema>
