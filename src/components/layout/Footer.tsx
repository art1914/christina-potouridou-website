import { contact, siteName } from '../../lib/site'

export function Footer() {
  return (
    <footer className="bg-sage-dark px-6 py-10 text-cream">
      <div className="mx-auto max-w-4xl text-sm">
        <p className="font-heading text-lg font-semibold">{siteName}</p>
        <p className="mt-2">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-coral">
            {contact.phoneDisplay}
          </a>
          {' · '}
          <a href={`mailto:${contact.email}`} className="hover:text-coral">
            {contact.email}
          </a>
        </p>
        <p className="mt-4 text-cream/70">
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  )
}
