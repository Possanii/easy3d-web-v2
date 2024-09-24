import api from '@/lib/axios-client'

interface ISignInWithPasswordParams {
  email: string
  password: string
}

export async function SignInWithPassword(data: ISignInWithPasswordParams) {
  const result = await api.post('/sign-in', data)

  return result
}
