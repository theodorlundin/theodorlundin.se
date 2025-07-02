import { Link } from 'react-router-dom'

export default function BoxyLink(props) {
  return (
    <Link
      className="relative cursor-pointer hover:before:absolute hover:before:top-0
        hover:before:-left-2 hover:before:-z-1 hover:before:aspect-square
        hover:before:w-3 hover:before:bg-cyan-500 hover:before:content-['']"
      {...props}
    >
      {props.children}
    </Link>
  )
}
