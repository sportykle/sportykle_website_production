import { motion } from 'framer-motion'
import logoBlack from '@/assets/images/logo-black.png'
import loginIllustration from '@/assets/images/login-illustration.png'
import { Mail, Lock, Eye } from 'lucide-react'

export function LoginPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-3xl blur-2xl" />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2">
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center">
            <img src={logoBlack} alt="Sportykle" className="h-16 w-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 relative">
              Login To Sportykle
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-brand-500/30 rounded-full" />
            </h3>
            <img
              src={loginIllustration}
              alt="Fitness member using Sportykle mobile app"
              className="w-full max-w-xs mt-4"
            />
          </div>
          <div className="p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <Mail size={16} className="text-slate-400" />
                <span className="text-sm text-slate-400">email@services.com</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <Lock size={16} className="text-slate-400" />
                <span className="text-sm text-slate-400 flex-1">••••••••</span>
                <Eye size={16} className="text-slate-400" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <input type="checkbox" className="rounded" readOnly /> Remember Me
              </label>
              <span className="text-brand-600 font-medium">Forgot Password?</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400">
                Login With Google
              </div>
              <div className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400">
                Login With Mobile
              </div>
            </div>
            <div className="w-full py-3 rounded-xl bg-brand-600 text-white text-center font-semibold">
              Login
            </div>
            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account? <span className="text-brand-600 font-medium">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
