import { CircleNotchIcon } from '@phosphor-icons/react'

export default function ContentLoader() {
  return (
    <div className="my-8 flex items-center justify-center gap-4">
      <CircleNotchIcon size={32} className="animate-spin fill-cyan-500" />
      <span>Laddar innehåll...</span>
    </div>
  )
}
