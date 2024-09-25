import { CustomerTypeSelect } from '@/components/ui/customer-type-select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { StepHeader } from '@/components/ui/multi-step-header'
import { InputPhone } from '@/components/ui/phone-input'
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from '@/components/ui/stepper'
import { usePersonalDataStepController } from './use-personal-data-step-controller'

export function PersonalDataStep() {
  const { form, handleNextStep } = usePersonalDataStepController()

  return (
    <div>
      <StepHeader title="Personal data" description="Tell us about you" />

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="kind">Kind :</Label>
          <CustomerTypeSelect
            control={form.control}
            name="personalDataStep.kind"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name">Name :</Label>
          <Input
            id="name"
            required
            {...form.register('personalDataStep.name')}
            error={form.formState.errors.personalDataStep?.name?.message}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone :</Label>
          <InputPhone
            control={form.control}
            name="personalDataStep.phone"
            setValue={form.setValue}
            fieldToBeSet={'personalDataStep.phone'}
            error={form.formState.errors.personalDataStep?.phone?.message}
          />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="identity">Identity :</Label>
            <Input
              id="identity"
              required
              {...form.register('personalDataStep.identity')}
              description="oi, belezinha?"
              error={form.formState.errors.personalDataStep?.identity?.message}
            />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="enrollment">Enrollment :</Label>
            <Input
              id="enrollment"
              {...form.register('personalDataStep.enrollment')}
              error={
                form.formState.errors.personalDataStep?.enrollment?.message
              }
            />
          </div>
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  )
}
