import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTASection } from '@/components/ui/CTASection'
import { generalFAQ } from '@/data/faq'

export function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about Sportykle sports and fitness management platform. Learn about features, pricing, support, and more."
        keywords="Sportykle FAQ, gym software questions, fitness management help"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Sportykle. Can't find your answer? Contact our team."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={generalFAQ} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
