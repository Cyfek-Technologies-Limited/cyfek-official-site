import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/products'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'All products | Cyfek',
  description: 'Explore Cyfek software products: Seltra, Applylot, Bikespot and more.',
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-black text-white">
          <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Products</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] lg:text-6xl">
              All Cyfek products
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Software for advertising, careers, mobility and beyond—with more on the way.
            </p>
          </div>
        </section>
        <section aria-label="Product list" className="bg-surface">
          <ul className="mx-auto grid max-w-[1440px] gap-4 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {products.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
