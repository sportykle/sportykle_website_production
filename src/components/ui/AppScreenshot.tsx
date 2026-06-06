import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AppScreenshotProps {
  src: string
  alt: string
  className?: string
  frame?: 'browser' | 'phone' | 'none'
  delay?: number
}

export function AppScreenshot({ src, alt, className, frame = 'none', delay = 0 }: AppScreenshotProps) {
  const image = (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-auto object-cover', className)}
      loading="lazy"
    />
  )

  if (frame === 'browser') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-accent-500/10 to-brand-500/20 rounded-3xl blur-2xl" />
        <div className="relative glass rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
              dashboard.sportykle.com
            </div>
          </div>
          {image}
        </div>
      </motion.div>
    )
  }

  if (frame === 'phone') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative mx-auto max-w-[280px]"
      >
        <div className="absolute -inset-4 bg-gradient-to-b from-brand-500/20 to-accent-500/20 rounded-[3rem] blur-xl" />
        <div className="relative bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10" />
          <div className="rounded-[2rem] overflow-hidden">
            {image}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
    >
      {image}
    </motion.div>
  )
}
