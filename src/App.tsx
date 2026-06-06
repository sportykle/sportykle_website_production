import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@/context/ThemeContext'
import { NotificationProvider } from '@/widgets/NotificationProvider.jsx'
import { Layout } from '@/components/layout/Layout'
import SelectOrganization from '@/pages/SelectOrganization.jsx'
import Signup from '@/pages/Signup.jsx'
import ForgotPassword from '@/pages/ForgotPassword.jsx'
import ResetPassword from '@/pages/ResetPassword.jsx'
import VerifyEmail from '@/pages/VerifyEmail.jsx'
import OrganizationRegister from '@/pages/OrganizationRegister.jsx'
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
import { RefundPolicy } from '@/pages/RefundPolicy'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/select-organization" element={<SelectOrganization />} />
              <Route path="/login" element={<Navigate to="/select-organization" replace />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/accounts/reset-password" element={<ForgotPassword />} />
              <Route path="/password/reset/confirm/:uid/:token/" element={<ResetPassword />} />
              <Route path="/account/confirm-email/:key" element={<VerifyEmail />} />
              <Route path="/organization/register" element={<OrganizationRegister />} />
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
                <Route path="refund-policy" element={<RefundPolicy />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </NotificationProvider>
    </QueryClientProvider>
  )
}
