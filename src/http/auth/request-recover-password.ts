import { api } from '@/lib/axios-client'

interface IRequestRecoverPasswordParams {
  email: string
}

export async function requestRecoverPassword(
  data: IRequestRecoverPasswordParams,
) {
  await api.post('/password/recover', data)
}
