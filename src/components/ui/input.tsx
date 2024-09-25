import { AlertCircleIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Caption } from '../typography/text/caption'
import { Small } from '../typography/text/small'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, description, error, ...props }, ref) => {
    return (
      <div className="grid w-full gap-2">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
            className,
          )}
          ref={ref}
          {...props}
        />
        {description && <Caption>{description}</Caption>}
        {error && (
          <div className="text mr-4 flex items-center gap-2">
            <AlertCircleIcon className="h-[14px] w-[14px] text-destructive" />
            <Small className="text-destructive">{error}</Small>
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
