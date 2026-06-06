import { motion } from 'framer-motion'
import { MessageSquare, CreditCard, Mail, Smartphone, BarChart3, Cloud } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'

const integrations = [
  { icon: MessageSquare, name: 'WhatsApp Business', category: 'Communication', description: 'Send automated renewal reminders, payment alerts, and promotional messages via WhatsApp.' },
  { icon: Smartphone, name: 'SMS Gateway', category: 'Communication', description: 'Bulk SMS campaigns, OTP verification, and transactional SMS notifications.' },
  { icon: CreditCard, name: 'Payment Gateways', category: 'Payments', description: 'Razorpay, PayU, and other popular Indian payment gateways for seamless online collections.' },
  { icon: Mail, name: 'Email Services', category: 'Communication', description: 'Automated email notifications for invoices, renewals, and marketing campaigns.' },
  { icon: BarChart3, name: 'Google Analytics', category: 'Analytics', description: 'Track website and booking page performance with Google Analytics integration.' },
  { icon: Cloud, name: 'Cloud Storage', category: 'Infrastructure', description: 'Secure cloud storage for member documents, ID cards, and media files.' },
]

export function Integrations() {
  return (
    <>
      <SEO
        title="Integrations"
        description="Sportykle integrations with WhatsApp, SMS, payment gateways, email, and analytics. Connect your fitness business tools seamlessly."
        keywords="gym software integrations, WhatsApp gym integration, fitness payment gateway"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Integrations"
            title="Connect Your Favorite Tools"
            subtitle="Sportykle integrates with the tools you already use, creating a seamless workflow for your sports and fitness business."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{item.name}</h3>
                    <span className="text-xs text-brand-600 font-medium">{item.category}</span>
                  </div>
                </div>
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
