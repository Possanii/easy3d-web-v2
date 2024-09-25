import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type ICaption = ComponentProps<'caption'>

export function Caption({ children, className }: ICaption) {
  return (
    <caption className={cn('text-start text-sm italic opacity-70', className)}>
      {children}
    </caption>
  )
}
