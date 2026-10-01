const products = [
  { name: 'Draftline', desc: '2D and 3D drafting with automated annotation in a workspace you control', color: 'bg-red-600', price: 'R 31 450' },
  { name: 'Formcraft', desc: 'Cloud platform for product design, simulation and manufacturing', color: 'bg-orange-500', price: 'R 12 980' },
  { name: 'Studio 3D', desc: 'Modelling, rendering and animation for richly detailed worlds', color: 'bg-teal-600', price: 'R 37 200' },
  { name: 'Structa', desc: 'Model, coordinate and deliver buildings with full BIM workflows', color: 'bg-sky-700', price: 'R 49 800' },
  { name: 'Terrain', desc: 'Civil engineering design and documentation for roads, sites and utilities', color: 'bg-emerald-700', price: 'R 49 800' },
  { name: 'Draftline Lite', desc: 'Focused 2D tools to draft, detail and document precisely', color: 'bg-rose-500', price: 'R 9 650' },
  { name: 'Motion', desc: 'Character animation, rigging and effects for film and games', color: 'bg-cyan-600', price: 'R 37 200' },
  { name: 'Mechanica', desc: 'Mechanical design with simulation, visualisation and tooling', color: 'bg-amber-600', price: 'R 41 300' },
]

export function Products() {
  return (
    <section aria-labelledby="products-heading" className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="products-heading" className="text-3xl font-semibold lg:text-4xl">
            Popular products
          </h2>
          <a href="#" className="border-b-2 border-foreground pb-0.5 font-semibold hover:border-brand">
            View all products
          </a>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.name} className="flex flex-col bg-background p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className={`grid size-10 place-items-center text-lg font-bold text-white ${p.color}`}>
                  {p.name[0]}
                </span>
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <p className="mt-6 text-sm">
                <span className="text-xl font-semibold">{p.price}</span>
                <span className="text-muted-foreground"> / year</span>
              </p>
              <p className="text-xs text-muted-foreground">* includes estimated VAT</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#" className="inline-flex h-10 items-center bg-black px-4 text-sm font-semibold text-white hover:bg-black/80">
                  Buy now
                </a>
                <a href="#" className="inline-flex h-10 items-center border border-black px-4 text-sm font-semibold hover:bg-black hover:text-white">
                  Free trial
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
