import { motion } from 'framer-motion'
import { Building2, BarChart3, Users, Wallet, UserCog, LayoutDashboard, Check } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { CTASection } from '@/components/ui/CTASection'

const features = [
  {
    icon: Building2,
    title: 'Manage Multiple Branches',
    description: 'Add unlimited branches and manage each location independently while maintaining organizational oversight.',
  },
  {
    icon: BarChart3,
    title: 'Centralized Reporting',
    description: 'View consolidated reports across all branches — revenue, attendance, memberships, and staff performance.',
  },
  {
    icon: Users,
    title: 'Shared Memberships',
    description: 'Offer memberships that work across multiple locations, increasing member flexibility and satisfaction.',
  },
  {
    icon: Wallet,
    title: 'Centralized Finance',
    description: 'Track income, expenses, and profitability at both branch and organization levels with unified financial dashboards.',
  },
  {
    icon: UserCog,
    title: 'Staff Management Across Branches',
    description: 'Manage staff attendance, payroll, and performance across all locations from a single interface.',
  },
  {
    icon: LayoutDashboard,
    title: 'Organization-Level Dashboard',
    description: 'Get a bird\'s-eye view of your entire organization with real-time KPIs, alerts, and actionable insights.',
  },
]

export function MultiCenter() {
  return (
    <>
      <SEO
        title="Multi-Center Management"
        description="Manage multiple gym and fitness center branches with Sportykle. Centralized reporting, shared memberships, and organization-level dashboards."
        keywords="multi-center gym management, multi-location fitness software, branch management"
      />

      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Multi-Center"
                title="Scale Your Empire from One Dashboard"
                subtitle="Whether you have 2 locations or 20, Sportykle gives you complete control over every branch while maintaining centralized visibility."
                centered={false}
              />
              <ul className="space-y-3">
                {['Unlimited branches', 'Real-time cross-branch analytics', 'Role-based branch access', 'Franchise-ready architecture'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Check size={16} className="text-brand-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Multi-Center Capabilities" subtitle="Everything you need to manage a growing fitness organization." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Scale Across Locations?" />
    </>
  )
}
