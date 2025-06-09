export default function BoxyLink(props) {
  return (
    <a
      className="relative cursor-pointer hover:before:absolute hover:before:top-0
        hover:before:-left-2 hover:before:-z-1 hover:before:aspect-square
        hover:before:w-3 hover:before:bg-cyan-500 hover:before:content-['']"
      {...props}
    >
      {props.children}
    </a>
  )
}
