import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import background from '@/assets/slider-pt.webp'

import { SignInForm } from './sign-in-form'

export function SignInPage() {
  const { t, i18n } = useTranslation()

  i18n.changeLanguage('pt')

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{t('sign-in.login')}</h1>
            <p className="text-balance text-muted-foreground">
              {t('sign-in.description')}
            </p>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm">
            {t('sign-in.dont-have-an-account')}{' '}
            <Link to={'/sign-up'} className="underline">
              {t('sign-in.sign-up')}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={background}
          alt="easy3d default background image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
