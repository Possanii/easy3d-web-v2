import z from 'zod'

import { serviceSchema } from '../models/service'

export const serviceSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('get:active'),
    z.literal('create'),
    z.literal('update'),
  ]),
  z.union([z.literal('Service'), serviceSchema]),
])
