const cards = [
  {
    label: 'Education',
    title: 'Free software access for students and educators',
    desc: 'Get professional tools and learning resources to build skills employers want.',
    cta: 'Get education access',
  },
  {
    label: 'News',
    title: 'The latest from Arcform',
    desc: 'Company news, customer stories and perspectives on the future of making.',
    cta: 'Read the newsroom',
  },
  {
    label: 'Free trials',
    title: 'Try Arcform software for free',
    desc: 'Explore full-featured versions of Draftline, Mechanica, Studio 3D and more.',
    cta: 'Start a free trial',
  },
]

export function FeatureCards() {
  return (
    <section aria-label="More from Arcform" className="bg-surface">
      <ul className="mx-auto grid max-w-[1440px] gap-4 px-6 py-20 md:grid-cols-3 lg:px-10">
        {cards.map((c) => (
          <li key={c.label} className="flex flex-col border-t-4 border-black bg-background p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</p>
            <h3 className="mt-3 text-pretty text-2xl font-semibold leading-snug">{c.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.desc}</p>
            <a href="#" className="mt-6 self-start border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
              {c.cta}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

const columns = [
  { title: 'Arcform', links: ['Company overview', 'Investor relations', 'Trust centre', 'Belonging at Arcform', 'Foundation', 'Careers'] },
  { title: 'How to buy', links: ['Choose a subscription', 'Flex pricing', 'Find a reseller', 'Special offers'] },
  { title: 'Support', links: ['Download and install', 'Account management', 'Education support', 'Contact us'] },
]

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-semibold tracking-[0.2em]">ARCFORM</span>
            <p className="mt-4 max-w-xs text-sm text-white/70">Software for the people who design and build the world.</p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold">{col.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {['Privacy', 'Cookie preferences', 'Report noncompliance', 'Terms of use', 'Legal'].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p>{'© 2026 Arcform Inc. All rights reserved'}</p>
        </div>
      </div>
    </footer>
  )
}
