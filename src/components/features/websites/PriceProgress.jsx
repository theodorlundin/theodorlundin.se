import { motion } from 'framer-motion'

export default function PriceProgress() {
  const priceSteps = [
    {
      title: '3000-6000kr',
      infoPoints: ['Statisk', 'Låg interaktionsnivå', 'Endast online-närvaro']
    },
    {
      title: '6000-13 000kr',
      infoPoints: [
        'Större antal sidor',
        'Högre interaktionsnivå, t.ex. formulär',
        'Animationer'
      ]
    },
    {
      title: '13 000-20 000kr',
      infoPoints: [
        'Dynamisk, t.ex. blogg eller nyhetssida',
        'Avancerad SEO-optimering',
        'Hög interaktionsnivå'
      ]
    },
    {
      title: '20 000kr+',
      infoPoints: [
        'E-handelsfunktioner',
        'Avancerade boknings- eller medlemssystem',
        'Administrationssidor',
        'Kundportal'
      ]
    }
  ]

  const PriceStep = ({ title, infoPoints = [], last = false }) => (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-[50px_1fr] items-center">
        <div className="aspect-square w-5 justify-self-center bg-cyan-600" />
        <span className="text-lg font-black">{title}</span>
      </div>
      <div className="grid grid-cols-[50px_1fr]">
        {last ? (
          <div></div>
        ) : (
          <div className="h-full justify-self-center border-l-2 border-cyan-600"></div>
        )}
        <ul className="list-disc pb-4 pl-6">
          {infoPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="ml-4">
      {priceSteps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <PriceStep {...step} last={i === priceSteps.length - 1} />
        </motion.div>
      ))}
    </div>
  )
}
