import { LazyLoadImage } from 'react-lazy-load-image-component'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import { Link } from 'react-router-dom'

export default function MediaSection({
  imgSrc,
  title,
  content,
  ctaText,
  ctaUrl,
  ...props
}) {
  return (
    <div
      className={`relative grid grid-cols-1 grid-rows-6 xl:grid-cols-6 xl:grid-rows-1
        ${props.className}`}
      {...props}
    >
      <div
        className="[grid-row:1_/_5] bg-slate-200 px-[10%] pt-20 pb-[35%] md:pb-[25%]
          xl:[grid-column:1_/_5] xl:[grid-row:1] xl:pr-[40%] xl:pb-20 xl:pl-[10%]"
      >
        <h2 className="mb-4 text-4xl">{title}</h2>
        <p className="mb-8">{content}</p>
        <Link to={ctaUrl}>
          <PrimaryButton>{ctaText}</PrimaryButton>
        </Link>
      </div>
      <LazyLoadImage
        src={imgSrc}
        alt=""
        className="absolute [grid-row:3_/_7] aspect-[5/3] w-[75%] self-center justify-self-center
          rounded bg-slate-400 object-cover md:[grid-row:4_/_7] xl:[grid-column:4_/_7]
          xl:[grid-row:1] xl:w-full xl:justify-self-start"
      ></LazyLoadImage>
    </div>
  )
}
