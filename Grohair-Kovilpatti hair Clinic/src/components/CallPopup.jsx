const PHONE_DISPLAY = '80980 56789'
const PHONE_TEL = 'tel:+918098056789'

export default function CallPopup({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-6 py-10 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div
        className="relative w-full max-w-[320px] bg-white rounded-[22px] p-6 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-black/40 hover:text-black/70 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-700 flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        <h3 className="text-[16px] font-bold text-gray-900 mb-1">Call Grohair &amp; Gloskin</h3>
        <p className="text-[13px] text-black/50 mb-4 leading-relaxed">
          We're available to answer your questions
        </p>

        <a href={PHONE_TEL} className="block text-[22px] font-extrabold text-red-700 tracking-wide mb-5">
          {PHONE_DISPLAY}
        </a>

        <a
          href={PHONE_TEL}
          className="btn-shimmer flex items-center justify-center gap-2 w-full text-white text-[14px] font-bold py-3.5 rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-lg"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 text-[13px] text-black/50 hover:text-black/70 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
