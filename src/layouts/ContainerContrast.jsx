export default function ContainerContrast(props) {
  return (
    <div className="bg-slate-200">
      <div
        className={`mx-auto w-11/12 md:w-9/12 lg:w-8/12 ${props.className ?? ''}
          ${props.topOfPage ? 'pt-30' : ''} ${props.bottomOfPage ? 'pb-15' : ''}
          ${props.underHeader ? 'pt-12' : ''}`}
      >
        {props.children}
      </div>
    </div>
  )
}
