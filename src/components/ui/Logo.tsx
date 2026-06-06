import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'
import logoDark from '@/assets/images/logo.png'
import logoLight from '@/assets/images/logo-black.png'

interface LogoProps {
  className?: string
  imageClassName?: string
  showText?: boolean
  textClassName?: string
  variant?: 'default' | 'footer'
  linkTo?: string
}

export function Logo({
  className,
  imageClassName,
  showText = true,
  textClassName,
  variant = 'default',
  linkTo = '/',
}: LogoProps) {
  const { theme } = useTheme()
  const src = variant === 'footer' || theme === 'dark' ? logoDark : logoLight

  const content = (
    <div className={cn('flex items-center gap-2.5 group', className)}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={cn('h-9 w-auto object-contain group-hover:scale-105 transition-transform', imageClassName)}
      />
      {showText && (
        <span
          className={cn(
            'text-xl font-bold tracking-tight',
            variant === 'footer'
              ? 'text-white'
              : 'text-slate-900 dark:text-white',
            textClassName,
          )}
        >
          Sporty<span className="text-brand-600 dark:text-brand-400">kle</span>
        </span>
      )}
      <span className="sr-only">Sportykle</span>
    </div>
  )

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>
  }

  return content
}
