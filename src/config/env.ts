import { z } from 'zod'

const envSchema = z.object({
  VITE_NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
  VITE_BASE_API_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
