import { Base } from '../typography/text/base'
import { TitleXl } from '../typography/title/title-xl'

interface IStepHeaderProps {
  title: string
  description: string
}

export function StepHeader({ title, description }: IStepHeaderProps) {
  return (
    <header className="mb-6">
      <TitleXl className="text-2xl font-semibold tracking-tight">
        {title}
      </TitleXl>
      <Base>{description}</Base>
    </header>
  )
}
