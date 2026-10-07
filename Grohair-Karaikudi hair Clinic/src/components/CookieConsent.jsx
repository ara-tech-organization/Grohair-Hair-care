import { useState } from 'react'

const COOKIE_POLICY_URL = 'https://adgrohairkaraikudi.in/cookie-policy.html'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  function handleConsent() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-[0_-2px_16px_rgba(0,0,0,0.12)] px-4 py-4">
      <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
        We use cookies to enhance your browsing experience, analyze site traffic and personalize content. Read our{' '}
        <a
          href={COOKIE_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 font-bold underline underline-offset-2"
        >
          Cookie Policy
        </a>{' '}
        to learn more about how we use cookies.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleConsent}
          className="flex-1 text-[12.5px] font-bold text-gray-800 bg-gray-100 rounded-lg py-2.5 active:scale-95 transition-all"
        >
          Reject
        </button>
        <a
          href={COOKIE_POLICY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center text-[12.5px] font-bold text-red-700 border border-red-700 rounded-lg py-2.5 active:scale-95 transition-all"
        >
          Customize
        </a>
        <button
          type="button"
          onClick={handleConsent}
          className="btn-shimmer flex-1 text-[12.5px] font-bold text-white rounded-lg py-2.5 active:scale-95 transition-all shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
