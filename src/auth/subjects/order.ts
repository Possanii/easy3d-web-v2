import z from 'zod'

import { orderSchema } from '../models/order'

export const orderSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('get:file'),
    z.literal('get:all'),
    z.literal('return'),
    z.literal('work'),
    z.literal('book'),
    z.literal('pending'),
    z.literal('update'),
    z.literal('upload:file'),
    z.literal('create'),
    z.literal('cancel'),
    z.literal('delete:file'),
  ]),
  z.union([z.literal('Order'), orderSchema]),
])
