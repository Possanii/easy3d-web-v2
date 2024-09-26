import z from 'zod'

export const storageSubject = z.tuple([
  z.union([z.literal('upload'), z.literal('delete'), z.literal('manage')]),
  z.literal('Storage'),
])
