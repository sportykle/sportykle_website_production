export interface PricingPlan {
  id: string
  name: string
  monthlyPrice: number
  annualPrice: number
  members: number
  popular?: boolean
  features: string[]
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 399,
    annualPrice: 3990,
    members: 100,
    features: [
      'Membership Management',
      'Income & Expense Management',
      'Staff Management',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    monthlyPrice: 499,
    annualPrice: 4990,
    members: 100,
    features: [
      'Membership Management',
      'Income & Expense Management',
      'Staff Management',
      'Diet Management',
      'Training Management',
      'Asset Management',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 599,
    annualPrice: 5990,
    members: 100,
    popular: true,
    features: [
      'Advanced Features',
      'CRM Management',
      'End User Login',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 699,
    annualPrice: 6990,
    members: 100,
    features: [
      'Premium Features',
      'Store Management',
      'Booking Management',
    ],
  },
]

export const featureMatrix = [
  { feature: 'Membership Management', basic: true, advanced: true, premium: true, professional: true },
  { feature: 'Income & Expense', basic: true, advanced: true, premium: true, professional: true },
  { feature: 'Staff Management', basic: true, advanced: true, premium: true, professional: true },
  { feature: 'Diet Management', basic: false, advanced: true, premium: true, professional: true },
  { feature: 'Training Management', basic: false, advanced: true, premium: true, professional: true },
  { feature: 'Asset Management', basic: false, advanced: true, premium: true, professional: true },
  { feature: 'CRM Management', basic: false, advanced: false, premium: true, professional: true },
  { feature: 'End User Login', basic: false, advanced: false, premium: true, professional: true },
  { feature: 'Store Management', basic: false, advanced: false, premium: false, professional: true },
  { feature: 'Booking Management', basic: false, advanced: false, premium: false, professional: true },
]
