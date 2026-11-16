/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { tickets } from '@/features/tickets/ticket-data'

export const Route = createFileRoute('/_authenticated/tickets/$ticketId')({
  component: TicketDetails,
})

function TicketDetails() {
  const { ticketId } = Route.useParams()
  const navigate = useNavigate()

  // 1. Find the selected ticket
  const selectedTicket = tickets.find((item) => item.id === ticketId)

  // 2. Declare ALL useState hooks before the early return
  const [department, setDepartment] = useState(selectedTicket?.department ?? '')

  const [assignee, setAssignee] = useState(selectedTicket?.assignee ?? '')

  const [progressNote, setProgressNote] = useState('')

  const [status, setStatus] = useState(selectedTicket?.status ?? '')

  // 3. Event handlers
  const handleAssign = () => {
    setStatus('In progress')
  }

  const handleProgress = () => {
    if (!progressNote.trim()) return

    setStatus('In progress')
    setProgressNote('')
  }

  // 4. Only NOW check whether the ticket exists
  if (!selectedTicket) {
    return (
      <div className='space-y-4 p-6'>
        <h1 className='text-2xl font-bold'>Ticket not found</h1>

        <Button
          variant='outline'
          onClick={() => navigate({ to: '/assigned-tickets' })}
        >
          Back to assigned tickets
        </Button>
      </div>
    )
  }

  const priorityVariant =
    selectedTicket.priority === 'Urgent' || selectedTicket.priority === 'High'
      ? 'destructive'
      : 'secondary'

  return (
    <div className='w-full px-4 py-6 sm:px-6'>
      <div className='mx-auto max-w-5xl space-y-6'>
        {/* Page heading */}
        <div className='flex flex-wrap items-start justify-between gap-4'>
          <div className='space-y-1'>
            <h1 className='text-2xl font-bold tracking-tight'>
              {selectedTicket.id} · {selectedTicket.subject}
            </h1>

            <p className='text-sm text-muted-foreground'>
              Assignment, progress, resolution, follow-up, and close all happen
              here.
            </p>
          </div>

          <Button
            variant='outline'
            onClick={() => navigate({ to: '/assigned-tickets' })}
          >
            Back
          </Button>
        </div>

        <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]'>
          {/* Left column */}
          <div className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle className='text-base'>Complaint</CardTitle>
                <CardDescription>
                  Opened {selectedTicket.openedAt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-sm leading-6'>
                  {selectedTicket.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-base'>Activity</CardTitle>
                <CardDescription>
                  Updates and actions recorded for this complaint.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  No activity updates yet.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle className='text-base'>Details</CardTitle>
              </CardHeader>

              <CardContent className='space-y-3 text-sm'>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>{status}</Badge>

                  <Badge variant={priorityVariant}>
                    {selectedTicket.priority}
                  </Badge>
                </div>

                <div>
                  <span className='text-muted-foreground'>
                    Account holder:{' '}
                  </span>
                  {selectedTicket.accountHolder}
                </div>

                <div>
                  <span className='text-muted-foreground'>
                    Account number:{' '}
                  </span>
                  {selectedTicket.accountNumber}
                </div>

                <div>
                  <span className='text-muted-foreground'>Branch: </span>
                  {selectedTicket.branch}
                </div>

                <div>
                  <span className='text-muted-foreground'>Email: </span>
                  {selectedTicket.email}
                </div>

                <div>
                  <span className='text-muted-foreground'>Phone: </span>
                  {selectedTicket.phone}
                </div>

                <div>
                  <span className='text-muted-foreground'>Type: </span>
                  {selectedTicket.type}
                </div>

                <div>
                  <span className='text-muted-foreground'>Channel: </span>
                  {selectedTicket.channel}
                </div>

                <div>
                  <span className='text-muted-foreground'>Department: </span>
                  {selectedTicket.department}
                </div>

                <div>
                  <span className='text-muted-foreground'>Assignee: </span>
                  {selectedTicket.assignee}
                </div>

                <div>
                  <span className='text-muted-foreground'>Last updated: </span>
                  {selectedTicket.updated}
                </div>
              </CardContent>
            </Card>

            {/* Assign card */}
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-base'>Assign</CardTitle>
                <CardDescription>
                  Assign this complaint to a department and staff member.
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label>Department</Label>

                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder='Choose department' />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value='Digital banking'>
                        Digital banking
                      </SelectItem>
                      <SelectItem value='Card services'>
                        Card services
                      </SelectItem>
                      <SelectItem value='Payment operations'>
                        Payment operations
                      </SelectItem>
                      <SelectItem value='ATM operations'>
                        ATM operations
                      </SelectItem>
                      <SelectItem value='Account services'>
                        Account services
                      </SelectItem>
                      <SelectItem value='Customer service'>
                        Customer service
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label>Staff member</Label>

                  <Select value={assignee} onValueChange={setAssignee}>
                    <SelectTrigger>
                      <SelectValue placeholder='Choose staff member' />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value='Nora Ali'>Nora Ali</SelectItem>
                      <SelectItem value='Leo Park'>Leo Park</SelectItem>
                      <SelectItem value='Maya Chen'>Maya Chen</SelectItem>
                      <SelectItem value='Avery Cole'>Avery Cole</SelectItem>
                      <SelectItem value='Jordan Blake'>Jordan Blake</SelectItem>
                      <SelectItem value='Priya Shah'>Priya Shah</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className='w-full' onClick={handleAssign}>
                  Assign ticket
                </Button>
              </CardContent>
            </Card>

            {/* Progress card */}
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-base'>Progress</CardTitle>
                <CardDescription>
                  Add an update about the work completed on this complaint.
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-3'>
                <div className='space-y-2'>
                  <Label>Progress update</Label>

                  <Textarea
                    placeholder='What did you do?'
                    value={progressNote}
                    onChange={(event) => setProgressNote(event.target.value)}
                    rows={4}
                  />
                </div>

                <Button
                  className='w-full'
                  onClick={handleProgress}
                >
                  Update progress
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
