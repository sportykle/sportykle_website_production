import { Link } from 'react-router-dom'
import { footerLinks } from '@/data/navigation'
import { Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <Logo variant="footer" imageClassName="h-10" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              The leading cloud-based sports, fitness, wellness, and multi-center management platform. Trusted by organizations across India and global markets.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:support@sportykle.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail size={14} /> support@sportykle.com
              </a>
              <a href="tel:+917351001002" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone size={14} /> +91 73510 01002
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-brand-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Sportykle. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-slate-500 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-brand-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
