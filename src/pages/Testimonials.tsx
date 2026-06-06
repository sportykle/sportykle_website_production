import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { CTASection } from '@/components/ui/CTASection'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read success stories from gyms, sports clubs, and wellness centers using Sportykle to grow their business."
        keywords="Sportykle reviews, gym software testimonials, fitness management success stories"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title="Loved by Fitness Leaders"
            subtitle="Don't just take our word for it. Hear from the sports and fitness organizations that trust Sportykle every day."
          />
        </div>
      </section>

      <section className="py-12 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value={500} suffix="+" label="Happy Customers" />
            <StatsCounter value={4} suffix=".9/5" label="Average Rating" />
            <StatsCounter value={35} suffix="%" label="Revenue Growth" />
            <StatsCounter value={94} suffix="%" label="Retention Rate" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <Quote size={32} className="text-brand-200 dark:text-brand-900 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}, {t.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
