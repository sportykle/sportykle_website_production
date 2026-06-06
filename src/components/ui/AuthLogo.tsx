import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import logoSvg from '@/assets/images/logo.svg'

interface AuthLogoProps {
  className?: string
  linkTo?: string | false
}

export function AuthLogo({ className, linkTo = '/' }: AuthLogoProps) {
  const image = (
    <img
      src={logoSvg}
      alt="Sportykle"
      className={cn('h-44 w-44 object-contain', className)}
    />
  )

  if (linkTo !== false) {
    return (
      <Link to={linkTo || '/'} className="flex justify-center">
        {image}
      </Link>
    )
  }

  return <div className="flex justify-center">{image}</div>
}
