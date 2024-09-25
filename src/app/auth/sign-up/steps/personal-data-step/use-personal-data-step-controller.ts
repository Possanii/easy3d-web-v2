import { FormData } from '@/app/auth/sign-up/sign-up-form'
import { useStepper } from '@/components/ui/stepper/useStepper'
import { getUserLocale } from '@/utils/get-user-locale'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { useFormContext } from 'react-hook-form'
import { isPassportNumber } from 'validator'
import { z } from 'zod'

export const personalDataStepSchema = z
  .object({
    documentType: z.union([z.enum(['PASSPORT', 'DOCUMENT']), z.undefined()]),
    kind: z.enum([
      'CLINICA_RADIOLOGICA_ODONTOLOGICA',
      'CLINICA_RADIOLOGICA_MEDICA',
      'CIRURGIAO_DENTISTA',
    ]),
    name: z
      .string({ message: 'Please, provide your name.' })
      .min(1, { message: 'Name is required.' }),
    phone: z
      .string({ message: 'Please, provide your phone.' })
      .min(1, { message: 'Phone is required.' })
      .refine((phone) => isValidPhoneNumber(phone), {
        message: 'Please, provide a valid phone number.',
      }),
    identity: z
      .string({ message: 'Please, provide your identity.' })
      .min(1, { message: 'Identity is required.' }),
    enrollment: z
      .string({ message: 'Please, provide your enrollment.' })
      .optional(),
  })
  .refine(
    (form) => {
      if (form.documentType === 'PASSPORT') {
        return isPassportNumber(form.identity, getUserLocale())
      }
      return true
    },
    {
      path: ['identity'],
      message: 'Please, provide a valid passport number.',
    },
  )

export function usePersonalDataStepController() {
  const { nextStep } = useStepper()
  const form = useFormContext<FormData>()

  async function handleNextStep() {
    const isValid = await form.trigger('personalDataStep', {
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
