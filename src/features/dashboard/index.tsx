import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Ticket summary cards
const summaryCards = [
  {
    title: 'Unassigned',
    value: '1',
    description: 'Open complaints with no owner',
  },
  {
    title: 'In progress',
    value: '4',
    description: 'Assigned or being worked',
  },
  {
    title: 'Needs review',
    value: '1',
    description: 'Staff resolutions waiting on you',
  },
  {
    title: 'Follow-up',
    value: '2',
    description: 'Approved work ready for the customer',
  },
]

// Sample ticket data
const tickets = [
  {
    id: 'CMP-2403',
    subject: 'Mobile banking login issue',
    customer: 'Sam Ortiz',
    priority: 'High',
    status: 'In progress',
    assignee: 'Nora Ali',
    updated: 'Nov 16, 2026 · 8:45 AM',
  },
  {
    id: 'CMP-2407',
    subject: 'Card charged twice for one transaction',
    customer: 'Sam Ortiz',
    priority: 'Urgent',
    status: 'Assigned',
    assignee: 'Leo Park',
    updated: 'Nov 16, 2026 · 7:40 AM',
  },
  {
    id: 'CMP-2405',
    subject: 'Fund transfer has not arrived',
    customer: 'Jordan Blake',
    priority: 'High',
    status: 'Follow-up',
    assignee: 'Leo Park',
    updated: 'Nov 16, 2026 · 3:30 AM',
  },
  {
    id: 'CMP-2408',
    subject: 'ATM did not dispense cash',
    customer: 'Elena Vogt',
    priority: 'Low',
    status: 'In progress',
    assignee: 'Maya Chen',
    updated: 'Nov 16, 2026 · 2:42 AM',
  },
  {
    id: 'CMP-2404',
    subject: 'Incorrect account transaction record',
    customer: 'Elena Vogt',
    priority: 'Medium',
    status: 'Pending review',
    assignee: 'Maya Chen',
    updated: 'Nov 16, 2026 · 1:10 AM',
  },
  {
    id: 'CMP-2402',
    subject: 'Debit card payment declined',
    customer: 'Priya Shah',
    priority: 'Medium',
    status: 'Assigned',
    assignee: 'Maya Chen',
    updated: 'Nov 15, 2026 · 3:50 PM',
  },
]

function getPriorityClass(priority: string) {
  switch (priority) {
    case 'Urgent':
      return 'bg-rose-100 text-rose-700'
    case 'High':
      return 'bg-orange-100 text-orange-700'
    case 'Medium':
      return 'bg-slate-100 text-slate-700'
    default:
      return 'bg-blue-50 text-blue-700'
  }
}

function getStatusClass(status: string) {
  switch (status) {
    case 'In progress':
      return 'bg-orange-100 text-orange-700'
    case 'Assigned':
      return 'bg-indigo-100 text-indigo-700'
    case 'Follow-up':
      return 'bg-orange-100 text-orange-700'
    case 'Pending review':
      return 'bg-violet-100 text-violet-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

export function Dashboard() {
  return (
    <>
      {/* Top navigation */}
      <Header>
        <Search />
        <div className='ms-auto flex items-center gap-3'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* Dashboard content */}
      <Main className='mx-auto w-full max-w-6xl'>
        {/* Page heading */}
        <div className='mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Desk overview</h1>
            <p className='text-sm text-muted-foreground'>
              Complaints waiting to be assigned, reviewed, followed up, or
              closed.
            </p>
          </div>

          <Button asChild>
            <Link to='/tickets/new'>New complaint</Link>
          </Button>
        </div>

        {/* Summary cards */}
        <div className='mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {summaryCards.map((item) => (
            <Card key={item.title} className='shadow-sm'>
              <CardHeader className='pb-2'>
                <CardDescription>{item.title}</CardDescription>
                <CardTitle className='text-3xl font-semibold'>
                  {item.value}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className='text-xs text-muted-foreground'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent tickets */}
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle>Recent tickets</CardTitle>
            <CardDescription>
              Latest customer complaints and their current progress.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className='w-full overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Updated</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className='py-4 font-medium'>{ticket.id}</TableCell>

                      <TableCell className='py-4'>{ticket.subject}</TableCell>

                      <TableCell className='py-4'>{ticket.customer}</TableCell>

                      <TableCell className='py-4'>
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-medium ${getPriorityClass(ticket.priority)}`}
                        >
                          {ticket.priority}
                        </span>
                      </TableCell>

                      <TableCell className='py-4'>
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ${getStatusClass(ticket.status)}`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>

                      <TableCell className='py-4'>{ticket.assignee}</TableCell>

                      <TableCell className='whitespace-nowrap text-muted-foreground'>
                        {ticket.updated}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Main>
    </>
  )
}
