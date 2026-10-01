import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-black text-white lg:min-h-[640px]">
      <Image
        src="/images/hero.png"
        alt="Engineer reviewing a 3D wireframe of a building"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-end px-6 pb-16 lg:min-h-[640px] lg:px-10 lg:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">New research from Arcform</p>
        <h1 className="mt-4 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] lg:text-7xl">
          The 2026 Future of Making Report
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-white/85">
          How leaders across design, engineering and construction are turning data and AI into a lasting competitive edge.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex h-12 items-center bg-white px-6 text-base font-semibold text-black transition-colors hover:bg-brand"
          >
            Read the report
          </a>
        </div>
      </div>
    </section>
  )
}
