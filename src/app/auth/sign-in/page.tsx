import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import background from '@/assets/slider-pt.webp'
import { Base } from '@/components/typography/text/base'
import { Small } from '@/components/typography/text/small'
import { TitleXl } from '@/components/typography/title/title-xl'

import { SignInForm } from './sign-in-form'

export function SignInPage() {
  const { t } = useTranslation()

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <TitleXl className="text-3xl font-bold">
              {t('sign-in.login')}
            </TitleXl>
            <Base>{t('sign-in.description')}</Base>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm">
            <Small>
              {t('sign-in.dont-have-an-account')}{' '}
              <Link to={'/auth/sign-up'} className="underline">
                {t('sign-in.sign-up')}
              </Link>
            </Small>
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
