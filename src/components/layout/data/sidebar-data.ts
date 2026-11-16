
import {
  LayoutDashboard,
  Ticket,
  Plus,
  UserRoundCheck,
  ClipboardCheck,
  Users,
  Building2,
  ChartColumn,
  Landmark,
} from 'lucide-react'

import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Admin',
    email: 'admin@bankcare.com',
    avatar: '/avatars/shadcn.jpg',
  },

  teams: [
    {
      name: 'BankCare',
      logo: Landmark,
      plan: 'Complaint desk',
    },
  ],

  navGroups: [
    {
      title: 'Desk',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'All tickets',
          url: '/tickets',
          icon: Ticket,
        },
        {
          title: 'New complaint',
          url: '/tickets/new',
          icon: Plus,
        },
        {
          title: 'Assigned tickets',
          url: '/assigned-tickets',
          icon: UserRoundCheck,
        },
        {
          title: 'Resolutions',
          url: '/resolutions',
          icon: ClipboardCheck,
          badge: '1',
        },
      ],
    },

    {
      title: 'Directory',
      items: [
        {
          title: 'Customers',
          url: '/customers',
          icon: Users,
        },
        {
          title: 'Departments and staff',
          url: '/departments',
          icon: Building2,
        },
      ],
    },

    {
      title: 'Insights',
      items: [
        {
          title: 'Reports',
          url: '/reports',
          icon: ChartColumn,
        },
      ],
    },
  ],
}
