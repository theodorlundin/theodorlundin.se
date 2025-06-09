import Footer from '../components/ui/footer/Footer'
import ContentLoader from '../components/ui/loaders/ContentLoader'
import Navbar from '../components/ui/navbar/Navbar'
import useDocumentProps from '../hooks/useDocumentProps'
import useMarkdown from '../hooks/useMarkdown'
import ContainerNarrow from '../layouts/ContainerNarrow'

export default function Typografi() {
  useDocumentProps({
    title: 'Typografi › Theodor Lundin',
    description: 'Typografin för theodorlundin.se'
  })
  const [jsx, raw, loading] = useMarkdown('/content/Typografi.md')

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
