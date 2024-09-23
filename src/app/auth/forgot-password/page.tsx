import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import background from '@/assets/slider-pt.webp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ForgotPasswordPage() {
  const { t } = useTranslation()

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <img
          src={background}
          alt="easy3d default background image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">
              {t('forgot-password.forgot-password')}
            </h1>
            <p className="text-balance text-muted-foreground">
              {t('forgot-password.enter-your-email-to-recover-password')}
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">
                {t('forgot-password.email-label-input')}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t('forgot-password.recover-password')}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {t('forgot-password.did-you-remember-your-password')}{' '}
            <Link to={'/sign-in'} className="underline">
              {t('forgot-password.sign-in')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
