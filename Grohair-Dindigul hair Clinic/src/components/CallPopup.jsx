import PhoneIcon from './PhoneIcon'
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from '../constants'

export default function CallPopup({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-2xl p-6 text-center"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="w-14 h-14 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center relative">
          <span className="absolute inset-0 rounded-full bg-red-700 ping-slow" />
          <PhoneIcon className="w-6 h-6 text-white relative" />
        </div>

        <h3 className="text-[16px] font-extrabold text-gray-900 mb-1">Call Grohair &amp; Gloskin</h3>
        <p className="text-[13px] text-gray-500 mb-4">We're available to answer your questions</p>

        <p className="text-[22px] font-extrabold text-red-700 tracking-wide mb-5">{CLINIC_PHONE_DISPLAY}</p>

        <a
          href={`tel:${CLINIC_PHONE_TEL}`}
          className="btn-shimmer flex items-center justify-center gap-2 w-full text-white text-[14px] font-bold py-3.5 rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
        >
          <PhoneIcon className="w-4 h-4" />
          Call Now
        </a>

        <button
          type="button"
          onClick={onClose}
          className="w-full text-[13px] text-gray-500 font-semibold py-3 mt-1"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
