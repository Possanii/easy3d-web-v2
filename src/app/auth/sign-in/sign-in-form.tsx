import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useSignInFormController } from './use-sign-in-form-controller'

export function SignInForm() {
  const { register, handleSubmit, isLoading, errors } =
    useSignInFormController()

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="password">Password</Label>
          <Link
            to="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
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
          <Label>Sign in</Label>
        )}
      </Button>
    </form>
  )
}
