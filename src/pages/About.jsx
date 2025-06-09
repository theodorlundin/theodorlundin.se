import Footer from '../components/ui/footer/Footer'
import ContentLoader from '../components/ui/loaders/ContentLoader'
import Navbar from '../components/ui/navbar/Navbar'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useMarkdown from '../hooks/useMarkdown'
import ContainerNarrow from '../layouts/ContainerNarrow'

export default function About() {
  useDocumentTitle('Om mig › Theodor Lundin')
  const [jsx, raw, loading] = useMarkdown('/src/content/About.md')

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
