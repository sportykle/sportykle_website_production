import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'
import { Button } from '@/components/ui/Button'
import { industries } from '@/data/industries'

export function Industries() {
  return (
    <>
      <SEO
        title="Industries"
        description="Sportykle serves gyms, sports clubs, yoga studios, swimming centers, wellness centers, universities, and more with tailored industry solutions."
        keywords="gym software, sports club management, yoga studio software, swimming center management"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industries"
            title="Built for Every Sports & Fitness Vertical"
            subtitle="Sportykle adapts to your industry's unique challenges with specialized features and workflows."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="scroll-mt-24"
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{industry.icon}</span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{industry.name}</h2>
                      <p className="text-brand-600 font-medium">{industry.tagline}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenges</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((c) => (
                        <li key={c} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    <strong className="text-slate-900 dark:text-white">How Sportykle Helps: </strong>
                    {industry.howSportykleHelps}
                  </p>
                </div>
                <div className={`p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Key Benefits</h4>
                  <ul className="space-y-3 mb-6">
                    {industry.keyBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Check size={16} className="text-brand-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Recommended Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.recommendedFeatures.map((f) => (
                      <span key={f} className="px-3 py-1 text-xs font-medium bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-400 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < industries.length - 1 && <hr className="mt-16 border-slate-200 dark:border-slate-800" />}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-slate-600 dark:text-slate-400 mb-6">Don't see your industry? Sportykle is customizable for any sports and fitness business.</p>
          <Button href="/contact" size="lg">Talk to Our Team <ArrowRight size={18} /></Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
