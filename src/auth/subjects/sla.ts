import z from 'zod'

export const slaSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('update')]),
  z.literal('Sla'),
])
