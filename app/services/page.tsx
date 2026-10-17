import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { services } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Services | Websites, Mobile Apps & Custom Software | Cyfek',
  description: 'Cyfek designs and builds websites, mobile apps and custom software for businesses.',
}

const process = [
  { title: 'Discover', desc: 'We learn your goals, users and constraints, and define the scope.' },
  { title: 'Design', desc: 'Wireframes, prototypes and a polished interface you sign off on.' },
  { title: 'Build', desc: 'Agile development with regular demos so you always see progress.' },
  { title: 'Launch & support', desc: 'We ship, monitor and keep improving your product.' },
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-black text-white">
          <Image src="/images/services.png" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-50" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Cyfek Services</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] lg:text-6xl">
              We take care of your software needs
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Websites, mobile apps and custom platforms—designed and built by the team behind Seltra, Applylot and
              Bikespot.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center bg-white px-6 font-semibold text-black hover:bg-brand"
            >
              Start a project
            </Link>
          </div>
        </section>

        <section aria-labelledby="what-heading" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <h2 id="what-heading" className="text-3xl font-semibold lg:text-4xl">
            What we build
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="border-t-4 border-black pt-5">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="process-heading" className="bg-surface">
          <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
            <h2 id="process-heading" className="text-3xl font-semibold lg:text-4xl">
              How we work
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => (
                <li key={s.title} className="bg-background p-8">
                  <span className="text-5xl font-semibold text-brand-ink">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold lg:text-4xl">Have an idea? Let&apos;s build it together.</h2>
            <Link href="/contact" className="inline-flex h-12 items-center bg-brand px-6 font-semibold text-brand-foreground hover:bg-white">
              Talk to our team
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
