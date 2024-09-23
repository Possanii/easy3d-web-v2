import axios from 'axios'

import { env } from '@/config/env'

export const api = axios.create({
  baseURL: env.VITE_BASE_API_URL,
  timeout: 30000, // 30s
  withCredentials: true,
})
