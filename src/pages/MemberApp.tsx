import { motion } from 'framer-motion'
import { Check, Smartphone, Bell, CreditCard, Calendar, Dumbbell, MessageSquare, User } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { AppScreenshot } from '@/components/ui/AppScreenshot'
import { LoginPreview } from '@/components/ui/LoginPreview'
import { CTASection } from '@/components/ui/CTASection'
import { Button } from '@/components/ui/Button'
import dashboardWeb from '@/assets/images/dashboard-web.png'

const appFeatures = [
  { icon: Calendar, title: 'Attendance History', description: 'View complete attendance records and track gym visit patterns.' },
  { icon: CreditCard, title: 'Payment History', description: 'Access payment records, invoices, and upcoming dues in one place.' },
  { icon: Check, title: 'Membership Renewal', description: 'Renew memberships instantly with secure online payment.' },
  { icon: Bell, title: 'WhatsApp Notifications', description: 'Receive renewal reminders, class updates, and announcements.' },
  { icon: Calendar, title: 'Booking Management', description: 'Book courts, classes, and training sessions on the go.' },
  { icon: Dumbbell, title: 'Workout Plans', description: 'Follow personalized workout programs assigned by trainers.' },
  { icon: Dumbbell, title: 'Diet Plans', description: 'Track nutrition with customized diet plans and meal schedules.' },
  { icon: MessageSquare, title: 'Messaging', description: 'Communicate with trainers and staff directly through the app.' },
  { icon: User, title: 'Profile Management', description: 'Update personal details, preferences, and membership info.' },
]

export function MemberApp() {
  return (
    <>
      <SEO
        title="Member App"
        description="Sportykle member mobile app for attendance, payments, bookings, workout plans, diet plans, and WhatsApp notifications."
        keywords="gym member app, fitness mobile app, member portal"
      />

      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Member App"
                title="Your Members Deserve a Premium App Experience"
                subtitle="The Sportykle member app puts the power of your fitness center in every member's pocket — increasing engagement and retention."
                centered={false}
              />
              <div className="flex items-center gap-3 mb-8">
                <Smartphone size={20} className="text-brand-600" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Available on Android & iOS · Included free with Premium plans</span>
              </div>
              <Button href="/book-demo" size="lg">Get Started</Button>
            </div>
            <PhoneMockup variant="splash" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="App Features" subtitle="Everything your members need, beautifully designed." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-4">
                  <feature.icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="App Screenshots"
            title="Web & Mobile — One Connected Platform"
            subtitle="Manage your center on the web dashboard and empower members with a beautiful mobile app."
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <PhoneMockup variant="splash" />
            <PhoneMockup variant="login" />
            <PhoneMockup variant="menu" />
          </div>
          <div className="mb-16">
            <AppScreenshot
              src={dashboardWeb}
              alt="Sportykle web dashboard"
              frame="browser"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Designed for Engagement</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Members who use the Sportykle app visit 2x more frequently and renew at higher rates. Push notifications, workout tracking, and easy payments keep them connected to your brand.
              </p>
              <ul className="space-y-3">
                {['Increase member retention by 40%', 'Reduce front-desk workload', 'Enable self-service renewals', 'Boost class attendance'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Check size={16} className="text-brand-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <LoginPreview />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
