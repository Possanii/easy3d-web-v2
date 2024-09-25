import api from '@/lib/axios-client'

export async function getUserProfile() {
  const result = await api.get('/user')

  return result
}
