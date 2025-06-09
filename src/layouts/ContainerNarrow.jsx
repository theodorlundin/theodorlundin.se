export default function ContainerNarrow(props) {
  return (
    <div
      className={`mx-auto w-11/12 md:w-7/12 lg:w-5/12 ${props.className ?? ''}
        ${props.topOfPage ? 'pt-30' : ''} ${props.bottomOfPage ? 'pb-15' : ''}
        ${props.underHeader ? 'pt-12' : ''}`}
    >
      {props.children}
    </div>
  )
}
