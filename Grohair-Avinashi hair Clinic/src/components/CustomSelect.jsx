import { useEffect, useRef, useState } from 'react'

export default function CustomSelect({ name, value, onSelect, placeholder, options }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between bg-black/20 text-[14px] px-4 py-3 rounded-[14px] outline-none border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner ${value ? 'text-white/90' : 'text-white/60'}`}
      >
        <span>{value || placeholder}</span>
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`w-4 h-4 text-white/70 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-20 mt-2 w-full max-h-56 overflow-y-auto rounded-[14px] border border-white/20 bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => { onSelect(name, opt); setOpen(false) }}
                className={`w-full text-left px-4 py-3 text-[14px] transition-colors hover:bg-white/10 ${opt === value ? 'text-red-500 font-semibold' : 'text-white/85'}`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
