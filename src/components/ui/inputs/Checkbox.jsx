import { CheckIcon } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Checkbox({ children, onInput, ...props }) {
  const [checked, setChecked] = useState(false)
  const [focus, setFocus] = useState(false)

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="h-0 w-0"
        onInput={(e) => {
          setChecked(e.target.checked)
          onInput(e.target.checked)
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
      <span
        className={`relative h-4 w-4 border-2
          ${checked ? 'border-cyan-700 bg-cyan-700' : 'border-slate-300'} ${ focus &&
          'ring-1 ring-cyan-500 ring-offset-1' }`}
      >
        <CheckIcon
          size={16}
          className={`${checked ? 'absolute top-1/2 left-1/2 block -translate-x-1/2 -translate-y-1/2 fill-white' : 'hidden'}`}
        />
      </span>
      <span>{children}</span>
    </label>
  )
}
