import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { CTASection } from '@/components/ui/CTASection'

const values = [
  { icon: Target, title: 'Mission', description: 'Empower every sports and fitness organization with technology that simplifies operations, increases revenue, and enhances member experiences.' },
  { icon: Eye, title: 'Vision', description: 'To be the global leader in sports and fitness management technology, setting the standard for innovation and customer success.' },
  { icon: Heart, title: 'Values', description: 'Customer-first innovation, relentless reliability, and a deep understanding of the sports and fitness industry.' },
]

const milestones = [
  { year: '2020', event: 'Sportykle founded in Kochi, Kerala' },
  { year: '2021', event: 'Launched multi-center management' },
  { year: '2022', event: 'Reached 100+ fitness centers' },
  { year: '2023', event: 'Member mobile app released' },
  { year: '2024', event: 'WhatsApp integration & CRM launched' },
  { year: '2025', event: '500+ organizations onboarded' },
  { year: '2026', event: 'Expanding to global markets' },
]

export function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sportykle — the leading cloud-based sports, fitness, and wellness management platform built in India for global markets."
        keywords="about Sportykle, sports management company, fitness technology India"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About Us"
            title="Building the Future of Sports & Fitness Management"
            subtitle="Sportykle was born from a simple idea: sports and fitness organizations deserve world-class technology to manage their operations and grow their businesses."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Founded in Kochi, Kerala, Sportykle started as a solution to the everyday challenges faced by gym owners, sports academy directors, and wellness center managers. Spreadsheets, paper registers, and disconnected tools were holding businesses back.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Today, Sportykle powers hundreds of organizations across India — from single-location yoga studios to multi-branch fitness chains — with a comprehensive cloud platform that handles everything from membership management to multi-center reporting.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our team of engineers, designers, and fitness industry experts work tirelessly to build technology that not only solves operational challenges but actively helps organizations increase revenue, improve retention, and scale efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={500} suffix="+" label="Organizations" />
            <StatsCounter value={50} suffix="K+" label="Members Managed" />
            <StatsCounter value={12} suffix="+" label="Sports Supported" />
            <StatsCounter value={5} suffix="+" label="Countries" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Journey" subtitle="Key milestones in the Sportykle story." />
          <div className="max-w-2xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {m.year}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
