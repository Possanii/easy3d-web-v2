import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ISmall = ComponentProps<'p'>

export function Small({ children, className }: ISmall) {
  return (
    <p
      className={cn(
        'text-sm font-normal leading-[1.5] text-accent-foreground',
        className,
      )}
    >
      {children}
    </p>
  )
}
