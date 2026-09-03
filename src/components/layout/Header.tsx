import { NavLink } from 'react-router-dom'
import { navLinks, siteName } from '../../lib/site'

export function Header() {
  return (
    <header className="bg-cream sticky top-0 z-10 border-b border-sand">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-heading text-sage-dark text-xl font-bold">
          {siteName}
        </NavLink>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-sage ${isActive ? 'text-sage' : 'text-charcoal'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
