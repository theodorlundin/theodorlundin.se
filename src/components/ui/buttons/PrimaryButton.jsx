import { CircleNotchIcon } from '@phosphor-icons/react'

export default function PrimaryButton({
  children,
  onClick,
  loading = false,
  disabled,
  ...props
}) {
  return (
    <button
      className={`grid w-max cursor-pointer place-items-center rounded bg-cyan-700 px-8 py-2
        text-white transition-colors [grid-template-areas:"stack"]
        enabled:hover:bg-cyan-800 disabled:cursor-not-allowed disabled:grayscale-50
        ${props.className}`}
      disabled={disabled}
    >
      <span className={`[grid-area:stack] ${loading && 'invisible'}`}>
        {children}
      </span>
      <CircleNotchIcon
        size={24}
        className={`animate-spin [grid-area:stack] ${!loading && 'invisible'}`}
      />
    </button>
  )
}
