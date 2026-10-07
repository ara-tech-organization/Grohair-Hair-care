import { useNavigate } from 'react-router-dom'

export default function StickyBottomCta() {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-50 px-3 py-2 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
      <button
        type="button"
        onClick={() => navigate('/book')}
        className="btn-shimmer flex items-center justify-center gap-2 w-full text-white text-[14px] font-bold py-[13px] rounded-2xl uppercase tracking-wide active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 shrink-0">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Book Instant Consultation &ndash; 096260 56789
      </button>
    </div>
  )
}
