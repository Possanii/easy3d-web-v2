import { z } from 'zod'

export const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  city: z.string(),
  state: z.string().nullish(),
  zip: z.string(),
  complement: z.string().nullish(),
  country: z.string(),
})

export type IAddress = z.infer<typeof addressSchema>
