import { useNavigate } from 'react-router-dom'

export default function ThankYou() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg,#0a0a0a 0%,#1a0000 100%)' }}
    >
      <div
        className="w-full max-w-[340px] rounded-[24px] p-8 text-center border border-white/10 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Check icon */}
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-500/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" className="w-10 h-10">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-white text-[26px] font-extrabold mb-2">Thank You!</h1>
        <p className="text-white/70 text-[14px] leading-relaxed mb-8">
          We have received your consultation request.<br />
          Our team will contact you shortly.
        </p>

        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#dc2626] hover:bg-red-700 active:bg-red-800 transition-colors text-white text-[15px] font-bold py-3.5 rounded-[12px] shadow-lg"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
