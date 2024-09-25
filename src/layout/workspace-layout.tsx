import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { SidebarLayout, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/sidebar/app-sidebar'
import Cookies from 'js-cookie'
import { Outlet } from 'react-router-dom'

export function WorkspaceLayout() {
  return (
    <>
      <SidebarLayout defaultOpen={Cookies.get('sidebar:state') === 'true'}>
        <AppSidebar />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
          <div className="h-full rounded-md border-2 border-dashed p-2">
            <SidebarTrigger />
            <LanguageSwitcher />
            <Outlet />
          </div>
        </main>
      </SidebarLayout>
    </>
  )
}
