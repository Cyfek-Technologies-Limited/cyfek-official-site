import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowDown, Check, Clock, Download } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/products'
import { getProduct, products, site } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) return {}
  return { title: `${p.name} | ${p.tagline} | Cyfek`, description: p.summary }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProduct(slug)
  if (!p) notFound()

  const primaryCta = p.url
    ? { label: `Go to ${p.name}`, href: p.url, external: true }
    : { label: 'Request early access', href: `mailto:${site.contactEmail}?subject=${encodeURIComponent(`${p.name} early access`)}`, external: true }

  return (
    <>
      <SiteHeader />
      <main>
        <nav aria-label={`${p.name} navigation`} className="sticky top-0 z-30 border-b border-white/15 bg-[#1a1a1a] text-white">
          <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-8 px-6 lg:px-10">
            <Link href={`/products/${p.slug}`} className="flex shrink-0 items-center gap-3 font-bold">
              <span aria-hidden="true" className={`grid size-6 place-items-center rounded-sm text-sm font-bold text-white ${p.color}`}>
                {p.name[0]}
              </span>
              {p.name}
            </Link>
            <ul className="hidden items-center gap-10 font-semibold md:flex">
              <li>
                <a href="#overview" className="flex items-center gap-1 hover:underline">
                  Overview <ArrowDown className="size-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#features" className="flex items-center gap-1 hover:underline">
                  Features <ArrowDown className="size-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#how-heading" className="flex items-center gap-1 hover:underline">
                  How it works <ArrowDown className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <div className="ml-auto flex items-center gap-4">
              <Link href="/contact" className="hidden items-center gap-1.5 font-semibold hover:underline lg:flex">
                <Clock className="size-4" aria-hidden="true" />
                Contact sales
              </Link>
              <a
                href="#features"
                className="hidden h-8 items-center gap-2 rounded-sm border border-white px-3 text-sm font-semibold hover:bg-white hover:text-black sm:inline-flex"
              >
                <Download className="size-4" aria-hidden="true" />
                See features
              </a>
              <a
                href={primaryCta.href}
                {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex h-8 items-center rounded-sm bg-white px-3 text-sm font-semibold text-black hover:bg-white/85"
              >
                {primaryCta.label}
              </a>
            </div>
          </div>
        </nav>

        <section id="overview" className="relative overflow-hidden bg-black text-white">
          <Image
            src="/images/hero-wireframe.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-6 px-6 pb-40 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:pb-48 lg:pt-16">
            <div>
              <h1 className="text-balance text-4xl font-bold leading-[1.15] lg:text-[2.6rem]">
                {p.name}: {p.tagline}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/90">{p.description}</p>
              <a
                href={primaryCta.href}
                {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="mt-8 inline-flex h-10 items-center gap-2 rounded-sm border border-white px-5 text-lg font-semibold hover:bg-white hover:text-black"
              >
                <Download className="size-4" aria-hidden="true" />
                {primaryCta.label}
              </a>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:-mr-10 lg:max-w-none">
              <Image
                src={p.heroObject}
                alt={p.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-contain mix-blend-screen"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="get-heading" className="relative z-10 mx-auto -mt-28 max-w-[1440px] px-6 lg:px-10">
          <div className="rounded-lg border border-white/25 bg-[#1a1a1a] p-8 text-white lg:p-10">
            <h2 id="get-heading" className="text-3xl font-bold">
              Get {p.name}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">Category</p>
                <p className="mt-1 text-lg font-semibold">{p.category}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">Status</p>
                <p className="mt-1 text-lg font-semibold">{p.status}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a
                  href={primaryCta.href}
                  {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex h-11 items-center rounded-sm bg-white px-5 font-semibold text-black hover:bg-white/85"
                >
                  {primaryCta.label}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center rounded-sm border border-white px-5 font-semibold hover:bg-white hover:text-black"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-black text-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-10 gap-y-4 px-6 py-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Built for</p>
            {p.audiences.map((a) => (
              <p key={a} className="flex items-center gap-2 font-medium">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {a}
              </p>
            ))}
          </div>
        </section>

        <section id="features" aria-labelledby="features-heading" className="mx-auto max-w-[1440px] scroll-mt-16 px-6 py-20 lg:px-10">
          <h2 id="features-heading" className="text-3xl font-semibold lg:text-4xl">
            What you can do with {p.name}
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <li key={f.title} className="border-t-4 border-black pt-5">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="how-heading" className="bg-surface">
          <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
            <h2 id="how-heading" className="text-3xl font-semibold lg:text-4xl">
              How it works
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {p.steps.map((s, i) => (
                <li key={s.title} className="bg-background p-8">
                  <span className="text-5xl font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold lg:text-4xl">Get started with {p.name} today</h2>
            <a
              href={primaryCta.href}
              {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex h-12 items-center bg-brand px-6 font-semibold text-brand-foreground hover:bg-white"
            >
              {primaryCta.label}
            </a>
          </div>
        </section>

        <section aria-labelledby="more-heading" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
          <h2 id="more-heading" className="text-3xl font-semibold">
            More from Cyfek
          </h2>
          <ul className="mt-8 grid gap-4 border border-border bg-surface p-4 sm:grid-cols-2">
            {products
              .filter((o) => o.slug !== p.slug)
              .map((o) => (
                <ProductCard key={o.slug} p={o} />
              ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
