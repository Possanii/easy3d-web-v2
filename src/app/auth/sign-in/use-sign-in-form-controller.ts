import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { z } from 'zod'

import { SignInWithPassword } from '@/http/auth/sign-in-with-password'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type ISignIn = z.infer<typeof signInSchema>

export function useSignInFormController() {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isLoading, errors },
  } = useForm<ISignIn>({
    resolver: zodResolver(signInSchema),
  })

  const handleSubmit = hookFormHandleSubmit(async (form) => {
    try {
      await SignInWithPassword(form)
    } catch (err) {
      if (err instanceof AxiosError) {
        const data = await err.response?.data

        toast(data.message)
      } else {
        toast(t('globals.something-went-wrong'))
      }
    }
  })

  return {
    register,
    handleSubmit,
    isLoading,
    errors,
  }
}
