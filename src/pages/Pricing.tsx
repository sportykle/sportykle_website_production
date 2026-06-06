import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard } from '@/components/ui/PricingCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTASection } from '@/components/ui/CTASection'
import { pricingPlans, featureMatrix } from '@/data/pricing'
import { pricingFAQ } from '@/data/faq'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <SEO
        title="Pricing"
        description="Affordable Sportykle pricing plans starting at ₹399/month. Choose Basic, Advanced, Premium, or Professional plans for your fitness center."
        keywords="gym software pricing, fitness management software cost, Sportykle pricing India"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that fits your organization. All plans include up to 100 members with no hidden fees."
          />
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn('text-sm font-medium', !isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500')}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                'relative w-14 h-7 rounded-full transition-colors',
                isAnnual ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700',
              )}
            >
              <div className={cn(
                'absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform',
                isAnnual ? 'translate-x-7' : 'translate-x-0.5',
              )} />
            </button>
            <span className={cn('text-sm font-medium', isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500')}>
              Annual <span className="text-brand-600 text-xs font-bold">Save 17%</span>
            </span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Feature Comparison" subtitle="Compare plans side by side to find the perfect fit." />
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">Feature</th>
                  {['Basic', 'Advanced', 'Premium', 'Professional'].map((p) => (
                    <th key={p} className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr key={row.feature} className="border-b border-slate-100 dark:border-slate-800/50">
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.feature}</td>
                    {[row.basic, row.advanced, row.premium, row.professional].map((val, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {val ? (
                          <Check size={18} className="inline text-brand-500" />
                        ) : (
                          <X size={18} className="inline text-slate-300 dark:text-slate-600" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Pricing FAQ" subtitle="Common questions about Sportykle pricing and plans." />
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
