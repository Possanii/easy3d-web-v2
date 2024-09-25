import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type IBase = ComponentProps<'p'>

export function Base({ children, className }: IBase) {
  return (
    <p
      className={cn(
        'text-balance text-base font-normal leading-[1.5] text-accent-foreground',
        className,
      )}
    >
      {children}
    </p>
  )
}
