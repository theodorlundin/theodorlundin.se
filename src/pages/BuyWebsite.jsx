import Footer from '../components/ui/footer/Footer'
import Navbar from '../components/ui/navbar/Navbar'
import Container from '../layouts/Container'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import ContainerNarrow from '../layouts/ContainerNarrow'
import {
  LineVerticalIcon,
  PackageIcon,
  Stack,
  StackIcon
} from '@phosphor-icons/react'
import useMarkdown from '../hooks/useMarkdown'
import ContentLoader from '../components/ui/loaders/ContentLoader'
import WebsiteForm from '../components/features/websites/WebsiteForm'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import PriceProgress from '../components/features/websites/PriceProgress'

function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#005F78' },
          dark: { 'cal-brand': '#00D3F2' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])
  return (
    <Cal
      namespace="30min"
      calLink="theodorlundin/30min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'light' }}
    />
  )
}

export default function BuyWebsite() {
  useDocumentTitle('Köp en hemsida › Theodor Lundin')
  const { page } = useParams()
  const [enkelJsx, enkelRaw, enkelLoading] = useMarkdown(
    `/src/content/websites/Enkel.md`
  )
  const [alltJsx, alltRaw, alltLoading] = useMarkdown(
    `/src/content/websites/Allt-i-ett.md`
  )

  function NavTab({ correspondingPage, children }) {
    return (
      <Link
        to={`/hemsida/${correspondingPage}`}
        className={`flex items-center gap-3 text-slate-800 ${ page === correspondingPage &&
          'font-black' }`}
      >
        {children}
      </Link>
    )
  }

  return (
    <div>
      <Navbar />
      <Container topOfPage>
        <div
          className="align-center mx-auto mb-8 grid w-max grid-cols-[1fr_auto_1fr]
            justify-items-center gap-4 text-xl md:text-2xl
            [&>a:first-child]:justify-self-end"
        >
          <NavTab correspondingPage="enkel">
            <StackIcon size={32} className="fill-cyan-500" />
            Enkel
          </NavTab>
          <LineVerticalIcon
            size={32}
            className="min-w-4 fill-cyan-500 md:mx-4"
          />
          <NavTab correspondingPage="allt-i-ett">
            <PackageIcon size={32} className="fill-cyan-500" />
            Allt-i-ett
          </NavTab>
        </div>
      </Container>
      <motion.div
        key={page}
        initial={{ opacity: 0, x: page === 'enkel' ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, type: 'spring' }}
      >
        <ContainerNarrow>
          <section className="mb-12">
            {page === 'enkel' && (enkelLoading ? <ContentLoader /> : enkelJsx)}
            {page === 'allt-i-ett' &&
              (alltLoading ? <ContentLoader /> : alltJsx)}
          </section>
        </ContainerNarrow>
      </motion.div>
      <Container>
        <CalEmbed />
      </Container>
      <ContainerNarrow bottomOfPage>
        <section className="mt-20">
          <h2 className="mb-8">Generell prissättning</h2>
          {
            // Load PriceProgress component after markdown is loaded, so the animation doesn't fire instantly
            !enkelLoading && !alltLoading && <PriceProgress />
          }
        </section>
        <section className="mt-20">
          <h2>Formulär</h2>
          <p className="mb-8">
            Har du en fråga eller är du inte redo att boka ett videomöte? Använd
            då detta formulär.
          </p>
          <WebsiteForm />
        </section>
      </ContainerNarrow>
      <Footer />
    </div>
  )
}
