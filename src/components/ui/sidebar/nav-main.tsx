import { ChevronsUpDown, type LucideIcon } from 'lucide-react'

import { Small } from '@/components/typography/text/small'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export function NavMain({
  className,
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
} & React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('grid gap-0.5', className)}>
      {items.map((item) =>
        item.items ? (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <li>
              <div className="relative flex items-center">
                <CollapsibleTrigger asChild>
                  <span className="peer flex h-8 min-w-8 flex-1 cursor-pointer items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2">
                    <item.icon className="h-4 w-4 shrink-0" />
                    <div className="flex flex-1 overflow-hidden">
                      <Small className="line-clamp-1 pr-6 font-medium">
                        {item.title}
                      </Small>
                    </div>
                    <Button
                      variant="ghost"
                      className="absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 peer-data-[state=open]:rotate-90"
                    >
                      <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </span>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="px-4 py-0.5">
                <ul className="grid border-l px-2">
                  {item.items?.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.url}
                        className="flex h-8 min-w-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-muted-foreground ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
                      >
                        <Small className="line-clamp-1">{subItem.title}</Small>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </li>
          </Collapsible>
        ) : (
          <div key={item.title} className="relative flex items-center">
            <Link
              to={item.url}
              className="flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <div className="flex flex-1 overflow-hidden">
                <Small className="line-clamp-1 pr-6 font-medium">
                  {item.title}
                </Small>
              </div>
            </Link>
          </div>
        ),
      )}
    </ul>
  )
}
