import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-black text-white lg:min-h-[640px]">
      <Image
        src="/images/hero.png"
        alt="Software team collaborating in front of glowing monitors"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-end px-6 pb-16 lg:min-h-[640px] lg:px-10 lg:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Cyfek Technologies</p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] lg:text-7xl">
          Software that moves business forward
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-white/85">
          We build products for marketing, HR, mobility, real estate and automation—and we build custom websites and
          mobile apps for teams like yours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex h-12 items-center bg-white px-6 text-base font-semibold text-black transition-colors hover:bg-brand"
          >
            Explore our products
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center border border-white px-6 text-base font-semibold transition-colors hover:bg-white hover:text-black"
          >
            Hire us to build
          </Link>
        </div>
      </div>
    </section>
  )
}
