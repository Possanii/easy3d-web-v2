import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { t } from 'i18next'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { requestRecoverPassword } from '@/http/auth/request-recover-password'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type IForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export function useForgotPasswordController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const handleSubmit = hookFormHandleSubmit(async (form) => {
    try {
      await requestRecoverPassword(form)

      toast('More information has been sent to your email address')
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
    isLoading: isSubmitting,
    errors,
  }
}
