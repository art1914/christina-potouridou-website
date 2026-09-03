import { Link, type LinkProps } from 'react-router-dom'

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: LinkProps & { variant?: 'primary' | 'accent' }) {
  const styles =
    variant === 'accent'
      ? 'bg-coral hover:bg-coral/90 text-white'
      : 'bg-sage hover:bg-sage/90 text-white'

  return (
    <Link
      className={`inline-block rounded-full px-6 py-3 font-medium transition-colors ${styles} ${className}`}
      {...props}
    />
  )
}
