import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { products, site } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Contact | Cyfek',
  description: 'Get in touch with Cyfek Technologies about our products or a software project.',
}

const topics = [
  { title: 'Start a project', desc: 'Websites, mobile apps or custom software.', subject: 'New project enquiry' },
  ...products.map((p) => ({ title: `${p.name} enquiries`, desc: p.summary, subject: `${p.name} enquiry` })),
  { title: 'Partnerships', desc: 'Investors, partners and press.', subject: 'Partnership enquiry' },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Contact</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] lg:text-6xl">
              Let&apos;s talk
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Choose a topic below and email our team. We usually respond within one business day.
            </p>
          </div>
        </section>
        <section aria-label="Contact topics" className="bg-surface">
          <ul className="mx-auto grid max-w-[1440px] gap-4 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {topics.map((t) => (
              <li key={t.title} className="flex flex-col border-t-4 border-black bg-background p-8">
                <h2 className="text-2xl font-semibold">{t.title}</h2>
                <p className="mt-2 flex-1 text-muted-foreground">{t.desc}</p>
                <a
                  href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(t.subject)}`}
                  className="mt-6 inline-flex h-10 items-center gap-2 self-start bg-black px-4 text-sm font-semibold text-white hover:bg-black/80"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email us
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
