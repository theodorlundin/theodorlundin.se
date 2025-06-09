export default function Textarea({ label, value, ...props }) {
  return (
    <span className="flex flex-col-reverse gap-1">
      <textarea
        placeholder={props.placeholder}
        className="resize-y border-b-2 border-slate-300 px-2 pt-1 pb-2 transition-colors
          outline-none focus:border-cyan-700 focus:[&+label]:text-cyan-700"
        {...props}
        value={value}
      />
      {label && <label className="text-sm">{label}</label>}
    </span>
  )
}
