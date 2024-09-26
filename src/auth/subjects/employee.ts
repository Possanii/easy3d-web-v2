import z from 'zod'

import { employeeSchema } from '../models/employee'

export const employeeSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('update:role'),
  ]),
  z.union([z.literal('Employee'), employeeSchema]),
])
