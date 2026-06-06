export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Owner',
    organization: 'FitZone Gym, Bangalore',
    content: 'Sportykle transformed how we manage our 3 gym locations. Membership renewals are now automated, and our revenue increased by 35% in the first year.',
    rating: 5,
    avatar: 'RK',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Director',
    organization: 'AquaSplash Swimming Academy',
    content: 'The QR attendance and booking system saved us hours every day. Parents love the WhatsApp notifications, and our staff can focus on coaching.',
    rating: 5,
    avatar: 'PS',
  },
  {
    id: '3',
    name: 'Arun Menon',
    role: 'Founder',
    organization: 'Champions Sports Club, Kochi',
    content: 'Managing cricket, football, and badminton under one platform was a game-changer. Sportykle\'s multi-sports management is unmatched in India.',
    rating: 5,
    avatar: 'AM',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    role: 'Studio Manager',
    organization: 'ZenFlow Yoga Studio',
    content: 'From class scheduling to member engagement, everything is seamless. The member app has significantly improved our retention rates.',
    rating: 5,
    avatar: 'SP',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'CEO',
    organization: 'Elite Fitness Chain',
    content: 'We scaled from 2 to 12 locations with Sportykle. The centralized dashboard gives us real-time visibility across all branches.',
    rating: 5,
    avatar: 'VS',
  },
  {
    id: '6',
    name: 'Meera Nair',
    role: 'Operations Head',
    organization: 'Wellness Hub Kerala',
    content: 'The CRM and automated follow-ups helped us convert 60% more leads. Sportykle pays for itself within the first month.',
    rating: 5,
    avatar: 'MN',
  },
]
