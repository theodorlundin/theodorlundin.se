import { EnvelopeSimpleIcon, InstagramLogoIcon } from '@phosphor-icons/react'
import Footer from '../components/ui/footer/Footer'
import Navbar from '../components/ui/navbar/Navbar'
import Container from '../layouts/Container'
import ContainerNarrow from '../layouts/ContainerNarrow'
import ContactForm from '../components/features/contact/ContactForm'
import useDocumentProps from '../hooks/useDocumentProps'

export default function Contact() {
  useDocumentProps({
    title: 'Kontakt › Theodor Lundin'
  })

  return (
    <div>
      <Navbar />
      <ContainerNarrow topOfPage>
        <h1>Kontakt</h1>
        <p>
          Tveka inte att kontakta mig! Jag svarar så snart jag kan, oftast inom
          en dag.
        </p>
      </ContainerNarrow>
      <Container bottomOfPage>
        <div className="mt-12 grid gap-x-4 gap-y-12 xl:grid-cols-2">
          <div>
            <h2 className="mb-8">Kontaktuppgifter</h2>
            <div className="grid gap-2">
              <span className="flex items-center gap-2">
                <EnvelopeSimpleIcon size={24} className="fill-cyan-600" />
                theodor.lundin@theodorlundin.se
              </span>
              <span className="flex items-center gap-2">
                <InstagramLogoIcon size={24} className="fill-cyan-600" />
                theodor_lundin
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </div>
  )
}
