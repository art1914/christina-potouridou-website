import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'

export default function Services() {
  return (
    <Section title="Υπηρεσίες">
      <div className="grid gap-6 sm:grid-cols-2">
        <Card title="Για παιδιά & εφήβους">
          Ψυχοθεραπεία και συμβουλευτική για δυσκολίες προσαρμογής, άγχος, συναισθηματική ρύθμιση
          και σχολικά θέματα, μέσα από παιχνίδι και δημιουργικές τεχνικές.
        </Card>
        <Card title="Για ενήλικες">
          Ατομική ψυχοθεραπεία για άγχος, κατάθλιψη, σχέσεις και προσωπική ανάπτυξη, σε ένα
          υποστηρικτικό και εμπιστευτικό πλαίσιο.
        </Card>
      </div>
    </Section>
  )
}
