import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Calendar, Video } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

const demoBenefits = [
  'Personalized walkthrough of Sportykle',
  'See features relevant to your business',
  'Get pricing recommendations',
  'Q&A with our product experts',
  'Free trial setup assistance',
  'No commitment required',
]

export function BookDemo() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', members: '', date: '', time: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo booked successfully! Our team will confirm your appointment via email.')
  }

  return (
    <>
      <SEO
        title="Book Demo"
        description="Schedule a free personalized demo of Sportykle. See how our sports and fitness management platform can transform your business."
        keywords="Sportykle demo, gym software demo, fitness management trial"
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                badge="Book Demo"
                title="See Sportykle in Action"
                subtitle="Schedule a free 30-minute personalized demo and discover how Sportykle can transform your sports and fitness business."
                centered={false}
              />
              <ul className="space-y-3 mb-8">
                {demoBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-brand-600" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800">
                <Video size={24} className="text-brand-600 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Live Video Demo</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">30 min · Google Meet / Zoom</p>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar size={22} className="text-brand-600" /> Schedule Your Demo
              </h3>
              {[
                { key: 'name', label: 'Full Name', type: 'text', required: true },
                { key: 'email', label: 'Email', type: 'email', required: true },
                { key: 'phone', label: 'Phone', type: 'tel', required: true },
                { key: 'organization', label: 'Organization', type: 'text', required: true },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{field.label} *</label>
                  <input
                    required={field.required}
                    type={field.type}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none transition"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Number of Members</label>
                <select
                  value={formData.members}
                  onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="1-50">1 - 50</option>
                  <option value="51-100">51 - 100</option>
                  <option value="101-500">101 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-brand-500 outline-none transition"
                  >
                    <option value="">Select</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">Book My Free Demo</Button>
              <p className="text-xs text-center text-slate-500">No credit card required. Start your free trial after the demo.</p>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
