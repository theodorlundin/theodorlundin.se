import { InfoIcon, PlusCircleIcon } from '@phosphor-icons/react'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

export default function WebsiteTier({
  title = 'Tier',
  description = 'Detta är en tier',
  pros = [],
  infoPoints = [],
  priceLine = 'Ett pris',
  priceDetails = 'Lite info om priset',
  continueUrl = '/'
}) {
  return (
    <div className="rounded-xl border-1 border-slate-300 px-8 py-6 pt-0">
      <h2 className="-mt-6 w-max bg-white px-2 text-4xl">{title}</h2>
      <p className="my-6">{description}</p>
      <ul className="flex flex-col gap-4">
        {pros.map((pro) => (
          <span className="flex items-center gap-2">
            <PlusCircleIcon size={32} className="fill-emerald-500" />
            <li key={pro}>{pro}</li>
          </span>
        ))}
        {infoPoints.map((point) => (
          <span className="flex items-center gap-2">
            <InfoIcon size={32} className="fill-cyan-500" />
            <li key={point}>{point}</li>
          </span>
        ))}
      </ul>
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
