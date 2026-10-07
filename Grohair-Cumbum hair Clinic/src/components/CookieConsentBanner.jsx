import { useEffect, useState } from 'react'

const COOKIE_POLICY_URL = 'https://adgrohairgloskincumbum.in/cookie-policy'
const CONSENT_KEY = 'grohair_cookie_consent'

export default function CookieConsentBanner() {
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

  if (!visible) return null

  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-50 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)] px-5 py-4">
      <p className="text-[13px] text-[#333] leading-relaxed mb-3">
        We use cookies to enhance your browsing experience, analyze site traffic and personalize content. Read our{' '}
        <a
          href={COOKIE_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-700"
        >
          Cookie Policy
        </a>{' '}
        to learn more about how we use cookies.
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleReject}
          className="flex-1 px-3 py-2.5 rounded-full border border-black/20 text-[13px] font-bold text-[#333] hover:bg-black/5 transition-colors"
        >
          Reject
        </button>
        <a
          href={COOKIE_POLICY_URL}
          className="flex-1 flex items-center justify-center px-3 py-2.5 rounded-full border border-red-600 text-[13px] font-bold text-red-600 hover:bg-red-50 transition-colors"
        >
          Customize
        </a>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 px-3 py-2.5 rounded-full bg-red-600 text-[13px] font-bold text-white hover:bg-red-700 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
