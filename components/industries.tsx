'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const featured = [
  { name: 'Architecture', image: '/images/ind-architecture.png' },
  { name: 'Construction', image: '/images/ind-construction.png' },
  { name: 'Manufacturing', image: '/images/ind-manufacturing.png' },
  { name: 'Media & entertainment', image: '/images/ind-media.png' },
  { name: 'Transportation', image: '/images/ind-infrastructure.png' },
  { name: 'Water infrastructure', image: '/images/ind-water.png' },
]

const more = [
  'Building engineering',
  'Industrial machinery',
  'Visual effects',
  'Consumer products',
  'Automotive & mobility',
  'Game development',
  'Fabrication',
  'Explore all industries',
]

export function Industries() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section aria-labelledby="industries-heading" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
      <h2 id="industries-heading" className="text-3xl font-semibold lg:text-4xl">
        Explore Arcform by industry
      </h2>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {featured.map((item) => (
          <li key={item.name}>
            <a href="#" className="group block">
              <div className="relative aspect-square overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold group-hover:underline">{item.name}</h3>
            </a>
          </li>
        ))}
      </ul>

      {expanded && (
        <ul className="mt-8 grid gap-x-8 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {more.map((name) => (
            <li key={name} className="border-b border-border">
              <a href="#" className="flex items-center justify-between py-4 font-medium hover:underline">
                {name}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-8 border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand"
      >
        {expanded ? 'See less' : 'See more'}
      </button>
    </section>
  )
}
