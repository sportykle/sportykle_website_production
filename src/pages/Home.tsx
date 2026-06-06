import { motion } from 'framer-motion'
import {
  TrendingUp, PiggyBank, Heart, Cloud, Layers, CreditCard,
  Megaphone, Settings, BarChart3, Users, Zap, ArrowRight,
} from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DashboardMockup } from '@/components/ui/DashboardMockup'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { CTASection } from '@/components/ui/CTASection'
import { whySportykleBenefits, automationItems } from '@/data/features'
import { testimonials } from '@/data/testimonials'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const benefitIcons: Record<string, typeof TrendingUp> = {
  'trending-up': TrendingUp,
  'piggy-bank': PiggyBank,
  heart: Heart,
  cloud: Cloud,
  layers: Layers,
  'credit-card': CreditCard,
  megaphone: Megaphone,
  settings: Settings,
  'bar-chart': BarChart3,
  users: Users,
}

export function Home() {
  return (
    <>
      <SEO
        title="Automate Your Sports & Fitness Center Management"
        description="Sportykle helps sports academies, gyms, swimming pools, yoga studios, and wellness centers manage memberships, attendance, staff, finances, and bookings from one platform."
        keywords="sports management software, gym management, fitness center software, membership management, attendance tracking, India"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-brand-600 bg-brand-50 dark:bg-brand-950 dark:text-brand-400 rounded-full">
                #1 Sports & Fitness Management Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Automate Your Sports & Fitness{' '}
                <span className="text-gradient">Center Management</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Manage memberships, attendance, staff, payroll, finances, bookings, communications, and multiple locations from a single powerful platform.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-500 mb-8 leading-relaxed">
                Sportykle helps sports academies, gyms, swimming pools, yoga studios, wellness centers, fitness clubs, and multi-sports organizations streamline operations, increase revenue, improve member retention, and scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/book-demo" size="lg">
                  Start Free Trial <ArrowRight size={20} />
                </Button>
                <Button href="/book-demo" variant="outline" size="lg">
                  Book Demo
                </Button>
              </div>
            </motion.div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={500} suffix="+" label="Fitness Centers" />
            <StatsCounter value={50000} suffix="+" label="Members Managed" />
            <StatsCounter value={35} suffix="%" label="Avg. Revenue Growth" />
            <StatsCounter value={99} suffix="%" label="Uptime Guarantee" />
          </div>
        </div>
      </section>

      {/* Why Sportykle */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Sportykle"
            title="Everything You Need to Grow Your Business"
            subtitle="From revenue optimization to member retention, Sportykle provides the tools your sports and fitness organization needs to thrive."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whySportykleBenefits.map((benefit, i) => {
              const Icon = benefitIcons[benefit.icon] || TrendingUp
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Automation"
                title="Put Your Operations on Autopilot"
                subtitle="Save hours every week with intelligent automation that handles repetitive tasks so you can focus on growing your business."
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {automationItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-950 flex items-center justify-center">
                      <Zap size={16} className="text-brand-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white"
            >
              <Zap size={48} className="mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-3">Smart Automation Engine</h3>
              <p className="text-brand-100 mb-6 leading-relaxed">
                Configure automated workflows for renewals, reminders, onboarding, and campaigns. Set it once and let Sportykle handle the rest.
              </p>
              <Button href="/features" variant="secondary">
                Explore Features <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Success Stories"
            title="Trusted by Fitness Leaders"
            subtitle="See how sports and fitness organizations across India are transforming their operations with Sportykle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-950 flex items-center justify-center text-brand-700 dark:text-brand-400 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
              View All Testimonials <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Member App', desc: 'Empower members with a powerful mobile experience.', href: '/member-app' },
              { title: 'Multi-Center Management', desc: 'Manage all your branches from one dashboard.', href: '/multi-center' },
              { title: 'Integrations', desc: 'Connect with WhatsApp, SMS, payments, and more.', href: '/integrations' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
