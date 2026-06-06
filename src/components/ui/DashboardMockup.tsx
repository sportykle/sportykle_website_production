import dashboardWeb from '@/assets/images/dashboard-web.png'
import mobileAppMenu from '@/assets/images/mobile-app-menu.png'
import { AppScreenshot } from './AppScreenshot'

export function DashboardMockup() {
  return (
    <div className="relative">
      <AppScreenshot
        src={dashboardWeb}
        alt="Sportykle web dashboard showing membership analytics, revenue, attendance, and member management"
        frame="browser"
      />
      <div className="absolute -right-2 -bottom-4 md:-right-6 md:-bottom-8 w-32 md:w-44 z-10 hidden sm:block shadow-2xl rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-700">
        <img
          src={mobileAppMenu}
          alt="Sportykle mobile app navigation menu"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  )
}
