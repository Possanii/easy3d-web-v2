import z from 'zod'

import { customerSchema } from '../models/customer'

export const customerSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('get:active'),
    z.literal('create'),
    z.literal('update'),
  ]),
  z.union([z.literal('Customer'), customerSchema]),
])
