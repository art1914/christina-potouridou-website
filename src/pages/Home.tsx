import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { siteTagline } from '../lib/site'

export default function Home() {
  return (
    <Section>
      <h1 className="font-heading text-sage-dark text-4xl font-bold sm:text-5xl">
        Ένας ασφαλής χώρος για εσάς και το παιδί σας
      </h1>
      <p className="mt-4 text-lg text-charcoal/80">{siteTagline}</p>
      <div className="mt-8 flex gap-4">
        <Button to="/epikoinonia">Κλείστε ραντεβού</Button>
        <Button to="/ypiresies" variant="accent">
          Δείτε τις υπηρεσίες
        </Button>
      </div>
    </Section>
  )
}
