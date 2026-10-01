import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Industries } from '@/components/industries'
import { Products } from '@/components/products'
import { ServicesBanner, About } from '@/components/ai-banner'
import { FeatureCards, SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Industries />
        <Products />
        <ServicesBanner />
        <About />
        <FeatureCards />
      </main>
      <SiteFooter />
    </>
  )
}
