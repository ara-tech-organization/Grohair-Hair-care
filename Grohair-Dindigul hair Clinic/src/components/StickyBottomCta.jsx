import PhoneIcon from './PhoneIcon'
import { useCallPopup } from '../context/CallPopupContext'
import { CLINIC_PHONE_DISPLAY } from '../constants'

export default function StickyBottomCta() {
  const { openCallPopup } = useCallPopup()

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-50 flex items-center gap-2 px-3 py-2 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
      <button
        type="button"
        onClick={openCallPopup}
        aria-label={`Call us at ${CLINIC_PHONE_DISPLAY}`}
        className="flex items-center justify-center shrink-0 w-[46px] h-[46px] border-2 border-red-700 text-red-700 rounded-full active:scale-95 transition-all"
      >
        <PhoneIcon className="w-5 h-5 shrink-0" />
      </button>

      <a
        href="#book"
        className="btn-shimmer flex-1 flex items-center justify-center gap-2 text-white text-[14px] font-bold py-[13px] rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 shrink-0">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book a Consultation
      </a>
    </div>
  )
}
