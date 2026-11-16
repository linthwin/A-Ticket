/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { tickets } from '@/features/tickets/ticket-data'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/_authenticated/assigned-tickets')({
  component: AssignedTickets,
})

function getPriorityClass(priority: string) {
  switch (priority) {
    case 'Urgent':
      return 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
    case 'High':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
    case 'Medium':
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    default:
      return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
  }
}

function getStatusClass(status: string) {
  switch (status) {
    case 'In progress':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
    case 'Assigned':
      return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
    case 'Follow-up':
      return 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
    case 'Pending review':
      return 'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300'
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }
}

function AssignedTickets() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredTickets = tickets.filter((ticket) => {
    const searchValue = search.toLowerCase()

    const matchesSearch =
      ticket.id.toLowerCase().includes(searchValue) ||
      ticket.subject.toLowerCase().includes(searchValue) ||
      ticket.accountHolder.toLowerCase().includes(searchValue) ||
      ticket.type.toLowerCase().includes(searchValue) ||
      ticket.assignee.toLowerCase().includes(searchValue)

    const matchesStatus =
      statusFilter === 'all' || ticket.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <>
      <Header>
        <div className='ms-auto flex items-center gap-3'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-6'>
          <h1 className='text-2xl font-bold tracking-tight'>
            Assigned tickets
          </h1>
          <p className='text-sm text-muted-foreground'>
            Complaints that already have an owner.
          </p>
        </div>

        {/* Search and Status Filter */}
        <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center'>
          <div className='relative w-full sm:max-w-sm'>
            <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Search tickets...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='pl-9'
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className='w-full sm:w-[180px]'>
              <SelectValue placeholder='Filter by status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All statuses</SelectItem>
              <SelectItem value='Assigned'>Assigned</SelectItem>
              <SelectItem value='In progress'>In progress</SelectItem>
              <SelectItem value='Follow-up'>Follow-up</SelectItem>
              <SelectItem value='Pending review'>Pending review</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Assigned Tickets Table */}
        <div className='rounded-md border'>
          <div className='w-full overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Account holder</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Updated</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      {/* Ticket column */}
                      <TableCell>
                        <Link
                          to='/tickets/$ticketId'
                          params={{ ticketId: ticket.id }}
                          className='font-medium text-primary hover:underline'
                        >
                          {ticket.id}
                        </Link>
                      </TableCell>

                      {/* Subject column */}
                      <TableCell>
                        <Link
                          to='/tickets/$ticketId'
                          params={{ ticketId: ticket.id }}
                          className='font-medium hover:underline'
                        >
                          {ticket.subject}
                        </Link>
                      </TableCell>
                      <TableCell className='py-4'>
                        {ticket.accountHolder}
                      </TableCell>

                      <TableCell className='py-4 whitespace-nowrap'>
                        {ticket.type}
                      </TableCell>

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

                      <TableCell className='py-4 whitespace-nowrap text-muted-foreground'>
                        {ticket.updated}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className='h-24 text-center text-muted-foreground'
                    >
                      No assigned tickets found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        {/*can delete*/}
        <p className='mt-3 text-sm text-muted-foreground'>
          Showing {filteredTickets.length} of {tickets.length} tickets
        </p>
      </Main>
    </>
  )
}
