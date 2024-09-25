import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type ITitleXl = ComponentProps<'h1'>

export function TitleXl({ children, className }: ITitleXl) {
  return (
    <h1
      className={cn(
        'text-balance text-3xl font-bold leading-[1.5] text-accent-foreground',
        className,
      )}
    >
      {children}
    </h1>
  )
}
