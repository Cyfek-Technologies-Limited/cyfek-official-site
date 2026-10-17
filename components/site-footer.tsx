import Image from 'next/image'
import Link from 'next/link'
import { products, site } from '@/lib/products'

const cards = [
  {
    label: 'Products',
    title: 'A growing family of Cyfek software',
    desc: 'From paid social advertising to AI job applications and e-bike financing.',
    cta: 'Browse products',
    href: '/products',
  },
  {
    label: 'Services',
    title: 'Websites and mobile apps, built for you',
    desc: 'Bring us your idea and we will design, build and launch it.',
    cta: 'See our services',
    href: '/services',
  },
  {
    label: 'Contact',
    title: 'Let’s talk about your project',
    desc: 'Tell us what you need and our team will get back to you.',
    cta: 'Get in touch',
    href: '/contact',
  },
]

export function FeatureCards() {
  return (
    <section aria-label="More from Cyfek" className="bg-surface">
      <ul className="mx-auto grid max-w-[1440px] gap-4 px-6 py-20 md:grid-cols-3 lg:px-10">
        {cards.map((c) => (
          <li key={c.label} className="flex flex-col border-t-4 border-black bg-background p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</p>
            <h3 className="mt-3 text-pretty text-2xl font-semibold leading-snug">{c.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.desc}</p>
            <Link href={c.href} className="mt-6 self-start border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
              {c.cta}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const columns = [
  { title: 'Products', links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })) },
  {
    title: 'Services',
    links: [
      { label: 'Website development', href: '/services' },
      { label: 'Mobile apps', href: '/services' },
      { label: 'Custom software', href: '/services' },
      { label: 'Automation', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Cyfek', href: '/#about' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2">
              <Image src="/images/cyfek-logo.png" alt="" width={40} height={40} className="size-10" />
              <span className="text-lg font-semibold tracking-[0.2em]">CYFEK</span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/70">Software products and services for growing businesses.</p>
            <a href={`mailto:${site.contactEmail}`} className="mt-4 inline-block text-sm hover:text-brand">
              {site.contactEmail}
            </a>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold">{col.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {['Privacy', 'Terms of use'].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p>{`© 2026 ${site.legalName}. All rights reserved`}</p>
        </div>
      </div>
    </footer>
  )
}
