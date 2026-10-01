import Image from 'next/image'
import Link from 'next/link'
import { solutions } from '@/lib/products'

export function Industries() {
  return (
    <section id="solutions" aria-labelledby="industries-heading" className="mx-auto max-w-[1440px] scroll-mt-16 px-6 py-20 lg:px-10">
      <h2 id="industries-heading" className="text-3xl font-semibold lg:text-4xl">
        Explore Cyfek by industry
      </h2>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {solutions.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="group block">
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
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
