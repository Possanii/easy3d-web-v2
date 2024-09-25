import background from '@/assets/slider-pt.webp'
import { Small } from '@/components/typography/text/small'
import { Link } from 'react-router-dom'
import { SignUpForm } from './sign-up-form'

export function SignUpPage() {
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
        <div className="mx-auto grid w-[450px] gap-6">
          <SignUpForm />
          <Small className="mt-4 text-center">
            Do you already have an account?{' '}
            <Link to={'/auth/sign-in'} className="underline">
              Sign in
            </Link>
          </Small>
        </div>
      </div>
    </div>
  )
}
