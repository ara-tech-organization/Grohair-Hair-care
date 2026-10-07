import { useNavigate } from 'react-router-dom'

export default function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="w-full max-w-[360px] rounded-[24px] p-8 text-center border border-white/30 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-5 mx-auto border border-green-500/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" className="w-8 h-8">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-white text-[22px] font-bold mb-3">Thank You!</h1>
        <p className="text-white/75 text-[14px] leading-relaxed mb-7">
          Your consultation request has been received.<br />
          Our team will contact you shortly.
        </p>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#dc2626] hover:bg-red-700 active:bg-red-800 transition-colors text-white text-[15px] font-bold py-3.5 rounded-[12px] shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
