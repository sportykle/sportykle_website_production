import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'
import logoDark from '@/assets/images/logo.png'
import logoLight from '@/assets/images/logo-black.png'

interface LogoProps {
  className?: string
  imageClassName?: string
  linkTo?: string
}

export function Logo({ className, imageClassName, linkTo = '/' }: LogoProps) {
  const { theme } = useTheme()
  const src = theme === 'dark' ? logoDark : logoLight

  const content = (
    <div className={cn('flex items-center gap-2.5 group', className)}>
      <img
        src={src}
        alt="Sportykle"
        className={cn('h-9 w-auto object-contain group-hover:scale-105 transition-transform', imageClassName)}
      />
      <span className="sr-only">Sportykle</span>
    </div>
  )

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>
  }

  return content
}
