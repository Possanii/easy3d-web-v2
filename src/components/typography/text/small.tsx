import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type IPSmal = ComponentProps<'p'>

export function PSmall({ children, className }: IPSmal) {
  return (
    <p
      className={cn(
        'text-accent-foreground text-sm font-normal leading-[1.5]',
        className,
      )}
    >
      {children}
    </p>
  )
}
