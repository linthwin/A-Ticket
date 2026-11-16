/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/_authenticated/tickets/new')({
  component: NewComplaint,
})

function NewComplaint() {
  const [accountHolder, setAccountHolder] = useState('')
  const [customer, setCustomer] = useState('')
  const [complaintType, setComplaintType] = useState('')
  const [priority, setPriority] = useState('')
  const [channel, setChannel] = useState('')
  const [department, setDepartment] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const [result, setResult] = useState<'success' | 'error' | null>(null)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResult(null)

    if (
      !accountHolder ||
      !customer ||
      !complaintType ||
      !priority ||
      !channel ||
      !department ||
      !subject.trim() ||
      !description.trim()
    ) {
      setResult('error')
      setMessage('Please complete all complaint details before submitting.')
      return
    }

    // Frontend demo only: backend saving is not connected yet.
    setResult('success')
    setMessage(
      'All complaint details have been validated successfully. Backend saving is not connected yet.'
    )
  }

  return (
    <>
      <Header>
        <div className='ms-auto flex items-center gap-3'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        {/* Page Heading */}
        <div className='mb-6'>
          <h1 className='text-2xl font-bold tracking-tight'>New Complaint</h1>
          <p className='text-sm text-muted-foreground'>
            Record a new customer complaint and assign it to the appropriate
            department.
          </p>
        </div>

        {/* Complaint Form */}
        <Card className='w-full lg:w-2/3'>
          <CardHeader>
            <CardTitle>Complaint details</CardTitle>
            <CardDescription>
              Enter the account holder's information and provide details about
              the complaint.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Account Holder */}
              <div className='space-y-2'>
                <Label>Account holder</Label>
                <Select value={accountHolder} onValueChange={setAccountHolder}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select account holder' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Individual'>Individual</SelectItem>
                    <SelectItem value='Business'>Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Choose Account Holder */}
              <div className='space-y-2'>
                <Label>Choose account holder</Label>
                <Select value={customer} onValueChange={setCustomer}>
                  <SelectTrigger>
                    <SelectValue placeholder='Choose account holder' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Sam Ortiz'>Sam Ortiz</SelectItem>
                    <SelectItem value='Jordan Blake'>Jordan Blake</SelectItem>
                    <SelectItem value='Elena Vogt'>Elena Vogt</SelectItem>
                    <SelectItem value='Priya Shah'>Priya Shah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Subject */}
              <div className='space-y-2'>
                <Label htmlFor='subject'>Subject</Label>
                <Input
                  id='subject'
                  placeholder='Enter complaint subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div className='space-y-2'>
                <Label htmlFor='description'>What happened?</Label>
                <Textarea
                  id='description'
                  placeholder='Describe the customer complaint in detail...'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='min-h-[130px] resize-y'
                  required
                />
                <p className='text-xs text-muted-foreground'>
                  Provide enough information to help the assigned staff
                  understand and investigate the issue. Do not enter passwords,
                  PINs, OTPs, or full card details.
                </p>
              </div>

              {/* Two Column Fields */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {/* Left Column */}
                <div className='space-y-5'>
                  <div className='space-y-2'>
                    <Label>Complaint Type</Label>
                    <Select
                      value={complaintType}
                      onValueChange={setComplaintType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Choose complaint type' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Mobile Banking'>
                          Mobile Banking
                        </SelectItem>
                        <SelectItem value='Internet Banking'>
                          Internet Banking
                        </SelectItem>
                        <SelectItem value='ATM'>ATM</SelectItem>
                        <SelectItem value='Debit/Credit Card'>
                          Debit/Credit Card
                        </SelectItem>
                        <SelectItem value='Fund Transfer'>
                          Fund Transfer
                        </SelectItem>
                        <SelectItem value='Account Services'>
                          Account Services
                        </SelectItem>
                        <SelectItem value='Other'>Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='space-y-2'>
                    <Label>Priority</Label>
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger>
                        <SelectValue placeholder='Choose priority' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Low'>Low</SelectItem>
                        <SelectItem value='Medium'>Medium</SelectItem>
                        <SelectItem value='High'>High</SelectItem>
                        <SelectItem value='Urgent'>Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-5'>
                  <div className='space-y-2'>
                    <Label>How it came in</Label>
                    <Select value={channel} onValueChange={setChannel}>
                      <SelectTrigger>
                        <SelectValue placeholder='Choose complaint channel' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Phone Call'>Phone Call</SelectItem>
                        <SelectItem value='Email'>Email</SelectItem>
                        <SelectItem value='SMS'>SMS</SelectItem>
                        <SelectItem value='Messaging Application'>
                          Messaging Application
                        </SelectItem>
                        <SelectItem value='Branch Visit'>
                          Branch Visit
                        </SelectItem>
                        <SelectItem value='Other'>Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='space-y-2'>
                    <Label>Department</Label>
                    <Select value={department} onValueChange={setDepartment}>
                      <SelectTrigger>
                        <SelectValue placeholder='Choose department' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='IT Department'>
                          IT Department
                        </SelectItem>
                        <SelectItem value='Card Services'>
                          Card Services
                        </SelectItem>
                        <SelectItem value='Digital Banking'>
                          Digital Banking
                        </SelectItem>
                        <SelectItem value='Customer Services'>
                          Customer Services
                        </SelectItem>
                        <SelectItem value='Operations'>Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Success / Error Message */}
              {result && (
                <Alert variant={result === 'error' ? 'destructive' : 'default'}>
                  <AlertTitle>
                    {result === 'success'
                      ? 'Form validated'
                      : 'Unable to continue'}
                  </AlertTitle>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <div className='justify flex border-t pt-5'>
                <Button type='submit'>Create complaint</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Main>
    </>
  )
}
