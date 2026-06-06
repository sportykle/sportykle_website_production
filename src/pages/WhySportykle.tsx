import { motion } from 'framer-motion'
import { Check, X, Shield, Headphones, BarChart3, Layers, Smartphone, MessageSquare, Lock, Sparkles, Heart, Globe } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'
import { comparisonFeatures } from '@/data/features'

const trustPoints = [
  { icon: Layers, title: 'Comprehensive Features', description: 'All-in-one management platform covering every aspect of your sports and fitness business.' },
  { icon: Heart, title: 'User Friendly Interface', description: 'Intuitive design that your team can learn in minutes, not weeks.' },
  { icon: Headphones, title: 'Reliable Support', description: 'Dedicated support team available to help you succeed every step of the way.' },
  { icon: Sparkles, title: 'Customizable Solutions', description: 'Adaptable to any business model, from single studios to multi-location chains.' },
  { icon: Shield, title: 'Secure & Compliant', description: 'Enterprise-grade security with encrypted data and role-based access controls.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Actionable business insights with live dashboards and comprehensive reports.' },
  { icon: Globe, title: 'Scalable Platform', description: 'Supports single-location studios and multi-center organizations seamlessly.' },
  { icon: Sparkles, title: 'Proven Success', description: 'Trusted by hundreds of sports and fitness businesses across India.' },
  { icon: Sparkles, title: 'Innovative Technology', description: 'Modern cloud architecture built for performance, reliability, and growth.' },
  { icon: Heart, title: 'Customer-Centric Design', description: 'Every feature built around real user needs and feedback from the fitness industry.' },
]

const differentiators = [
  { icon: Layers, title: 'All-In-One Platform', description: 'No need for multiple tools. Membership, attendance, finance, CRM, booking, and more — all in one place.' },
  { icon: Smartphone, title: 'Mobile & Web Access', description: 'Manage your business from anywhere with responsive web dashboard and member mobile app included.' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'Make data-driven decisions with live revenue, attendance, and retention dashboards.' },
  { icon: MessageSquare, title: 'Seamless Communication', description: 'WhatsApp and SMS integration for automated reminders, announcements, and campaigns.' },
  { icon: Heart, title: 'Enhanced Member Experience', description: 'Member app with workout plans, diet tracking, bookings, and payment management.' },
  { icon: Globe, title: 'Multi-Center Management', description: 'Centralized control over multiple branches with shared memberships and org-level reporting.' },
  { icon: Layers, title: 'Multi-Sports Management', description: 'Manage cricket, football, swimming, yoga, and more under a single platform.' },
  { icon: Lock, title: 'Security', description: 'Bank-grade encryption, automated backups, and compliance-ready infrastructure.' },
  { icon: Headphones, title: 'Dedicated Support', description: 'Onboarding assistance, training, and ongoing support from fitness industry experts.' },
]

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={20} className="inline text-brand-500" />
  if (value === 'limited') return <span className="text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">Limited</span>
  if (value === 'rare') return <span className="text-xs font-medium text-red-600 bg-red-50 dark:bg-red-950 px-2 py-0.5 rounded">Rare</span>
  if (value === 'extra') return <span className="text-xs font-medium text-red-600 bg-red-50 dark:bg-red-950 px-2 py-0.5 rounded">Extra Cost</span>
  return <X size={20} className="inline text-slate-300 dark:text-slate-600" />
}

export function WhySportykle() {
  return (
    <>
      <SEO
        title="Why Sportykle"
        description="Discover why Sportykle is the leading sports and fitness management platform. Comprehensive features, reliable support, and proven success."
        keywords="why Sportykle, best gym management software, fitness software comparison"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Trust Sportykle"
            title="The Platform Fitness Leaders Trust"
            subtitle="Built for sports and fitness organizations that demand excellence in every aspect of their operations."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center mx-auto mb-3">
                  <point.icon size={22} className="text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{point.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What Sets Us Apart"
            title="Sportykle vs. The Competition"
            subtitle="See how Sportykle compares against other fitness management platforms."
          />
          <div className="overflow-x-auto max-w-3xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-600">Sportykle</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-500">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 dark:border-slate-800/50">
                    <td className="py-3 px-4 text-sm text-slate-700 dark:text-slate-300 font-medium">{row.feature}</td>
                    <td className="text-center py-3 px-4"><ComparisonCell value={row.sportykle} /></td>
                    <td className="text-center py-3 px-4"><ComparisonCell value={row.others} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Organizations Choose Sportykle" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
