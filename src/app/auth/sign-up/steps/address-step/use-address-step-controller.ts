import { FormData } from '@/app/auth/sign-up/sign-up-form'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

export const addressStepSchema = z.object({
  street: z.string().min(1, 'Please, provide a valid street.'),
  number: z.string().min(1, 'Please, provide a valid number.'),
  city: z.string().min(1, 'Please, provide a valid city.'),
  state: z.string().min(1, 'Please, provide a valid state.'),
  zip: z.string().min(1, 'Please, provide a valid zip.'),
  country: z.string().min(1, 'Please, provide a valid country.'),
  complement: z.string().optional(),
})

export function useAddressStepController() {
  const form = useFormContext<FormData>()

  return {
    form,
  }
}
