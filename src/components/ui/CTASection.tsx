import { motion } from 'framer-motion'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = 'Ready to Transform Your Sports & Fitness Business?',
  subtitle = 'Join thousands of fitness centers, sports academies, and wellness organizations that trust Sportykle to grow their business.',
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-demo" variant="secondary" size="lg">
                Start Free Trial <ArrowRight size={20} />
              </Button>
              <Button href="/book-demo" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
