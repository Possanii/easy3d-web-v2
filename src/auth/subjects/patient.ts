import z from 'zod'

import { patientSchema } from '../models/patient'

export const patientSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('update')]),
  z.union([z.literal('Patient'), patientSchema]),
])
