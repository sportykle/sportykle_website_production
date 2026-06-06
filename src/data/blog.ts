export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'increase-gym-member-retention',
    title: '10 Proven Strategies to Increase Gym Member Retention in 2026',
    excerpt: 'Discover actionable strategies that top fitness centers use to keep members engaged, reduce churn, and build lasting loyalty.',
    category: 'Member Engagement',
    author: 'Sportykle Team',
    date: '2026-05-15',
    readTime: '8 min read',
    image: 'retention',
  },
  {
    id: '2',
    slug: 'multi-center-management-guide',
    title: 'The Complete Guide to Multi-Center Fitness Management',
    excerpt: 'Learn how to efficiently manage multiple gym locations with centralized reporting, shared memberships, and branch-level control.',
    category: 'Operations',
    author: 'Sportykle Team',
    date: '2026-05-08',
    readTime: '12 min read',
    image: 'multi-center',
  },
  {
    id: '3',
    slug: 'whatsapp-marketing-fitness',
    title: 'WhatsApp Marketing for Fitness Centers: A Complete Playbook',
    excerpt: 'Harness the power of WhatsApp to send renewal reminders, promote classes, and engage members with personalized messages.',
    category: 'Marketing',
    author: 'Sportykle Team',
    date: '2026-04-28',
    readTime: '6 min read',
    image: 'whatsapp',
  },
  {
    id: '4',
    slug: 'digital-transformation-sports-academies',
    title: 'Digital Transformation for Sports Academies: Where to Start',
    excerpt: 'Move beyond spreadsheets and paper registers. A step-by-step guide to digitizing your sports academy operations.',
    category: 'Digital Transformation',
    author: 'Sportykle Team',
    date: '2026-04-20',
    readTime: '10 min read',
    image: 'digital',
  },
  {
    id: '5',
    slug: 'automate-membership-renewals',
    title: 'How to Automate Membership Renewals and Never Miss Revenue',
    excerpt: 'Stop losing revenue to expired memberships. Set up automated renewal workflows that work while you sleep.',
    category: 'Revenue',
    author: 'Sportykle Team',
    date: '2026-04-12',
    readTime: '7 min read',
    image: 'renewals',
  },
  {
    id: '6',
    slug: 'choosing-fitness-management-software',
    title: 'How to Choose the Right Fitness Management Software in India',
    excerpt: 'A comprehensive comparison guide to help you evaluate fitness management platforms and make the right choice for your business.',
    category: 'Buyers Guide',
    author: 'Sportykle Team',
    date: '2026-04-05',
    readTime: '15 min read',
    image: 'guide',
  },
]
