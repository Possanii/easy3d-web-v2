import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useRecoverPasswordController } from './use-recover-password-controller'

export function RecoverPasswordForm() {
  const { register, handleSubmit, isLoading, errors } =
    useRecoverPasswordController()

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Recover password'
        )}
      </Button>
    </form>
  )
}
