'use client'

import { useState } from 'react'
import { Globe, Menu, Search, ShoppingCart, X } from 'lucide-react'

const navItems = ['Products', 'Collections', 'How to buy', 'Support', 'Downloads', 'Learn', 'Community']

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-6 lg:px-10">
        <a href="#" className="flex items-center gap-2" aria-label="Arcform home">
          <span aria-hidden="true" className="grid size-7 place-items-center bg-brand text-sm font-bold text-brand-foreground">
            A
          </span>
          <span className="text-lg font-semibold tracking-[0.2em]">ARCFORM</span>
        </a>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="py-5 hover:underline hover:underline-offset-[22px] hover:decoration-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5 text-sm">
          <button type="button" aria-label="Search" className="hover:text-brand">
            <Search className="size-5" />
          </button>
          <button type="button" aria-label="Cart, 0 items" className="relative hover:text-brand">
            <ShoppingCart className="size-5" />
            <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-white text-[10px] font-semibold text-black">
              0
            </span>
          </button>
          <button type="button" className="hidden items-center gap-1 hover:text-brand sm:flex" aria-label="Region: South Africa">
            <Globe className="size-5" />
            <span>ZA</span>
          </button>
          <a href="#" className="hidden font-medium hover:underline sm:inline">
            Sign in
          </a>
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
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block py-3 text-base">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="block py-3 text-base font-medium">
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
