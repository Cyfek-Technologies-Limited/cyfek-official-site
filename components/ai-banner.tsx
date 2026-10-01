import Image from 'next/image'

export function AiBanner() {
  return (
    <section aria-labelledby="ai-heading" className="bg-black text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 id="ai-heading" className="text-balance text-4xl font-semibold leading-tight lg:text-5xl">
            Arcform AI helps you do more with less
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg text-white/80">
            Intelligence built into the tools you already use—automating repetitive work, exploring more design options
            and helping teams build more sustainably.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center bg-brand px-6 font-semibold text-brand-foreground hover:bg-white"
          >
            Explore Arcform AI
          </a>
        </div>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/ai.png"
            alt="Generative lattice structure emerging from flowing lines"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section aria-labelledby="about-heading" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <h2 id="about-heading" className="text-balance text-3xl font-semibold leading-tight lg:text-4xl">
          Arcform makes software for the people who design and build the world
        </h2>
        <div>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            From architects and engineers to manufacturers, animators and production teams, our platform connects every
            stage of a project so innovators can solve challenges of every size.
          </p>
          <a href="#" className="mt-6 inline-block border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
            Learn more about Arcform
          </a>
        </div>
      </div>
    </section>
  )
}
