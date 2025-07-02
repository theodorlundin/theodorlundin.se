import { motion } from 'framer-motion'

export default function PriceProgress() {
  const priceSteps = [
    {
      title: '2000-3000kr',
      infoPoints: ['Statisk', 'Låg interaktionsnivå', 'Endast online-närvaro']
    },
    {
      title: '3000-5000kr',
      infoPoints: [
        'Högre interaktionsnivå, t.ex. formulär',
        'Dynamisk, t.ex. blogg eller nyhetssida',
        'Animationer'
      ]
    },
    {
      title: '5000-7000kr',
      infoPoints: ['Administrationssidor', 'Bokningssystem', 'Kundportal']
    },
    {
      title: '7000kr+',
      infoPoints: [
        'Stort antal sidor',
        'E-handelsfunktioner',
        'Avancerade boknings- eller medlemssystem'
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
