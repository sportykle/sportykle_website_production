import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Sportykle privacy policy. Learn how we collect, use, and protect your data." />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader title="Privacy Policy" subtitle="Last updated: June 2026" />
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
            <p>Sportykle ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Information We Collect</h3>
            <p>We collect information you provide directly, including name, email, phone number, organization details, and payment information. We also collect usage data, device information, and cookies to improve our services.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">How We Use Your Information</h3>
            <p>We use collected information to provide and maintain our services, process transactions, send notifications, improve our platform, and comply with legal obligations.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Security</h3>
            <p>We implement enterprise-grade security measures including encryption, access controls, and regular security audits to protect your data.</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Us</h3>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@sportykle.com" className="text-brand-600">privacy@sportykle.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
