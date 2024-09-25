import { Base } from '@/components/typography/text/base'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import CountryDropdown from '@/components/ui/countries-select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LabelError } from '@/components/ui/label-error'
import { StepHeader } from '@/components/ui/multi-step-header'
import StateDropdown from '@/components/ui/states-select'
import { StepperFooter, StepperPreviousButton } from '@/components/ui/stepper'
import { Controller } from 'react-hook-form'
import { useAddressStepController } from './use-address-step-controller'

export function AddressStep() {
  const { form } = useAddressStepController()

  return (
    <div>
      <StepHeader title="Address" description="Your address information" />

      <div className="space-y-4">
        <div className="grid items-start gap-2 lg:grid-cols-2">
          <div className="grid gap-2 lg:col-span-1">
            <Label isRequired htmlFor="country">
              Country :
            </Label>
            <CountryDropdown
              control={form.control}
              name="addressStep.country"
              error={form.formState.errors.addressStep?.country?.message}
            />
          </div>

          <div className="grid gap-2 lg:col-span-1">
            <Label isRequired htmlFor="state">
              State :
            </Label>
            <StateDropdown
              control={form.control}
              watch={form.watch}
              name="addressStep.state"
              error={form.formState.errors.addressStep?.state?.message}
            />
          </div>
        </div>

        <div className="grid items-start gap-2 lg:grid-cols-6">
          <div className="grid gap-2 lg:col-span-4">
            <Label isRequired htmlFor="street">
              Street :
            </Label>
            <Input
              id="street"
              required
              {...form.register('addressStep.street')}
              error={form.formState.errors.addressStep?.street?.message}
            />
          </div>

          <div className="grid gap-2 lg:col-span-2">
            <Label htmlFor="number">Number :</Label>
            <Input
              id="number"
              required
              {...form.register('addressStep.number')}
              error={form.formState.errors.addressStep?.number?.message}
            />
          </div>
        </div>

        <div className="grid items-start gap-2 lg:grid-cols-6">
          <div className="grid gap-2 lg:col-span-4">
            <Label isRequired htmlFor="city">
              City :
            </Label>
            <Input
              id="city"
              required
              {...form.register('addressStep.city')}
              error={form.formState.errors.addressStep?.city?.message}
            />
          </div>

          <div className="grid gap-2 lg:col-span-2">
            <Label isRequired htmlFor="zip">
              Postal code :
            </Label>
            <Input
              id="zip"
              required
              {...form.register('addressStep.zip')}
              error={form.formState.errors.addressStep?.zip?.message}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="complement">Complement :</Label>
          <Input
            id="complement"
            {...form.register('addressStep.complement')}
            error={form.formState.errors.addressStep?.complement?.message}
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center space-x-2">
            <Controller
              name="addressStep.terms"
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="terms"
                />
              )}
            />
            <Base>
              Accept{' '}
              <a
                href="https://nextpoint.com.br/wp-content/uploads/2022/07/politica-de-privacidade.pdf"
                className="text-easy3d-primary"
                target="_blank"
              >
                terms and conditions.
              </a>
            </Base>
          </div>
          {form.formState.errors.addressStep?.terms?.message && (
            <LabelError
              error={form.formState.errors.addressStep?.terms?.message}
            />
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <Button disabled={form.formState.isSubmitting} type="submit" size="sm">
          Sign Up
        </Button>
      </StepperFooter>
    </div>
  )
}
