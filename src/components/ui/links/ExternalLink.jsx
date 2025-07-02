import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function ExternalLink({ ...props }) {
  return (
    <Link
      className={`flex w-max items-center gap-1 ${props.className}`}
      target="_blank"
      {...props}
    >
      {props.children}
      <ArrowUpRightIcon />
    </Link>
  )
}
