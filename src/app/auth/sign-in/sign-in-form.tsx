import { Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useSignInFormController } from './use-sign-in-form-controller'

export function SignInForm() {
  const { t } = useTranslation()

  const { register, handleSubmit, isLoading, errors } =
    useSignInFormController()

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">{t('sign-in.email-label-input')}</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">{t('sign-in.password-label-input')}</Label>
          <Link
            to="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            {t('sign-in.forgot-password')}
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          required
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <Button type="submit" className="w-full">
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Label>{t('sign-in.sign-in-form-button')}</Label>
        )}
      </Button>
    </form>
  )
}
