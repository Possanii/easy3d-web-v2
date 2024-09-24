import api from '@/lib/axios-client'

interface IRecoverPasswordParams {
  code: string
  password: string
}

export async function RecoverPassword(data: IRecoverPasswordParams) {
  const result = await api.post('/password/reset', data)

  return result
}
