import { LanguageSwitcher } from '../language-switcher'
import { SidebarTrigger } from '../sidebar'
import { NavBreadcrumbs } from './nav-breadcrumb'

export function AppNavbar() {
  return (
    <header className="sticky top-0 grid bg-background">
      <div className="flex h-[53px] w-full items-center justify-between border-b px-4">
        <SidebarTrigger />
        <LanguageSwitcher />
      </div>
      <div className="sticky flex h-[53px] w-full items-center justify-between border-b px-4">
        <NavBreadcrumbs />
      </div>
    </header>
  )
}
