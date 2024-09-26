import { AppNavbar } from '@/components/ui/navbar/app-navbar'
import { SidebarLayout } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/sidebar/app-sidebar'
import Cookies from 'js-cookie'
import { Outlet } from 'react-router-dom'

export function WorkspaceLayout() {
  return (
    <SidebarLayout defaultOpen={Cookies.get('sidebar:state') === 'true'}>
      <AppSidebar />
      <main className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
        <AppNavbar />
        <div className="h-full rounded-md p-2">
          <Outlet />
        </div>
      </main>
    </SidebarLayout>
  )
}
