import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ISmallDescription = ComponentProps<'span'>

export function SmallDescription({ children, className }: ISmallDescription) {
  return (
    <span
      className={cn(
        'text-start text-xs italic leading-[1.5] text-accent-foreground opacity-70',
        className,
      )}
    >
      {children}
    </span>
  )
}
