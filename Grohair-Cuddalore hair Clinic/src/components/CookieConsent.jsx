import { useEffect, useState } from 'react'

const COOKIE_POLICY_URL = 'https://adgrohairgloskincuddalore.in/cookie-policy.html'
const STORAGE_KEY = 'grohair_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const saveConsent = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, date: new Date().toISOString() }))
    } catch {
      // localStorage unavailable — proceed without persisting
    }
    setVisible(false)
  }

  const handleAcceptAll = () => saveConsent({ status: 'accepted', necessary: true, analytics: true, marketing: true })
  const handleReject = () => saveConsent({ status: 'rejected', necessary: true, analytics: false, marketing: false })

  if (!visible) return null

  return (
    <div className="bg-white border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-4 py-4">
      <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
        We use cookies to run this website, understand how it is used, and show relevant offers. Read our{' '}
        <a
          href={COOKIE_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline font-semibold"
        >
          Cookie Policy
        </a>
        . You can accept, reject, or customize your choice.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleReject}
          className="flex-1 min-w-[90px] text-[12px] font-bold text-gray-800 border border-gray-300 rounded-full py-2.5 active:scale-95 transition-transform"
        >
          Reject
        </button>
        <a
          href={COOKIE_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[90px] text-center text-[12px] font-bold text-red-600 border border-red-600 rounded-full py-2.5 active:scale-95 transition-transform"
        >
          Customize
        </a>
        <button
          onClick={handleAcceptAll}
          className="flex-1 min-w-[90px] text-[12px] font-bold text-white bg-red-600 hover:bg-red-700 rounded-full py-2.5 active:scale-95 transition-transform shadow-[0_4px_12px_rgba(220,38,38,0.35)]"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
