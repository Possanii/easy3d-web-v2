import api from '@/lib/axios-client'

export async function logout() {
  const result = await api.post('/logout')

  return result
}
