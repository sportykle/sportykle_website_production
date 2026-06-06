import loginSplash from '@/assets/images/login-splash.png'
import loginMobile from '@/assets/images/login-mobile.png'
import mobileAppMenu from '@/assets/images/mobile-app-menu.png'
import { AppScreenshot } from './AppScreenshot'

interface PhoneMockupProps {
  variant?: 'splash' | 'login' | 'menu'
}

const variants = {
  splash: { src: loginSplash, alt: 'Sportykle member app splash screen' },
  login: { src: loginMobile, alt: 'Sportykle member app login screen' },
  menu: { src: mobileAppMenu, alt: 'Sportykle mobile app navigation menu' },
}

export function PhoneMockup({ variant = 'splash' }: PhoneMockupProps) {
  const { src, alt } = variants[variant]
  return (
    <AppScreenshot
      src={src}
      alt={alt}
      frame="none"
      className="max-w-[280px] mx-auto"
    />
  )
}
