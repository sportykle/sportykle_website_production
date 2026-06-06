import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Features } from '@/pages/Features'
import { Solutions } from '@/pages/Solutions'
import { Industries } from '@/pages/Industries'
import { Pricing } from '@/pages/Pricing'
import { WhySportykle } from '@/pages/WhySportykle'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { FAQ } from '@/pages/FAQ'
import { Blog } from '@/pages/Blog'
import { BookDemo } from '@/pages/BookDemo'
import { MemberApp } from '@/pages/MemberApp'
import { MultiCenter } from '@/pages/MultiCenter'
import { Integrations } from '@/pages/Integrations'
import { Testimonials } from '@/pages/Testimonials'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="industries" element={<Industries />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="why-sportykle" element={<WhySportykle />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="blog" element={<Blog />} />
            <Route path="book-demo" element={<BookDemo />} />
            <Route path="member-app" element={<MemberApp />} />
            <Route path="multi-center" element={<MultiCenter />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
