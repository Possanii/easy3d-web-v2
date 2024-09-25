import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

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
