import { useEffect, useState } from 'react'
import BookingForm from './BookingForm'

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-5"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 text-white"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <BookingForm />
      </div>
    </div>
  )
}
