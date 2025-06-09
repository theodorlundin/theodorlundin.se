import WebsiteForm from '../components/features/websites/WebsiteForm'
import WebsitesHeader from '../components/features/websites/WebsitesHeader'
import WebsiteTier from '../components/features/websites/WebsiteTier'
import Footer from '../components/ui/footer/Footer'
import Navbar from '../components/ui/navbar/Navbar'
import useDocumentProps from '../hooks/useDocumentProps'
import Container from '../layouts/Container'
import ContainerNarrow from '../layouts/ContainerNarrow'
import { motion } from 'motion/react'

export default function Websites() {
  useDocumentProps({
    title: 'Köp en hemsida › Theodor Lundin',
    description:
      'Jag har utvecklat hemsidor i fem år. Jag jobbar gärna med dig!'
  })

  return (
    <div>
      <Navbar />
      <WebsitesHeader />
      <ContainerNarrow underHeader>
        <h2>Din drömhemsida</h2>
        <p>
          Jag har hållit på med webbutveckling sedan fem år tillbaka. Idag
          sysslar jag med <i>fullstack</i>-utveckling, d.v.s. att jag arbetar
          med såväl form och design, som servrar och databaser; det som
          besökaren aldrig ser. Det är en fantastisk process att utveckla en
          hemsida och få använda sin kreativitet. Vare sig du är en
          egenföretagare, privatperson eller har något annat projekt på gång
          jobbar jag gärna med dig! Jag vill höra precis hur du vill ha din
          hemsida, och sedan utvecklar jag den tillsammans med dig utefter dina
          behov och önskemål.
        </p>
        <h2>Paket</h2>
        <p>
          Jag erbjuder i första hand två paket. Vill du endast ha den färdiga
          hemsidan i form av filer redo att ladda upp på ditt webbhotell väljer
          du paketet <i>Enkel</i>. Har du ingen erfarenhet av webbhotell och
          hosting, eller bara vill fokusera på annat än hemsidan rekommenderar
          jag det andra paketet, <i>Allt-i-ett</i>. Då betalar du månatligen,
          jag utvecklar din hemsida och har hand om all teknik, och du kan när
          som helst be mig uppdatera hemsidans innehåll eller design. Har du ett
          eget förslag på upplägg kan du skicka ett meddelande till mig i
          formuläret längre ner på sidan.
        </p>
      </ContainerNarrow>
      <Container>
        <motion.div
          className="mt-20 grid items-start gap-x-8 gap-y-16 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{}}
        >
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.75, ease: 'circOut', delay: i * 0.5 }}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <WebsiteTier
                title={i === 0 ? 'Enkel' : 'Allt-i-ett'}
                description={
                  i === 0
                    ? 'Jag skapar en snygg hemsida efter dina behov och önskemål. Du ansvarar för domän och hosting.'
                    : 'Jag skapar en fulländad hemsida och ansvarar för domän och hosting. Du kan luta dig tillbaka och fokusera på annat.'
                }
                pros={
                  i === 0
                    ? [
                        'Skräddarsydd design',
                        'Engångsköp',
                        'Obegränsad funktionalitet'
                      ]
                    : [
                        'Skräddarsydd design',
                        'Fria uppdateringar',
                        'Obegränsad funktionalitet',
                        'Inget ansvar över drift'
                      ]
                }
                infoPoints={
                  i === 0
                    ? [
                        'Eget ansvar för domän och hosting',
                        'Extra kostnad för uppdatering'
                      ]
                    : ['Tjänst med månatlig avgift']
                }
                priceLine={
                  i === 0 ? (
                    <span>
                      Från <span className="text-cyan-600">2500</span> kr{' '}
                      <span className="text-lg font-bold text-slate-500">
                        engångsköp
                      </span>
                    </span>
                  ) : (
                    <span>
                      Start från <span className="text-cyan-600">3000</span> kr{' '}
                      <span className="text-lg font-bold text-slate-500">
                        därefter från 250kr i månaden
                      </span>
                    </span>
                  )
                }
                priceDetails={
                  'Priset ökar vid mer anvancerad funktion eller design.'
                }
                continueUrl={`/hemsida/${i === 0 ? 'enkel' : 'allt-i-ett'}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
      <ContainerNarrow bottomOfPage>
        <section className="mt-20">
          <h2>Egen offert</h2>
          <p className="mb-8">
            Har du ett eget förslag på upplägg? Inga problem! Skicka ett
            meddelande där du beskriver din idé så hittar vi en lösning
            tillsammans! Jag skapar då offert som passar din beställning.
          </p>
          <WebsiteForm />
        </section>
      </ContainerNarrow>
      <Footer />
    </div>
  )
}
