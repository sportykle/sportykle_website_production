import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '', organization: '', phone: '', email: '', members: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! Our team will contact you within 24 hours.')
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Sportykle. Schedule a demo, call us, or send a message. We're here to help your sports and fitness business grow."
        keywords="contact Sportykle, gym software demo, fitness management support"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Contact"
            title="Let's Talk About Your Business"
            subtitle="Whether you need a demo, have questions, or want to discuss your requirements — we're here to help."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Organization *</label>
                  <input
                    required
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    placeholder="Your organization name"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                    placeholder="you@organization.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Number of Members</label>
                <select
                  value={formData.members}
                  onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select range</option>
                  <option value="1-50">1 - 50</option>
                  <option value="51-100">51 - 100</option>
                  <option value="101-500">101 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg">Schedule Demo</Button>
                <Button href="https://wa.me/917351001002" external variant="outline" size="lg">
                  <MessageCircle size={18} /> WhatsApp Us
                </Button>
                <Button href="tel:+917351001002" variant="outline" size="lg">
                  <Phone size={18} /> Call Us
                </Button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: Mail, title: 'Email', value: 'hello@sportykle.com', href: 'mailto:hello@sportykle.com' },
                { icon: Phone, title: 'Phone', value: '+91 73510 01002', href: 'tel:+917351001002' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950 flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-brand-600 hover:underline">{item.value}</a>
                  ) : (
                    <p className="text-slate-600 dark:text-slate-400">{item.value}</p>
                  )}
                </div>
              ))}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                <h3 className="font-bold text-lg mb-2">Need a Quick Demo?</h3>
                <p className="text-brand-100 text-sm mb-4">Book a personalized 30-minute demo and see Sportykle in action.</p>
                <Button href="/book-demo" variant="secondary" size="sm">Book Demo Now</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
