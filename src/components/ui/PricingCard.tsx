import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from './Button'
import type { PricingPlanDisplay } from '@/data/pricing'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  plan: PricingPlanDisplay
  index?: number
}

export function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        'relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 h-full',
        plan.popular
          ? 'border-brand-500 shadow-2xl shadow-brand-500/15 ring-1 ring-brand-500/20 lg:scale-[1.03]'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg',
      )}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand-600 text-white text-[11px] font-bold rounded-full flex items-center gap-1 shadow-md">
          <Star size={11} fill="currentColor" /> MOST POPULAR
        </div>
      )}

      <div
        className={cn(
          'px-6 pt-8 pb-5 text-center',
          plan.popular
            ? 'bg-gradient-to-br from-brand-50 via-emerald-50/80 to-brand-100/60 dark:from-brand-950/60 dark:via-slate-900 dark:to-emerald-950/30'
            : 'bg-slate-50/80 dark:bg-slate-800/40',
        )}
      >
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            ₹{plan.monthlyPrice.toFixed(0)}
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-lg">/month</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-6 py-6 bg-white dark:bg-slate-900">
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-5 min-h-[40px] leading-relaxed">
          {plan.description}
        </p>

        {plan.includesNote && (
          <p className="text-sm font-semibold text-brand-700 dark:text-brand-400 mb-3">
            {plan.includesNote}
          </p>
        )}

        <ul className="space-y-3 flex-grow mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <span
                className={cn(
                  'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  plan.popular ? 'bg-brand-100 dark:bg-brand-950' : 'bg-slate-100 dark:bg-slate-800',
                )}
              >
                <Check
                  size={12}
                  className={plan.popular ? 'text-brand-600' : 'text-slate-600 dark:text-slate-400'}
                />
              </span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href={plan.ctaHref}
          variant={plan.popular ? 'primary' : 'outline'}
          className="w-full mt-auto"
        >
          {plan.cta}
        </Button>
      </div>
    </motion.div>
  )
}
