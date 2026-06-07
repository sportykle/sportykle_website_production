export const PLAN_ORDER = ['Basic', 'Advanced', 'Premium', 'Professional'] as const

export type PlanType = (typeof PLAN_ORDER)[number]

export interface ApiSubscription {
  id: number
  subscription_type: PlanType | string
  monthly: string
  quarterly: string
  half_yearly: string
  yearly: string
  module_names: string[]
}

export interface ApiAddOn {
  id: number
  name: string
  units: number
  price: number
}

export interface PricingPlanDisplay {
  id: number
  name: PlanType
  monthlyPrice: number
  description: string
  popular?: boolean
  includesNote?: string
  features: string[]
  cta: string
  ctaHref: string
}

export const planDescriptions: Record<PlanType, string> = {
  Basic: 'Perfect for small studios starting with essential management tools.',
  Advanced: 'Ideal for growing organizations needing diet and training tools.',
  Premium: 'Great for businesses requiring user login and CRM features.',
  Professional: 'Best for large facilities with booking and store management.',
}

export const includesNotes: Partial<Record<PlanType, string>> = {
  Advanced: 'Everything in Basic, plus:',
  Premium: 'Everything in Advanced, plus:',
  Professional: 'Everything in Basic, Advanced & Premium, plus:',
}

export const subscriptionDuration = [
  { label: 'Initial Subscription', value: '6 Months' },
  { label: 'Renewals', value: '3 Months (No monthly plan)' },
]

export const importantNotes = [
  'Additions will be added to the main package and priced accordingly.',
  'Additions can be removed at any time.',
  'The changes will be reflected from the next renewal.',
  "All additions follow the main package's expiry; they do not have separate expiries.",
]

export function sortPlans(plans: ApiSubscription[]): ApiSubscription[] {
  return PLAN_ORDER.map((name) =>
    plans.find((plan) => plan.subscription_type === name),
  ).filter((plan): plan is ApiSubscription => Boolean(plan))
}

export function getIncrementalFeatures(
  planType: PlanType,
  sortedPlans: ApiSubscription[],
): string[] {
  const index = sortedPlans.findIndex((plan) => plan.subscription_type === planType)
  if (index < 0) return []
  if (index === 0) return sortedPlans[0].module_names

  const current = sortedPlans[index].module_names
  const previous = sortedPlans[index - 1].module_names
  return current.filter((feature) => !previous.includes(feature))
}

export function toDisplayPlans(plans: ApiSubscription[]): PricingPlanDisplay[] {
  const sorted = sortPlans(plans)

  return sorted.map((plan) => {
    const name = plan.subscription_type as PlanType
    const isProfessional = name === 'Professional'

    return {
      id: plan.id,
      name,
      monthlyPrice: parseFloat(plan.monthly),
      description: planDescriptions[name],
      popular: name === 'Premium',
      includesNote: includesNotes[name],
      features: getIncrementalFeatures(name, sorted),
      cta: isProfessional ? 'Contact Sales' : 'Get Started',
      ctaHref: isProfessional ? '/contact' : '/signup',
    }
  })
}
