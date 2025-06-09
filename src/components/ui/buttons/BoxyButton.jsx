export default function BoxyButton(props) {
  return (
    <button
      className={`cursor-pointer border-4 border-l-30 border-cyan-700 px-4 py-4 text-left
        leading-4 font-bold text-slate-800 [box-shadow:inset_0_0_0_0_#00759555]
        transition-shadow duration-400 ease-out
        hover:[box-shadow:inset_500px_0_0_0_#00759555] md:px-6 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
