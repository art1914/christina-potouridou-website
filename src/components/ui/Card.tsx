import type { ReactNode } from 'react'

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
      <h3 className="font-heading text-sage-dark mb-2 text-xl font-semibold">{title}</h3>
      <div className="text-charcoal/90">{children}</div>
    </div>
  )
}
