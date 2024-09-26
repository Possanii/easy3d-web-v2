import { t } from 'i18next'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useForgotPasswordController } from './use-forgot-password-controller'

export function ForgotPasswordForm() {
  const { register, handleSubmit, isLoading, errors } =
    useForgotPasswordController()

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">{t('forgot-password.email-label-input')}</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          {...register('email')}
          error={errors.email?.message}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          t('forgot-password.recover-password')
        )}
      </Button>
    </form>
  )
}
