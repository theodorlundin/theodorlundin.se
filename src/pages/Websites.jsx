import WebsiteForm from '../components/features/websites/WebsiteForm'
import WebsitesHeader from '../components/features/websites/WebsitesHeader'
import WebsiteTier from '../components/features/websites/WebsiteTier'
import Footer from '../components/ui/footer/Footer'
import Navbar from '../components/ui/navbar/Navbar'
import useDocumentProps from '../hooks/useDocumentProps'
import ContainerNarrow from '../layouts/ContainerNarrow'
import { motion } from 'motion/react'

const websiteTiers = [
  {
    title: 'Design',
    description:
      'Jag bygger din hemsida efter dina behov och önskemål. Du ansvarar för domän och hosting.',
    pros: ['Skräddarsydd design', 'Engångsbetalning', 'Full kontroll'],
    infoPoints: [
      'Extra kostnad för uppdatering',
      'Eget ansvar för domän och hosting'
    ],
    priceLine: (
      <span>
        Från <span className="text-cyan-600">1399</span> kr{' '}
        <span className="text-lg font-bold text-slate-500">engångsköp</span>
      </span>
    ),
    priceDetails:
      'Priset sätts efter hemsidans omfattning. Priset är exklusive moms.',
    target: 'Har koll på hosting och vill ha full kontroll och teknisk frihet.',
    delivery: 'Filer eller publicering på ditt eget webbhotell',
    url: 'design'
  },
  {
    title: 'Digital närvaro',
    description:
      'En enklare hemsida för dig som privatperson eller nyligen startat företag som vill ha digital närvaro.',
    pros: [
      'Skräddarsydd design',
      'Obegränsat antal e-postadresser (epost@dinhemsida.se)',
      'Hosting, domän & underhåll ingår',
      'Fria uppdateringar & support',
      'Ingen teknisk kunskap krävs',
      'Hög säkerhet och ständig felsökning',
      'Domän & innehåll licenserat till dig'
    ],
    infoPoints: [
      'Löpande tjänst (WaaS) med licensering',
      'Begränsad avancerad funktionalitet',
      'Maxstorlek på 10GB'
    ],
    priceLine: (
      <span>
        Från <span className="text-cyan-600">1699</span> kr{' '}
        <span className="text-lg font-bold text-slate-500">per år</span>
      </span>
    ),
    priceDetails:
      'Priset sätts efter hemsidans omfattning. Priset är exklusive moms.',
    target:
      'Privatperson eller nyligen startat företag som vill vara närvarande online.',
    delivery:
      'Drivs på en av mina servrar i Sverige, domän & innehåll licenserat till dig',
    url: 'digital-narvaro'
  },
  {
    title: 'Business',
    description:
      'En fulländad hemsida för dig som driver eget eller små företag som söker en snygg och interaktiv hemsida.',
    pros: [
      'Skräddarsydd design',
      'Obegränsat antal e-postadresser (epost@dinhemsida.se)',
      'Hosting, domän & underhåll ingår',
      'Fria uppdateringar & support',
      'Ingen teknisk kunskap krävs',
      'Hög säkerhet och ständig felsökning',
      'Domän & innehåll licenserat till dig',
      'Ingen maxstorlek',
      'Avancerad funktionalitet, t.ex. bokningssystem, kundportaler och e-handel',
      'Prioriterad support'
    ],
    infoPoints: ['Löpande tjänst (WaaS) med licensering'],
    priceLine: (
      <span>
        Från <span className="text-cyan-600">1999</span> kr{' '}
        <span className="text-lg font-bold text-slate-500">per år</span>
      </span>
    ),
    priceDetails:
      'Priset sätts efter hemsidans omfattning. Priset är exklusive moms.',
    target:
      'Driver egen firma, och småföretag som vill ha en trygg, interaktiv och uppdaterad hemsida utan krångel.',
    delivery:
      'Drivs på en av mina servrar i Sverige, domän & innehåll licenserat till dig',
    url: 'business'
  }
]

export default function Websites() {
  useDocumentProps({
    title: 'Köp en hemsida › Theodor Lundin'
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
          med såväl form och design, som servrar och databaser. Det är en
          fantastisk process att utveckla en hemsida och få använda sin
          kreativitet. Vare sig du är en egenföretagare, privatperson eller har
          något annat projekt på gång jobbar jag gärna med dig! Jag vill höra
          precis hur du vill ha din hemsida, och sedan utvecklar jag den
          tillsammans med dig utefter dina behov och önskemål.
        </p>
        <h2>Paket</h2>
        <p>
          Jag erbjuder i första hand tre paket. Vill du endast ha den färdiga
          hemsidan i form av filer redo att ladda upp på ditt webbhotell väljer
          du paketet <i>Design</i>. Har du ingen erfarenhet av webbhotell och
          hosting, eller bara vill fokusera på annat än hemsidan rekommenderar
          jag de andra paketet, <i>Digital närvaro</i> och <i>Business</i>. Då
          betalar du årligen, jag utvecklar din hemsida och har hand om all
          teknik. Du kan när som helst begära uppdateringar av hemsidans
          innehåll eller design, helt utan extra kostnad. Har du ett eget
          förslag på upplägg kan du skicka ett meddelande till mig i formuläret
          längre ner på sidan, så kanske du kan få en egen offert.
        </p>
      </ContainerNarrow>
      <div className="mx-auto w-11/12">
        <motion.div
          className="mt-20 grid items-start gap-x-8 gap-y-16 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{}}
        >
          {websiteTiers.map((tier, i) => (
            <motion.div
              key={i}
              transition={{ duration: 0.75, ease: 'circOut', delay: i * 0.5 }}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <WebsiteTier
                title={tier.title}
                description={tier.description}
                pros={tier.pros}
                infoPoints={tier.infoPoints}
                target={tier.target}
                delivery={tier.delivery}
                priceLine={tier.priceLine}
                priceDetails={tier.priceDetails}
                continueUrl={`/hemsida/${tier.url}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
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
