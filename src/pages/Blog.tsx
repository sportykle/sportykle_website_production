import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'
import { blogPosts } from '@/data/blog'

const categoryColors: Record<string, string> = {
  'Member Engagement': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  'Operations': 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
  'Marketing': 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400',
  'Digital Transformation': 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400',
  'Revenue': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  'Buyers Guide': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400',
}

export function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Sportykle blog — insights on gym management, member retention, digital transformation, and fitness industry best practices."
        keywords="fitness blog, gym management tips, sports academy blog"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Blog"
            title="Insights & Resources"
            subtitle="Expert advice on growing your sports and fitness business with technology and best practices."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📝</span>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${categoryColors[post.category] || categoryColors['Buyers Guide']}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
