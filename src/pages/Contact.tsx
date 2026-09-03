import { Section } from '../components/ui/Section'
import { contact } from '../lib/site'

export default function Contact() {
  return (
    <Section title="Επικοινωνία">
      <ul className="space-y-3 text-lg">
        <li>
          Τηλέφωνο:{' '}
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-sage hover:underline">
            {contact.phoneDisplay}
          </a>
        </li>
        <li>
          Email:{' '}
          <a href={`mailto:${contact.email}`} className="text-sage hover:underline">
            {contact.email}
          </a>
        </li>
        <li>Περιοχή: {contact.address}</li>
      </ul>
    </Section>
  )
}
