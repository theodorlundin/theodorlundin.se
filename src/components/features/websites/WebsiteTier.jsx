import { InfoIcon, PlusCircleIcon } from '@phosphor-icons/react'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

export default function WebsiteTier({
  title = 'Tier',
  description = 'Detta är en tier',
  pros = [],
  infoPoints = [],
  target = 'Vill ha en hemsida',
  delivery = 'Inte Postnord',
  priceLine = 'Ett pris',
  priceDetails = 'Lite info om priset',
  continueUrl = '/'
}) {
  return (
    <div className="rounded-xl border-1 border-slate-300 px-8 py-6 pt-0">
      <h2 className="-mt-4 w-max bg-white px-2 text-3xl lg:text-xl xl:text-3xl">
        {title}
      </h2>
      <p className="my-6">{description}</p>
      <ul className="flex flex-col gap-3">
        {pros.map((pro) => (
          <span className="flex items-start gap-2">
            <PlusCircleIcon size={24} className="min-w-6 fill-emerald-500" />
            <li key={pro}>{pro}</li>
          </span>
        ))}
        {infoPoints.map((point) => (
          <span className="flex items-start gap-2">
            <InfoIcon size={24} className="min-w-6 fill-cyan-500" />
            <li key={point}>{point}</li>
          </span>
        ))}
      </ul>
      <div className="mt-8 rounded-lg bg-slate-100 p-4">
        <span className="mb-2 block text-xl font-black">Passar dig som...</span>
        <span>{target}</span>
        <span className="mt-4 block">
          <b>Levererans</b>: {delivery}
        </span>
      </div>
      <h2 className="mt-8 mb-4 leading-8">{priceLine}</h2>
      <i className="text-slate-500">{priceDetails}</i>
      <div className="grid place-items-center">
        <Link to={continueUrl}>
          <PrimaryButton className="mt-8">Fortsätt</PrimaryButton>
        </Link>
      </div>
    </div>
  )
}
