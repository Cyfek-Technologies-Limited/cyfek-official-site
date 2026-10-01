import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/products'

export function ServicesBanner() {
  return (
    <section aria-labelledby="services-heading" className="bg-black text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Cyfek Services</p>
          <h2 id="services-heading" className="mt-4 text-balance text-4xl font-semibold leading-tight lg:text-5xl">
            Need software built? We take care of it.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg text-white/80">
            The same team behind our products builds websites, mobile apps and custom platforms for clients—from first
            idea to launch and beyond.
          </p>
          <ul className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {services.slice(0, 4).map((s) => (
              <li key={s.title} className="border-l-2 border-brand pl-3 font-medium">
                {s.title}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-10 inline-flex h-12 items-center bg-brand px-6 font-semibold text-brand-foreground hover:bg-white"
          >
            Explore our services
          </Link>
        </div>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/services.png"
            alt="Workspace with code on a laptop, a mobile app prototype and wireframe sketches"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-[1440px] scroll-mt-16 px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <h2 id="about-heading" className="text-balance text-3xl font-semibold leading-tight lg:text-4xl">
          Cyfek builds software that solves everyday problems
        </h2>
        <div>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Cyfek Technologies Limited is a technology startup building a family of software products across advertising
            and marketing, HR, mobility, real estate and workflow automation. Alongside our own products, we partner with
            businesses to design and build the software they need.
          </p>
          <Link href="/services" className="mt-6 inline-block border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
            Work with Cyfek
          </Link>
        </div>
      </div>
    </section>
  )
}
