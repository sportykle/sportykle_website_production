import { useQuery } from '@tanstack/react-query'
import { Check, Loader2, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import customAxios from '@/api/cutomeAxios'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard } from '@/components/ui/PricingCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTASection } from '@/components/ui/CTASection'
import { Button } from '@/components/ui/Button'
import {
  type ApiAddOn,
  type ApiSubscription,
  importantNotes,
  subscriptionDuration,
  toDisplayPlans,
} from '@/data/pricing'
import { pricingFAQ } from '@/data/faq'

async function fetchSubscriptions() {
  const { data } = await customAxios.get<{ results: ApiSubscription[] }>(
    '/administrator/subscription/',
  )
  return data.results
}

async function fetchAddOns() {
  const { data } = await customAxios.get<{ results: ApiAddOn[] }>('/administrator/addon/')
  return data.results
}

export function Pricing() {
  const {
    data: subscriptions,
    isLoading: plansLoading,
    isError: plansError,
    refetch: refetchPlans,
  } = useQuery({
    queryKey: ['pricingPlans'],
    queryFn: fetchSubscriptions,
    refetchOnWindowFocus: false,
  })

  const {
    data: addOns,
    isLoading: addOnsLoading,
    isError: addOnsError,
    refetch: refetchAddOns,
  } = useQuery({
    queryKey: ['pricingAddOns'],
    queryFn: fetchAddOns,
    refetchOnWindowFocus: false,
  })

  const loading = plansLoading || addOnsLoading
  const error = plansError || addOnsError
  const plans = subscriptions ? toDisplayPlans(subscriptions) : []

  if (loading) {
    return (
      <>
        <SEO
          title="Pricing"
          description="Flexible, transparent Sportykle pricing for sports and fitness organizations. Compare Basic, Advanced, Premium, and Professional plans."
        />
        <section className="py-28 lg:py-36 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[360px]">
            <Loader2 className="w-10 h-10 text-brand-600 animate-spin mb-4" />
            <p className="text-slate-600 dark:text-slate-400">Loading pricing plans...</p>
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        <SEO title="Pricing" description="Sportykle pricing plans for fitness and sports organizations." />
        <section className="py-28 lg:py-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 p-8">
              <p className="text-red-600 dark:text-red-400 mb-6">
                Unable to load pricing data. Please try again.
              </p>
              <Button
                onClick={() => {
                  refetchPlans()
                  refetchAddOns()
                }}
                variant="primary"
              >
                <RefreshCw size={16} /> Retry
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO
        title="Pricing"
        description="Flexible Sportykle pricing starting at ₹399/month. Compare Basic, Advanced, Premium, and Professional plans with transparent add-ons."
        keywords="gym software pricing, fitness management software cost, Sportykle pricing India"
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-white to-transparent dark:from-brand-950/40 dark:via-slate-950 dark:to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pricing"
            title="Flexible. Transparent. Scalable."
            subtitle="At Sportykle, we believe in offering the right tools at the right price. Whether you're running a small studio or managing a large sports facility, our plans are designed to grow with you — only pay for what you need, when you need it."
          />
        </div>
      </section>

      {/* Subscription plans */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-bold text-slate-900 dark:text-white mb-10">
            Subscriptions
          </h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-on modules */}
      <section className="py-20 bg-slate-50/80 dark:bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Add-On Modules"
            subtitle="Add features to your subscription as needed with our one-time activation add-ons."
            className="mb-10"
          />
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-brand-50/50 dark:from-slate-800 dark:to-brand-950/30 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-4 px-5 font-semibold text-slate-900 dark:text-white">
                      Feature
                    </th>
                    <th className="text-center py-4 px-5 font-semibold text-slate-900 dark:text-white">
                      Units
                    </th>
                    <th className="text-right py-4 px-5 font-semibold text-slate-900 dark:text-white">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(addOns ?? []).map((addOn: ApiAddOn, index: number) => (
                    <tr
                      key={addOn.id}
                      className={
                        index % 2 === 0
                          ? 'bg-white dark:bg-slate-900'
                          : 'bg-slate-50/80 dark:bg-slate-800/30'
                      }
                    >
                      <td className="py-4 px-5 font-medium text-slate-700 dark:text-slate-300">
                        {addOn.name}
                      </td>
                      <td className="py-4 px-5 text-center text-slate-600 dark:text-slate-400">
                        {addOn.units}
                      </td>
                      <td className="py-4 px-5 text-right font-semibold text-slate-900 dark:text-white">
                        ₹{addOn.price.toFixed(0)}/-
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Duration & notes */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Subscription Duration
              </h3>
              <ul className="space-y-4">
                {subscriptionDuration.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-950">
                      <Check size={12} className="text-brand-600" />
                    </span>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.label}:
                      </span>{' '}
                      {item.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Important Notes
              </h3>
              <ul className="space-y-3">
                {importantNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                  >
                    <span className="text-brand-600 font-bold mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-slate-600 dark:text-slate-400 mt-12 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your organization best and scale effortlessly with Sportykle!{' '}
            <Link to="/contact" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
              Contact our team
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50/80 dark:bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Pricing FAQ" subtitle="Common questions about Sportykle pricing and plans." />
          <FAQAccordion items={pricingFAQ} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
