import axios from 'axios'

import { env } from '@/config/env'
import { logout } from '@/http/auth/logout'
import { clearStorages } from '@/utils/clear-storages'

let isRedirecting = false // Flag para evitar o loop

const api = axios.create({
  baseURL: env.VITE_BASE_API_URL,
  timeout: 30000, // 30s
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.errorCode === 'UNAUTHORIZED_ACCESS_TOKEN_ERROR'
    ) {
      if (!isRedirecting) {
        isRedirecting = true
        try {
          await logout()
        } catch {
        } finally {
          clearStorages()
          window.location.href = '/auth/sign-in'
        }
      }
    }
    return Promise.reject(error)
  },
)

export default api
