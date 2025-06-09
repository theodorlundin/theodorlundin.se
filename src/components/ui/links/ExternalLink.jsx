import { ArrowUpRightIcon } from '@phosphor-icons/react'

export default function ExternalLink({ ...props }) {
  return (
    <a
      className={`flex w-max items-center gap-1 ${props.className}`}
      target="_blank"
      {...props}
    >
      {props.children}
      <ArrowUpRightIcon />
    </a>
  )
}
