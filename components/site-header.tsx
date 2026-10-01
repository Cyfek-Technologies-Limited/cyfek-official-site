'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { products } from '@/lib/products'

const navItems = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Cyfek home">
      <span aria-hidden="true" className="grid size-7 place-items-center bg-brand text-sm font-bold text-brand-foreground">
        C
      </span>
      <span className="text-lg font-semibold tracking-[0.2em]">CYFEK</span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-6 lg:px-10">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-6 text-sm">
            <li className="relative" onMouseLeave={() => setProductsOpen(false)}>
              <button
                type="button"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((v) => !v)}
                onMouseEnter={() => setProductsOpen(true)}
                className="flex items-center gap-1 py-5 hover:text-brand"
              >
                Products <ChevronDown className="size-4" aria-hidden="true" />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full w-[420px] bg-white p-6 text-black shadow-xl">
                  <ul className="space-y-1">
                    {products.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/products/${p.slug}`}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 p-3 hover:bg-surface"
                        >
                          <span aria-hidden="true" className={`grid size-9 shrink-0 place-items-center font-bold text-white ${p.color}`}>
                            {p.name[0]}
                          </span>
                          <span>
                            <span className="block font-semibold">{p.name}</span>
                            <span className="block text-xs text-muted-foreground">{p.summary}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="mt-4 inline-block border-b-2 border-black pb-0.5 text-sm font-semibold"
                  >
                    View all products
                  </Link>
                </div>
              )}
            </li>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="py-5 hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5 text-sm">
          <Link
            href="/contact"
            className="hidden h-10 items-center bg-white px-4 font-semibold text-black hover:bg-brand sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/15 lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            <li className="py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">Products</li>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {p.name}
                </Link>
              </li>
            ))}
            <li className="my-2 border-t border-white/15" aria-hidden="true" />
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
