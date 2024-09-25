import { FormData } from '@/app/auth/sign-up/sign-up-form'
import { useStepper } from '@/components/ui/stepper/useStepper'
import { useFormContext } from 'react-hook-form'
import { isStrongPassword } from 'validator'
import { z } from 'zod'

export const accountStepSchema = z
  .object({
    email: z.string().email('Please, provide a valid email address.'),
    password: z
      .string({ message: 'Please, provide your password' })
      .min(8, 'Your password must be at least 8 characters long.')
      .refine((password) => isStrongPassword(password), {
        message: 'Please, provide a strong password.',
      }),
    confirmPassword: z
      .string({ message: 'Please, provide your confirm password' })
      .min(8, 'Your confirm password must be at least 8 characters long.'),
  })
  .refine(
    (form) => {
      if (form.password !== form.confirmPassword) {
        return false
      }
      return true
    },
    {
      message: 'Passwords mismatch.',
      path: ['confirmPassword'],
    },
  )

export function useAccountStepController() {
  const { nextStep } = useStepper()
  const form = useFormContext<FormData>()

  async function handleNextStep() {
    const isValid = await form.trigger('accountStep', {
      shouldFocus: true,
    })

    if (isValid) {
      nextStep()
    }
  }

  return {
    form,
    handleNextStep,
  }
}
