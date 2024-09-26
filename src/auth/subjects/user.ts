import z from 'zod'

import { getUserSchema, userSchema } from '../models/user'

export const userSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('get:all'),
    z.literal('create'),
    z.literal('update'),
  ]),
  z.union([z.literal('User'), userSchema, getUserSchema]),
])
