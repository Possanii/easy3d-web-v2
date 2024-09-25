import background from '@/assets/slider-pt.webp'
import { Base } from '@/components/typography/text/base'
import { TitleXl } from '@/components/typography/title/title-xl'
import { RecoverPasswordForm } from './recover-password-form'

export function RecoverPasswordPage() {
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
            <TitleXl>Recover Password</TitleXl>
            <Base className="text-balance text-muted-foreground">
              Enter your new password below to recover your account
            </Base>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </div>
  )
}
