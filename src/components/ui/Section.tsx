import type { ReactNode } from 'react'

export function Section({
  title,
  children,
  tone = 'cream',
}: {
  title?: string
  children: ReactNode
  tone?: 'cream' | 'sand'
}) {
  const bg = tone === 'sand' ? 'bg-sand' : 'bg-cream'
  return (
    <section className={`${bg} px-6 py-16`}>
      <div className="mx-auto max-w-3xl">
        {title && (
          <h2 className="font-heading text-sage-dark mb-6 text-3xl font-semibold">{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
