import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'
import { Button } from '@/components/ui/Button'

const solutions = [
  {
    title: 'Membership & Billing',
    description: 'End-to-end membership lifecycle management with automated billing, renewals, and payment collection.',
    features: ['Flexible membership plans', 'Automated renewals', 'Payment reminders', 'Invoice generation'],
    href: '/features#membership',
  },
  {
    title: 'Attendance & Check-in',
    description: 'Modern attendance tracking with QR codes, biometric integration, and real-time analytics.',
    features: ['QR code check-in', 'Real-time attendance', 'Attendance reports', 'Member visit history'],
    href: '/features#attendance',
  },
  {
    title: 'Staff & Payroll',
    description: 'Complete staff management with attendance, payroll processing, leave management, and performance tracking.',
    features: ['Staff attendance', 'Payroll automation', 'Leave management', 'Performance reviews'],
    href: '/features#staff',
  },
  {
    title: 'Booking & Scheduling',
    description: 'Online booking for courts, facilities, classes, and personal training sessions.',
    features: ['Court booking', 'Slot management', 'Facility scheduling', 'Online reservations'],
    href: '/features#booking',
  },
  {
    title: 'CRM & Marketing',
    description: 'Convert leads into members with powerful CRM tools, follow-ups, and WhatsApp marketing.',
    features: ['Lead tracking', 'Automated follow-ups', 'WhatsApp campaigns', 'Conversion analytics'],
    href: '/features#crm',
  },
  {
    title: 'Finance & Reports',
    description: 'Complete financial management with income tracking, expenses, profit reports, and tax compliance.',
    features: ['Income & expense tracking', 'Profit & loss reports', 'Tax reports', 'Financial dashboards'],
    href: '/features#finance',
  },
  {
    title: 'Multi-Center Management',
    description: 'Manage multiple branches with centralized reporting, shared memberships, and organization dashboards.',
    features: ['Branch management', 'Centralized reporting', 'Shared memberships', 'Org-level dashboard'],
    href: '/multi-center',
  },
  {
    title: 'Member Mobile App',
    description: 'Give members a premium mobile experience for attendance, payments, bookings, and workout plans.',
    features: ['Attendance history', 'Payment & renewals', 'Workout & diet plans', 'WhatsApp notifications'],
    href: '/member-app',
  },
]

export function Solutions() {
  return (
    <>
      <SEO
        title="Solutions"
        description="Discover Sportykle solutions for membership, attendance, staff, booking, CRM, finance, multi-center management, and member mobile app."
        keywords="gym solutions, fitness management solutions, sports center software solutions"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Solutions"
            title="Complete Solutions for Your Business"
            subtitle="Whether you run a single gym or a multi-location sports empire, Sportykle has tailored solutions for every operational need."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:border-brand-300 dark:hover:border-brand-700 transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Check size={14} className="text-brand-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={solution.href} className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Not sure which solution fits?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Our team will help you identify the perfect Sportykle configuration for your organization.
          </p>
          <Button href="/book-demo" size="lg">Schedule a Free Consultation</Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
