import { z } from 'zod'

import { permissionsSchema } from '@/schemas/permissions'

import { roleSchema } from '../roles'

export const userSchema = z.object({
  __typename: z.literal('User').default('User'),
  id: z.string(),
  role: roleSchema,
  permissions: z.array(permissionsSchema).optional(),
})

export type User = z.infer<typeof userSchema>

export const getUserSchema = z.object({
  __typename: z.literal('User').default('User'),
  id: z.string(),
})

export type GetUser = z.infer<typeof getUserSchema>
