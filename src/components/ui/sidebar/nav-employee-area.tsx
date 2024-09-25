import { type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import { Small } from '@/components/typography/text/small'

export function NavEmployeeArea({
  items,
  className,
}: {
  items: {
    name: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('grid gap-0.5', className)}>
      {items.map((item) => (
        <li
          key={item.name}
          className="group relative rounded-md hover:bg-accent hover:text-accent-foreground has-[[data-state=open]]:bg-accent has-[[data-state=open]]:text-accent-foreground"
        >
          <Link
            to={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
            <Small className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
              {item.name}
            </Small>
          </Link>
        </li>
      ))}
    </ul>
  )
}
