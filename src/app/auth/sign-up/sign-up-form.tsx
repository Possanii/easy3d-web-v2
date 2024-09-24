import { Stepper } from '@/components/ui/stepper'
import { signUpCustomer } from '@/http/auth/sign-up-customer'
import { safeSessionStorageGetItem } from '@/utils/safe-session-storage-get-item'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { AccountStep } from './steps/account-step/account-step-page'
import { accountStepSchema } from './steps/account-step/use-account-step-controller'
import { AddressStep } from './steps/address-step/page'
import { addressStepSchema } from './steps/address-step/use-address-step-controller'
import { PersonalDataStep } from './steps/personal-data-step/personal-data-step-page'
import { personalDataStepSchema } from './steps/personal-data-step/use-personal-data-step-controller'

const schema = z.object({
  accountStep: accountStepSchema,
  personalDataStep: personalDataStepSchema,
  addressStep: addressStepSchema,
})

export type FormData = z.infer<typeof schema>

export function SignUpForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: safeSessionStorageGetItem<FormData>('onboarding-form') ?? {
      accountStep: {
        email: '',
        password: '',
      },
      personalDataStep: {
        name: '',
        enrollment: '',
        identity: '',
        phone: '',
      },
      addressStep: {
        street: '',
        number: '',
        city: '',
        complement: '',
        state: '',
        country: '',
        zip: '',
      },
    },
  })

  useEffect(() => {
    const { unsubscribe } = form.watch((formData) => {
      sessionStorage.setItem('onboarding-form', JSON.stringify(formData))
    })

    return () => {
      unsubscribe()
    }
  }, [form])

  const handleSubmit = form.handleSubmit(async (formData) => {
    try {
      await signUpCustomer({
        ...formData.accountStep,
        ...formData.personalDataStep,
        country: formData.addressStep.country,
        address: {
          ...formData.addressStep,
        },
      })

      navigate('/auth/sign-in', {
        replace: true,
      })

      toast('Your account has been created.')

      sessionStorage.removeItem('onboarding-form')
      sessionStorage.removeItem('country_phone')
    } catch (err) {
      if (err instanceof AxiosError) {
        const data = await err.response?.data

        toast(data.message)
      } else {
        console.log(err)
        toast(t('globals.something-went-wrong'))
      }
    }
  })

  return (
    <div className="flex w-full justify-center">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="w-full">
          <Stepper
            steps={[
              {
                label: 'Account',
                content: <AccountStep />,
              },
              {
                label: 'Personal Data',
                content: <PersonalDataStep />,
              },
              {
                label: 'Address',
                content: <AddressStep />,
              },
            ]}
          />
        </form>
      </FormProvider>
    </div>
  )
}
