
export type Ticket = {
  id: string
  subject: string
  accountHolder: string
  type: string
  priority: 'Urgent' | 'High' | 'Medium' | 'Low'
  status: string
  assignee: string
  updated: string
  description: string
  accountNumber: string
  branch: string
  email: string
  phone: string
  channel: string
  department: string
  openedAt: string
}

export const tickets: Ticket[] = [
  {
    id: 'CMP-2403',
    subject: 'Mobile banking login issue',
    accountHolder: 'Sam Ortiz',
    type: 'Mobile Banking',
    priority: 'High',
    status: 'In progress',
    assignee: 'Nora Ali',
    updated: 'Nov 16, 2026 · 8:45 AM',

    description:
      'The customer can enter the correct password in the mobile banking app, but the app returns to the sign-in screen. The customer cannot access the account balance or make transfers.',
    accountNumber: '1003391208',
    branch: 'Harbor',
    email: 'sam.ortiz@email.example',
    phone: '+1 617 555 0114',
    channel: 'Mobile app',
    department: 'Digital banking',
    openedAt: 'Nov 12, 2026 · 3:10 PM',
  },
  {
    id: 'CMP-2407',
    subject: 'Card charged twice for one transaction',
    accountHolder: 'Sam Ortiz',
    type: 'Debit/Credit Card',
    priority: 'Urgent',
    status: 'Assigned',
    assignee: 'Leo Park',
    updated: 'Nov 16, 2026 · 7:40 AM',

    description:
      'The customer reports that the same card purchase appears twice in the transaction history. The customer requests an investigation and confirmation of whether a duplicate charge was made.',
    accountNumber: '1003391208',
    branch: 'Harbor',
    email: 'sam.ortiz@email.example',
    phone: '+1 617 555 0114',
    channel: 'Phone call',
    department: 'Card services',
    openedAt: 'Nov 15, 2026 · 10:20 AM',
  },
  {
    id: 'CMP-2405',
    subject: 'Fund transfer has not arrived',
    accountHolder: 'Jordan Blake',
    type: 'Fund Transfer',
    priority: 'High',
    status: 'Follow-up',
    assignee: 'Leo Park',
    updated: 'Nov 16, 2026 · 3:30 AM',

    description:
      'The customer initiated a fund transfer, but the recipient has not received the money. The customer requests a transaction status check and an estimated resolution time.',
    accountNumber: '2004827610',
    branch: 'Central',
    email: 'jordan.blake@email.example',
    phone: '+1 617 555 0122',
    channel: 'Branch visit',
    department: 'Payment operations',
    openedAt: 'Nov 14, 2026 · 11:15 AM',
  },
  {
    id: 'CMP-2408',
    subject: 'ATM did not dispense cash',
    accountHolder: 'Elena Vogt',
    type: 'ATM',
    priority: 'Low',
    status: 'In progress',
    assignee: 'Maya Chen',
    updated: 'Nov 16, 2026 · 2:42 AM',

    description:
      'The customer attempted to withdraw cash from an ATM. The transaction appears in the account history, but the ATM did not dispense any cash. The customer requests an investigation.',
    accountNumber: '3005718426',
    branch: 'Riverside',
    email: 'elena.vogt@email.example',
    phone: '+1 617 555 0133',
    channel: 'Email',
    department: 'ATM operations',
    openedAt: 'Nov 15, 2026 · 9:30 AM',
  },
  {
    id: 'CMP-2404',
    subject: 'Incorrect account transaction record',
    accountHolder: 'Elena Vogt',
    type: 'Account Services',
    priority: 'Medium',
    status: 'Pending review',
    assignee: 'Maya Chen',
    updated: 'Nov 16, 2026 · 1:10 AM',

    description:
      'The customer noticed an unfamiliar or incorrectly displayed transaction in the account statement and requests verification of the transaction details.',
    accountNumber: '3005718426',
    branch: 'Riverside',
    email: 'elena.vogt@email.example',
    phone: '+1 617 555 0133',
    channel: 'In person',
    department: 'Account services',
    openedAt: 'Nov 14, 2026 · 2:45 PM',
  },
  {
    id: 'CMP-2402',
    subject: 'Debit card payment declined',
    accountHolder: 'Priya Shah',
    type: 'Debit/Credit Card',
    priority: 'Medium',
    status: 'Assigned',
    assignee: 'Maya Chen',
    updated: 'Nov 15, 2026 · 3:50 PM',

    description:
      'The customer reports that a debit card payment was declined despite having sufficient available funds. The customer requests assistance identifying the reason for the declined payment.',
    accountNumber: '4006281935',
    branch: 'West End',
    email: 'priya.shah@email.example',
    phone: '+1 617 555 0144',
    channel: 'Messaging app',
    department: 'Card services',
    openedAt: 'Nov 15, 2026 · 1:20 PM',
  },
]
