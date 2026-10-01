import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
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
        <nav aria-label="Breadcrumb" className="border-b border-border">
          <ol className="mx-auto flex max-w-[1440px] gap-2 px-6 py-3 text-sm text-muted-foreground lg:px-10">
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              {p.name}
            </li>
          </ol>
        </nav>

        <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className={`grid size-12 place-items-center text-2xl font-bold text-white ${p.color}`}>
                {p.name[0]}
              </span>
              <span className="text-2xl font-semibold">{p.name}</span>
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">{p.category}</p>
            <h1 className="mt-3 text-balance text-5xl font-semibold leading-[1.05] lg:text-6xl">{p.tagline}</h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={primaryCta.href}
                {...(p.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex h-12 items-center bg-black px-6 font-semibold text-white hover:bg-black/80"
              >
                {primaryCta.label}
              </a>
              <a href="#features" className="inline-flex h-12 items-center border border-black px-6 font-semibold hover:bg-black hover:text-white">
                See features
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image src={p.image} alt={p.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </section>

        <section className="bg-black text-white">
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
