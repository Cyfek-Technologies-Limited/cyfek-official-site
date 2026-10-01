import Image from 'next/image'

const stories = [
  {
    image: '/images/story-1.png',
    alt: 'Engineering team reviewing a 3D bridge model',
    title: 'How a Cape Town engineering firm doubled delivery speed with connected data',
    desc: 'Five years into its digital journey, a multidisciplinary consultancy shares the habits that turned shared models into new business.',
  },
  {
    image: '/images/story-2.png',
    alt: 'Inspection robot inside a water pipe',
    title: 'Pipe-crawling robots help cities find leaks before they flood',
    desc: 'A young robotics company maps ageing water networks from the inside, cutting repair times and saving millions of litres.',
  },
  {
    image: '/images/story-3.png',
    alt: 'Performer in a motion capture suit on a soundstage',
    title: 'Inside the studio pushing performance capture to new realism',
    desc: 'A visual-effects team explains how it captures every nuance of an actor for digital characters audiences believe in.',
  },
]

export function Stories() {
  return (
    <section aria-labelledby="stories-heading" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
      <h2 id="stories-heading" className="text-3xl font-semibold lg:text-4xl">
        Customer stories
      </h2>
      <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
        {stories.map((s) => (
          <li key={s.title}>
            <a href="#" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-pretty text-xl font-semibold leading-snug group-hover:underline">{s.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{s.desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
