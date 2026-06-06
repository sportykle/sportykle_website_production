import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

interface StatsCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' })
    return controls.stop
  }, [value, count])

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsCounter({ value, suffix, prefix, label }: StatsCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </motion.div>
  )
}
