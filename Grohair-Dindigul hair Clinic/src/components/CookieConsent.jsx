import { useEffect, useState } from 'react'

const COOKIE_POLICY_URL = 'https://adgrohairgloskindindigul.in/cookie-policy'
const CONSENT_KEY = 'grohair_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  const handleCustomize = () => {
    window.location.href = COOKIE_POLICY_URL
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-40">
      <div className="bg-white shadow-[0_-2px_20px_rgba(0,0,0,0.18)] border-t border-gray-100 px-5 py-5">
        <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
          We use cookies to enhance your browsing experience, analyze site traffic and personalize content. Read our{' '}
          <a
            href={COOKIE_POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-semibold underline"
          >
            Cookie Policy
          </a>{' '}
          to learn more about how we use cookies.
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReject}
            className="flex-1 text-[13px] font-bold text-gray-700 border border-gray-200 rounded-xl py-2.5 active:scale-95 transition-all"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleCustomize}
            className="flex-1 text-[13px] font-bold text-red-700 border border-red-700 rounded-xl py-2.5 active:scale-95 transition-all"
          >
            Customize
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="btn-shimmer flex-1 text-[13px] font-bold text-white rounded-xl py-2.5 active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
