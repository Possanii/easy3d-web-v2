import { useFormContext } from 'react-hook-form'
import { isPostalCode, PostalCodeLocale } from 'validator'
import { z } from 'zod'

import { FormData } from '@/app/auth/sign-up/sign-up-form'
import { getUserLocale } from '@/utils/get-user-locale'

export const addressStepSchema = z.object({
  street: z.string().min(1, 'Please, provide a valid street.'),
  number: z.string().min(1, 'Please, provide a valid number.'),
  city: z.string().min(1, 'Please, provide a valid city.'),
  state: z.string().min(1, 'Please, provide a valid state.'),
  zip: z
    .string()
    .min(1, 'Please, provide a valid zip.')
    .refine((zip) => isPostalCode(zip, getUserLocale() as PostalCodeLocale), {
      message: 'Please, provide a valid postal code.',
    }),
  country: z.string().min(1, 'Please, provide a valid country.'),
  complement: z.string().optional(),
  terms: z.boolean().refine((term) => term, {
    message: 'Please, accept terms and conditions.',
  }),
})

export function useAddressStepController() {
  const form = useFormContext<FormData>()

  return {
    form,
  }
}
