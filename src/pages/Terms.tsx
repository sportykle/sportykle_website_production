import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="Sportykle terms of service. Read our terms and conditions for using the platform." />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader title="Terms of Service" subtitle="Last updated: June 2026" />
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
            <p>By accessing or using Sportykle's platform and services, you agree to be bound by these Terms of Service.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Service Description</h3>
            <p>Sportykle provides cloud-based sports, fitness, and wellness management software. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Account Responsibilities</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate information during registration.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Payment Terms</h3>
            <p>Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law. We may change pricing with 30 days notice.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Limitation of Liability</h3>
            <p>Sportykle shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact</h3>
            <p>Questions about these terms? Contact <a href="mailto:legal@sportykle.com" className="text-brand-600">legal@sportykle.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
