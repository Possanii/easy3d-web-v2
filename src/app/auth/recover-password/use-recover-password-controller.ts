import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { t } from 'i18next'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { RecoverPassword } from '@/http/auth/recover-password'

const recoverPasswordSchema = z.object({
  password: z.string().min(8),
})

type IRecoverPasswordSchema = z.infer<typeof recoverPasswordSchema>

export function useRecoverPasswordController() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const code = searchParams.get('code')

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IRecoverPasswordSchema>({
    resolver: zodResolver(recoverPasswordSchema),
  })

  const handleSubmit = hookFormHandleSubmit(async (form) => {
    try {
      await RecoverPassword({ ...form, code: code ?? '' })

      toast('Your password has been recovered successfully.')

      navigate('/auth/sign-in', { replace: true })
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
