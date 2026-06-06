import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PolicyContent } from '@/components/ui/PolicyContent'

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Sportykle Privacy Policy. Learn how we collect, use, disclose, and safeguard your information when you use our website and app."
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Last updated: June 2026"
            className="[&_h2]:text-2xl md:[&_h2]:text-3xl [&_p]:text-sm"
          />
          <PolicyContent
            sections={[
              {
                title: 'Introduction',
                content: (
                  <p>
                    At Sportykle (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;Company&quot;), we are committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                    website or use our app. Please read this policy carefully to understand our practices regarding your information.
                  </p>
                ),
              },
              {
                title: 'Information We Collect',
                content: (
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-slate-900 dark:text-white">Personal Data:</strong> We may collect personally identifiable
                      information, such as your name, email address, phone number, and payment details, when you register on our
                      website, subscribe to our services, or contact us for support.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Non-Personal Data:</strong> We may collect non-personal
                      information about your visit to our website or use of our app, including your IP address, browser type, device
                      information, and usage data.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Cookies and Tracking Technologies:</strong> We use cookies and
                      similar tracking technologies to monitor user activity, improve our services, and provide a personalized
                      experience. You can control cookie preferences through your browser settings.
                    </li>
                  </ol>
                ),
              },
              {
                title: 'How We Use Your Information',
                content: (
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-slate-900 dark:text-white">To Provide and Improve Services:</strong> We use your
                      information to provide, maintain, and improve our services, process transactions, and manage your account.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">To Communicate with You:</strong> We use your contact
                      information to respond to inquiries, send service-related announcements, and provide updates or promotional
                      materials.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">For Analytics and Personalization:</strong> We analyze usage
                      data to understand user preferences and trends, which helps us enhance and personalize your experience.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">To Ensure Security:</strong> We use your information to monitor
                      and ensure the security of our website and app, detect and prevent fraudulent activities, and comply with legal
                      obligations.
                    </li>
                  </ol>
                ),
              },
              {
                title: 'Sharing Your Information',
                content: (
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong className="text-slate-900 dark:text-white">With Service Providers:</strong> We may share your
                      information with third-party service providers who assist us in operating our website, conducting business, or
                      servicing you, under strict confidentiality agreements.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">For Legal Reasons:</strong> We may disclose your information if
                      required by law, in response to a subpoena or court order, or to protect our rights, property, or safety and that
                      of our users or others.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">Business Transfers:</strong> In the event of a merger,
                      acquisition, or sale of assets, your information may be transferred to the new owner as part of the business
                      assets.
                    </li>
                  </ol>
                ),
              },
              {
                title: 'Data Security',
                content: (
                  <p>
                    We implement appropriate technical and organizational measures to protect your information against unauthorized
                    access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot
                    guarantee the absolute security of your data.
                  </p>
                ),
              },
              {
                title: 'Data Retention',
                content: (
                  <p>
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy
                    Policy or as required by law. Once the retention period expires, we will securely delete or anonymize your
                    information.
                  </p>
                ),
              },
              {
                title: 'Your Rights',
                content: (
                  <p>
                    You have the right to access, correct, update, or delete your personal information. You can manage your account
                    settings through our website or app, or contact us directly for assistance. You also have the right to withdraw
                    your consent for data processing at any time.
                  </p>
                ),
              },
              {
                title: 'Changes to This Privacy Policy',
                content: (
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We
                    will notify you of significant changes by posting the new policy on our website and app. Your continued use of our
                    services after such changes constitutes your acceptance of the revised policy.
                  </p>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
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
