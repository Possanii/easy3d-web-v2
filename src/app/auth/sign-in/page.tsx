import { Link } from 'react-router-dom'

import background from '@/assets/welcome-easy3-background.png'

import { SignInForm } from './sign-in-form'

export function SignInPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground text-balance">
              Enter your email below to login to your account
            </p>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to={'/sign-up'} className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted hidden lg:block">
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
