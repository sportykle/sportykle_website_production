import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { CTASection } from '@/components/ui/CTASection'
import { featureCategories } from '@/data/features'

export function Features() {
  return (
    <>
      <SEO
        title="Features"
        description="Explore Sportykle's comprehensive features including membership management, attendance tracking, finance, staff, booking, CRM, and more."
        keywords="gym features, membership management, attendance tracking, fitness software features"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Features"
            title="Powerful Features for Every Need"
            subtitle="From membership management to advanced analytics, Sportykle provides everything you need to run a successful sports and fitness organization."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCategories.map((category, i) => (
              <div key={category.id} id={category.id}>
                <FeatureCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  items={category.items}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
