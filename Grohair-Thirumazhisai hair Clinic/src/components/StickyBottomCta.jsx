import { useState, useEffect } from 'react'

const PHONE_NUMBER = '+919047656789'
const PHONE_DISPLAY = '90476 56789'

export default function StickyBottomCta() {
  const [showCallPopup, setShowCallPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowCallPopup(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-50 px-3 py-2 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)] flex items-center gap-2">
        {/* Call button */}
        <button
          type="button"
          onClick={() => setShowCallPopup(true)}
          aria-label="Call us"
          className="shrink-0 w-[52px] h-[46px] flex items-center justify-center rounded-2xl border-2 border-red-700 text-red-700 active:scale-95 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>

        {/* Book a Consultation button */}
        <a
          href="#book"
          className="btn-shimmer flex items-center justify-center gap-2 flex-1 min-w-0 text-white text-[14px] font-bold py-[13px] rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
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

      {/* Call popup */}
      {showCallPopup && (
        <div
          className="fixed top-0 left-0 right-0 h-dvh z-[60] flex items-center justify-center bg-black/60 px-6 py-6 overflow-y-auto"
          onClick={() => setShowCallPopup(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[320px] rounded-3xl bg-white p-6 text-center shadow-2xl my-auto"
          >
            <button
              type="button"
              onClick={() => setShowCallPopup(false)}
              aria-label="Close"
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="relative mx-auto mb-4 w-16 h-16">
              <span className="ping-slow absolute inset-0 rounded-full bg-red-700/40" />
              <div className="relative w-16 h-16 rounded-full bg-red-700 flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </div>

            <h3 className="text-[17px] font-extrabold text-gray-900 mb-1">Call Grohair Thirumazhisai</h3>
            <p className="text-[13px] text-gray-500 mb-4">Our hair experts are just a call away</p>

            <p className="text-[22px] font-extrabold text-red-700 tracking-wide mb-5">{PHONE_DISPLAY}</p>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="btn-shimmer flex items-center justify-center gap-2 w-full text-white text-[14px] font-bold py-3.5 rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setShowCallPopup(false)}
              className="w-full text-[13px] text-gray-400 font-semibold mt-3 py-1"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </>
  )
}
