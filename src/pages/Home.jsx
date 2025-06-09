import { useEffect } from 'react'
import HomeHeader from '../components/features/home/HomeHeader'
import Footer from '../components/ui/footer/Footer'
import Navbar from '../components/ui/navbar/Navbar'
import Container from '../layouts/Container'
import InstagramFeed from '../components/features/home/InstagramFeed'
import MediaSection from '../components/features/home/MediaSection'
import ContainerContrast from '../layouts/ContainerContrast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ContainerNarrow from '../layouts/ContainerNarrow'
import ContainerNarrowContast from '../layouts/ContainerNarrowContast'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <Container underHeader>
        <section className="mb-20">
          <MediaSection
            imgSrc="/assets/images/pages/home/WebsiteSection.webp"
            title="Jag bygger din hemsida"
            content="Sedan fem år tillbaka har jag utvecklat hemsidor. Det är en fantastisk kreativ process som jag brinner för, och jag tog därför steget att erbjuda webbutveckling som en tjänst för andra. Behöver du, eller känner du någon som behöver en snygg, modern hemsida så hjälper jag gärna dig."
            ctaText="Läs mer"
            ctaUrl="/hemsidor"
          />
        </section>
      </Container>
      {/* <ContainerNarrowContast>
        <section className="my-12">
          <a
            href="https://www.barometern.se/2025-04-02/theodor-16-har-utvecklat-en-egen-skolplattform-kan-hjalpa-andra/"
            className="grid grid-cols-[200px_1fr] gap-8 rounded border-1 border-slate-400 p-4
              transition-colors"
          >
            <LazyLoadImage
              src="/assets/images/pages/home/BarometernFlash.webp"
              className=""
            />
            <div>
              <h2>Tips! Läs om mig och min plattform Studian i Barometern.</h2>
            </div>
          </a>
        </section>
      </ContainerNarrowContast> */}
      <Container bottomOfPage>
        <section className="mt-12">
          <h2>Instagram</h2>
          <InstagramFeed />
        </section>
      </Container>
      <Footer />
    </div>
  )
}
