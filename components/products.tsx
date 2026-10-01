import Link from 'next/link'
import { products, type Product } from '@/lib/products'

export function ProductCard({ p }: { p: Product }) {
  return (
    <li className="flex flex-col bg-background p-6 transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className={`grid size-10 place-items-center text-lg font-bold text-white ${p.color}`}>
          {p.name[0]}
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
          <p className="text-xs text-muted-foreground">{p.category}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em]">
        <span className={p.status === 'Live' ? 'text-emerald-700' : 'text-amber-700'}>{p.status}</span>
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/products/${p.slug}`}
          className="inline-flex h-10 items-center bg-black px-4 text-sm font-semibold text-white hover:bg-black/80"
        >
          Learn more
        </Link>
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center border border-black px-4 text-sm font-semibold hover:bg-black hover:text-white"
          >
            Visit site
          </a>
        )}
      </div>
    </li>
  )
}

export function Products() {
  return (
    <section aria-labelledby="products-heading" className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="products-heading" className="text-3xl font-semibold lg:text-4xl">
            Our products
          </h2>
          <Link href="/products" className="border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
            View all products
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </ul>
      </div>
    </section>
  )
}
