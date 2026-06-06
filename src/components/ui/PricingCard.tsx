import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from './Button'
import type { PricingPlan } from '@/data/pricing'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  plan: PricingPlan
  isAnnual: boolean
  index?: number
}

export function PricingCard({ plan, isAnnual, index = 0 }: PricingCardProps) {
  const price = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'relative p-8 rounded-2xl border bg-white dark:bg-slate-900 transition-all duration-300',
        plan.popular
          ? 'border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02]'
          : 'border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700',
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
          <Star size={12} fill="currentColor" /> MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">₹{price}</span>
        <span className="text-slate-500 dark:text-slate-400">/month</span>
        {isAnnual && (
          <p className="text-xs text-brand-600 mt-1">Billed annually at ₹{plan.annualPrice}</p>
        )}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Up to {plan.members} members</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Check size={16} className="text-brand-500 shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="/book-demo"
        variant={plan.popular ? 'primary' : 'outline'}
        className="w-full"
      >
        Start Free Trial
      </Button>
    </motion.div>
  )
}
