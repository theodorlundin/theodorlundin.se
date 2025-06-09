import Footer from '../components/ui/footer/Footer'
import ContentLoader from '../components/ui/loaders/ContentLoader'
import Navbar from '../components/ui/navbar/Navbar'
import useDocumentProps from '../hooks/useDocumentProps'
import useMarkdown from '../hooks/useMarkdown'
import ContainerNarrow from '../layouts/ContainerNarrow'

export default function About() {
  useDocumentProps({
    title: 'Om › Theodor Lundin',
    description:
      'Välkommen till min hemsida! Här kan du läsa om mig och vad jag gör.'
  })
  const [jsx, raw, loading] = useMarkdown('/content/About.md')

  return (
    <div>
      <Navbar />
      <ContainerNarrow topOfPage bottomOfPage>
        {loading && <ContentLoader />}
        {jsx}
      </ContainerNarrow>
      <Footer />
    </div>
  )
}
