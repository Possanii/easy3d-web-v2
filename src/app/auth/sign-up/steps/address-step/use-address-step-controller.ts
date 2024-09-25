import { FormData } from '@/app/auth/sign-up/sign-up-form'
import { GetUserLocale } from '@/utils/get-user-locale'
import { useFormContext } from 'react-hook-form'
import { isPostalCode, PostalCodeLocale } from 'validator'
import { z } from 'zod'

export const addressStepSchema = z.object({
  street: z.string().min(1, 'Please, provide a valid street.'),
  number: z.string().min(1, 'Please, provide a valid number.'),
  city: z.string().min(1, 'Please, provide a valid city.'),
  state: z.string().min(1, 'Please, provide a valid state.'),
  zip: z
    .string()
    .min(1, 'Please, provide a valid zip.')
    .refine((zip) => isPostalCode(zip, GetUserLocale() as PostalCodeLocale), {
      message: 'Please, provide a valid postal code.',
    }),
  country: z.string().min(1, 'Please, provide a valid country.'),
  complement: z.string().optional(),
})

export function useAddressStepController() {
  const form = useFormContext<FormData>()

  return {
    form,
  }
}
