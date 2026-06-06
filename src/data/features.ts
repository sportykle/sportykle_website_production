import {
  Users, CalendarCheck, Wallet, UserCog, Calendar, Target,
  Package, MessageSquare, Dumbbell, BarChart3, type LucideIcon,
} from 'lucide-react'

export interface FeatureCategory {
  id: string
  title: string
  icon: LucideIcon
  description: string
  items: string[]
}

export const featureCategories: FeatureCategory[] = [
  {
    id: 'membership',
    title: 'Membership Management',
    icon: Users,
    description: 'Complete membership lifecycle management from onboarding to renewal.',
    items: ['Member Profiles', 'Membership Plans', 'Renewals', 'Expiry Tracking', 'Membership History'],
  },
  {
    id: 'attendance',
    title: 'Attendance Management',
    icon: CalendarCheck,
    description: 'Track member attendance with QR codes, check-ins, and detailed analytics.',
    items: ['QR Attendance', 'Check-in System', 'Reports', 'Attendance Analytics'],
  },
  {
    id: 'finance',
    title: 'Finance Management',
    icon: Wallet,
    description: 'Full financial control with income tracking, expenses, and tax reports.',
    items: ['Income Tracking', 'Expense Tracking', 'Profit Reports', 'Tax Reports', 'Invoices'],
  },
  {
    id: 'staff',
    title: 'Staff Management',
    icon: UserCog,
    description: 'Manage your team with attendance, payroll, leave, and performance tracking.',
    items: ['Attendance', 'Payroll', 'Leave Management', 'Performance Tracking'],
  },
  {
    id: 'booking',
    title: 'Online Booking',
    icon: Calendar,
    description: 'Enable members to book courts, slots, and facilities online.',
    items: ['Court Booking', 'Slot Booking', 'Facility Booking'],
  },
  {
    id: 'crm',
    title: 'CRM Management',
    icon: Target,
    description: 'Convert leads into loyal members with powerful CRM tools.',
    items: ['Lead Tracking', 'Follow Ups', 'Conversion Reports'],
  },
  {
    id: 'assets',
    title: 'Asset Management',
    icon: Package,
    description: 'Track equipment, maintenance logs, and facility assets.',
    items: ['Equipment Tracking', 'Maintenance Logs', 'Complaints Management', 'Ticket Tracking', 'Resolution Workflow'],
  },
  {
    id: 'store',
    title: 'Store Management',
    icon: Package,
    description: 'Sell products, manage inventory, and work with vendors.',
    items: ['Product Sales', 'Inventory Management', 'Vendor Management'],
  },
  {
    id: 'communication',
    title: 'WhatsApp & SMS',
    icon: MessageSquare,
    description: 'Automated communications for renewals, payments, and announcements.',
    items: ['Announcements', 'Renewal Reminders', 'Payment Reminders'],
  },
  {
    id: 'workout',
    title: 'Workout & Diet Management',
    icon: Dumbbell,
    description: 'Personalized fitness programs with progress tracking.',
    items: ['Personalized Programs', 'Progress Tracking', 'Detailed Reports'],
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    icon: BarChart3,
    description: 'Comprehensive business intelligence across all operations.',
    items: ['Financial Reports', 'Membership Reports', 'Attendance Reports', 'Staff Reports'],
  },
]

export const whySportykleBenefits = [
  {
    title: 'Increase Revenue',
    description: 'Utilize powerful marketing and management tools to attract new members, maximize sales, and create new revenue streams.',
    icon: 'trending-up',
  },
  {
    title: 'Reduce Operational Costs',
    description: 'Automate routine tasks and streamline processes to save time, reduce errors, and cut down operational expenses.',
    icon: 'piggy-bank',
  },
  {
    title: 'Boost Retention',
    description: 'Implement effective member engagement strategies that keep members active and loyal.',
    icon: 'heart',
  },
  {
    title: 'Digitally Transform Your Business',
    description: 'Move away from spreadsheets and paperwork with a modern cloud platform.',
    icon: 'cloud',
  },
  {
    title: 'Smart Scaling',
    description: 'Expand seamlessly with scalable solutions designed for growing organizations.',
    icon: 'layers',
  },
  {
    title: 'Streamlined Billing & Payments',
    description: 'Automate invoicing, payment collection, tax management, and renewals.',
    icon: 'credit-card',
  },
  {
    title: 'Marketing Solutions',
    description: 'Promote services, generate leads, and increase member acquisition.',
    icon: 'megaphone',
  },
  {
    title: 'Business Operations',
    description: 'Simplify daily management tasks with centralized business tools.',
    icon: 'settings',
  },
  {
    title: 'Data & Analytics',
    description: 'Access real-time reports and insights to make better decisions.',
    icon: 'bar-chart',
  },
  {
    title: 'Smart Segments',
    description: 'Create targeted member groups for campaigns and engagement.',
    icon: 'users',
  },
]

export const automationItems = [
  'Membership Renewals',
  'Payment Reminders',
  'WhatsApp Messages',
  'SMS Campaigns',
  'Surveys',
  'Member Onboarding',
]

export const comparisonFeatures = [
  { feature: 'Multi-Center Management', sportykle: true, others: 'limited' },
  { feature: 'Multi-Sports Management', sportykle: true, others: 'limited' },
  { feature: 'Membership Management', sportykle: true, others: true },
  { feature: 'Attendance Tracking', sportykle: true, others: true },
  { feature: 'CRM Management', sportykle: true, others: 'limited' },
  { feature: 'WhatsApp Integration', sportykle: true, others: 'limited' },
  { feature: 'Asset Management', sportykle: true, others: 'rare' },
  { feature: 'Workout & Diet Plans', sportykle: true, others: 'limited' },
  { feature: 'Store Management', sportykle: true, others: 'rare' },
  { feature: 'Mobile App', sportykle: true, others: 'extra' },
  { feature: 'Advanced Reports', sportykle: true, others: 'limited' },
]
