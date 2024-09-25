import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { StepHeader } from '@/components/ui/multi-step-header'
import { StepperFooter, StepperNextButton } from '@/components/ui/stepper'
import { useAccountStepController } from './use-account-step-controller'

export function AccountStep() {
  const { form, handleNextStep } = useAccountStepController()

  return (
    <div>
      <StepHeader title="Account" description="Your credentials to access" />

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label isRequired htmlFor="email">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            {...form.register('accountStep.email')}
            error={form.formState.errors.accountStep?.email?.message}
          />
        </div>

        <div className="grid gap-2">
          <Label isRequired htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            {...form.register('accountStep.password')}
            description="Your password must contain at least one uppercase letter, one lowercase letter, one symbol, and be at least 8 characters long."
            error={form.formState.errors.accountStep?.password?.message}
          />
        </div>

        <div className="grid gap-2">
          <Label isRequired htmlFor="confirmPassword">
            Confirm your password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            required
            {...form.register('accountStep.confirmPassword')}
            error={form.formState.errors.accountStep?.confirmPassword?.message}
          />
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  )
}
