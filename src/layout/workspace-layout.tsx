import { Menu } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function WorkspaceLayout() {
  return (
    <div className="relative flex h-full w-full flex-col gap-6 px-6 py-10 md:flex-row md:gap-10 md:pl-[148px] md:pr-10">
      <Menu className="block max-w-[24px] md:hidden" />

      <Outlet />
    </div>
  )
}
