import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PolicyContent } from '@/components/ui/PolicyContent'

export function RefundPolicy() {
  return (
    <>
      <SEO
        title="Return and Refund Policy"
        description="Sportykle return and refund policy. All sales are final. Review our policy before confirming your purchase."
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Return and Refund Policy"
            subtitle="Last updated: June 2026"
            className="[&_h2]:text-2xl md:[&_h2]:text-3xl [&_p]:text-sm"
          />
          <PolicyContent
            sections={[
              {
                title: 'Introduction',
                content: (
                  <p>
                    Thank you for choosing Sportykle! We appreciate your trust in our services. Please review our return and refund
                    policy outlined below.
                  </p>
                ),
              },
              {
                title: 'No Returns or Refunds',
                content: (
                  <p>
                    At Sportykle, we strive to provide the highest quality service and support for your sports and fitness center
                    management needs. Due to the nature of our software and services, all sales are final. Please review your order
                    carefully before confirming your purchase. We do not offer returns or refunds for any purchases or subscriptions.
                  </p>
                ),
              },
              {
                title: 'Policy Overview',
                content: (
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-slate-900 dark:text-white">Final Sales:</strong> All purchases and subscriptions made
                      through Sportykle are non-refundable and non-returnable. This applies to all plans, including Basic, Advanced,
                      Premium, and Professional.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Service Commitment:</strong> We are committed to delivering
                      reliable, high-quality software and dedicated customer support. If you experience any issues with our services,
                      please contact our support team at{' '}
                      <a href="mailto:support@sportykle.com" className="text-brand-600 hover:underline">support@sportykle.com</a>
                      {' '}or call{' '}
                      <a href="tel:+917351001002" className="text-brand-600 hover:underline">+91 7351001002</a>
                      {' '}and we will work with you to resolve them promptly.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Subscription Renewals:</strong> Subscriptions renew
                      automatically unless cancelled before the renewal date. Cancellation prevents future charges but does not
                      entitle you to a refund for the current billing period.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Free Trial:</strong> We encourage you to use our free trial
                      to evaluate Sportykle before purchasing a subscription. Trial usage does not guarantee a refund after
                      conversion to a paid plan.
                    </li>
                  </ol>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <p>
                    For questions about this policy, contact us at{' '}
                    <a href="mailto:support@sportykle.com" className="text-brand-600 hover:underline">support@sportykle.com</a>
                    {' '}or call{' '}
                    <a href="tel:+917351001002" className="text-brand-600 hover:underline">+91 7351001002</a>.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
