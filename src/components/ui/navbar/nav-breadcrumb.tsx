import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useIsMobile } from '@/hooks/use-mobile'

const ITEMS_TO_DISPLAY = 3

export function NavBreadcrumbs() {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()

  const paths = location.pathname.split('/').filter(Boolean)

  const buildPath = (index: number) => `/${paths.slice(0, index + 1).join('/')}`

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {paths.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isMobile ? (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {paths
                        .slice(0, -ITEMS_TO_DISPLAY + 1)
                        .map((path, index) => (
                          <Link
                            key={index}
                            to={buildPath(index)}
                            className="py-1 text-sm"
                          >
                            {decodeURIComponent(path)}
                          </Link>
                        ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              ) : (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {paths
                      .slice(0, -ITEMS_TO_DISPLAY + 1)
                      .map((path, index) => (
                        <DropdownMenuItem key={index}>
                          <Link to={buildPath(index)}>
                            {decodeURIComponent(path)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {paths.slice(-ITEMS_TO_DISPLAY + 1).map((path, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
              <Link to={buildPath(index + paths.length - ITEMS_TO_DISPLAY + 1)}>
                {decodeURIComponent(path)}
              </Link>
            </BreadcrumbLink>
            {index !== paths.slice(-ITEMS_TO_DISPLAY + 1).length - 1 && (
              <BreadcrumbSeparator />
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
