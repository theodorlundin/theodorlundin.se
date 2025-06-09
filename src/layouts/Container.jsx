export default function Container(props) {
  return (
    <div
      className={`mx-auto w-11/12 md:w-9/12 lg:w-8/12 ${props.className ?? ''}
        ${props.topOfPage ? 'pt-30' : ''} ${props.bottomOfPage ? 'pb-15' : ''}
        ${props.underHeader ? 'pt-20' : ''}`}
    >
      {props.children}
    </div>
  )
}
