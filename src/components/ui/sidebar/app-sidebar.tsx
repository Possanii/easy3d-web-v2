import {
  Archive,
  BookCheck,
  Bookmark,
  ClipboardCheck,
  File,
  FolderOpen,
  Hospital,
  IdCard,
  LayoutDashboard,
  LifeBuoy,
  Send,
  TicketPlus,
  Tickets,
  User,
  UserPlus,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from '@/components/ui/sidebar'
import { NavMain } from '@/components/ui/sidebar/nav-main'
import { NavUser } from '@/components/ui/sidebar/nav-user'
import { useUser } from '@/hooks/use-user'
import { NavEmployeeArea } from './nav-employee-area'
import { NavHeader } from './nav-header'

const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      description: 'See your company progress.',
    },
    {
      title: 'Register',
      url: '#',
      icon: UserPlus,
      isActive: false,
      items: [
        {
          title: 'Patients',
          url: '/user/patients',
          icon: User,
          description: 'Manage your patients.',
        },
        {
          title: 'Customers',
          url: '/user/customers',
          icon: Hospital,
          description: 'Manage your customers.',
        },
        {
          title: 'Employees',
          url: '/user/employees',
          icon: IdCard,
          description: 'Manage your employees.',
        },
        {
          title: 'Services',
          url: '/services',
          icon: ClipboardCheck,
          description: 'Manage your services.',
        },
      ],
    },
    {
      title: 'Orders',
      url: '#',
      icon: Tickets,
      isActive: false,
      items: [
        {
          title: 'New order',
          url: '/create/order',
          icon: TicketPlus,
          description: 'Create a new order.',
        },
        {
          title: 'My orders',
          url: '/my-orders',
          icon: BookCheck,
          description: 'Manage your orders.',
        },
        {
          title: 'Old orders',
          url: '/old-orders',
          icon: Archive,
          description: 'Manage your old orders.',
        },
      ],
    },
  ],

  navEmployeeArea: [
    {
      name: 'View orders',
      url: '/orders',
      icon: FolderOpen,
      description: 'See all orders in progress.',
    },
    {
      name: 'Order in progress',
      url: '/work-order',
      icon: File,
      description: 'Continue your work.',
    },
    {
      name: 'Bookeds',
      url: '/bookeds-orders',
      icon: Bookmark,
      description: 'Manage your bookeds orders.',
    },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
}

export function AppSidebar() {
  const user = useUser()

  return (
    <Sidebar>
      <SidebarHeader className="bg-red-600">
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Employee Area</SidebarLabel>
          <NavEmployeeArea items={data.navEmployeeArea} />
        </SidebarItem>
        {/* <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user!} />
      </SidebarFooter>
    </Sidebar>
  )
}
