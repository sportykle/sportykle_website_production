export interface FAQItem {
  question: string
  answer: string
}

export const generalFAQ: FAQItem[] = [
  {
    question: 'What is Sportykle?',
    answer:
      'Sportykle is a cloud-based sports, fitness, wellness, and multi-center management platform that helps organizations manage memberships, attendance, staff, finances, bookings, and communications from a single dashboard.',
  },
  {
    question: 'Who can use Sportykle?',
    answer:
      'Sportykle is designed for gyms, sports academies, swimming pools, yoga studios, wellness centers, martial arts centers, dance studios, corporate wellness programs, universities, and multi-location fitness organizations.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes! You can start with a free trial to explore all features before committing to a paid plan. No credit card required to get started.',
  },
  {
    question: 'Can I manage multiple locations?',
    answer:
      'Absolutely. Sportykle offers robust multi-center management with centralized reporting, shared memberships, organization-level dashboards, and branch-level staff management.',
  },
  {
    question: 'Does Sportykle have a mobile app?',
    answer:
      'Yes. Sportykle includes a member mobile app for attendance history, payments, renewals, bookings, workout plans, diet plans, and WhatsApp notifications.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'Sportykle supports automated invoicing, online payment collection, renewal reminders, and integrates with popular payment gateways for seamless billing.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Sportykle uses enterprise-grade security with encrypted data storage, role-based access controls, and regular backups to keep your business data safe and compliant.',
  },
  {
    question: 'Can I migrate from my current system?',
    answer:
      'Yes. Our dedicated support team helps you migrate member data, financial records, and operational workflows with minimal disruption to your business.',
  },
]

export const pricingFAQ: FAQItem[] = [
  {
    question: 'What is included in the 100 member limit?',
    answer:
      'Each plan includes management for up to 100 active members. Additional member capacity can be added as your organization grows.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is annual billing discounted?',
    answer:
      'Annual billing offers significant savings compared to monthly billing, giving you two months free when you pay yearly.',
  },
  {
    question: 'Are there setup fees?',
    answer:
      'No setup fees. All plans include onboarding support to help you get started quickly.',
  },
]
