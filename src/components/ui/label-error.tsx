import { cn } from '@/lib/utils'
import { AlertCircleIcon } from 'lucide-react'
import { Small } from '../typography/text/small'

export interface ILabelError
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  error: string
}

export function LabelError({ className, error, ...props }: ILabelError) {
  return (
    <div
      className={cn('text mr-4 flex items-center gap-2', className)}
      {...props}
    >
      <AlertCircleIcon className="h-[14px] w-[14px] text-destructive" />
      <Small className="text-destructive">{error}</Small>
    </div>
  )
}
