import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'
import CustomSelect from './CustomSelect'

const BRANCH_OPTIONS = ['RS Puram', 'Avinashi Road']
const TREATMENT_OPTIONS = ['Hair Transplant', 'Hair Fall Treatment', 'Hair Regrowth Treatment', 'Skin Treatment', 'Other']

export default function Hero() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [form, setForm] = useState({ name: '', city: '', phone: '', branch: '', treatment: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSelect = (name, value) => setForm({ ...form, [name]: value })

  async function handleSubmit(e) {
    e.preventDefault()

    // Basic Validation
    if (!form.name || !form.city || !form.phone || !form.branch || !form.treatment) {
      alert('Please fill all required fields')
      return
    }

    if (form.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://adgrocoimbatore.com/api/email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'lead_form_submitted' })
        setForm({ name: '', city: '', phone: '', branch: '', treatment: '' })
        navigate('/thankyou')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col overflow-hidden bg-[#0a0a0a]"
      style={{ minHeight: 'auto' }}
    >
      {/* Background image layer */}
      {heroBg && (
        <div
          className="absolute inset-0 hero-bg-overlay"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/40"
      />
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 pb-6 flex-1 justify-center">

        {/* Hero Text */}
        <div className="mb-4 text-center pt-4">
          <h1 className="hero-title text-[26px] leading-[32px] font-bold text-white mb-1 drop-shadow-md">
            Consult Expert Hair<br />
            Doctor in Avinashi Road
          </h1>
          <p className="hero-subtitle text-[14px] text-white/90 drop-shadow-md pb-1">
            Best Hair treatment in Avinashi Road
          </p>
        </div>

        {/* Booking form card */}
        <div
          id="book"
          className="hero-form-card w-full max-w-[360px] rounded-[24px] p-5 text-left border border-white/30 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-1">

              {/* Name */}
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Enter your name" required
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* City */}
              <input
                type="text" name="city" value={form.city} onChange={handleChange}
                placeholder="Enter your city" required
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* Phone */}
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="Enter your 10-digit mobile number" required pattern="[0-9]{10}"
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* Preferred Clinic Location */}
              <CustomSelect
                name="branch" value={form.branch} onSelect={handleSelect}
                placeholder="Preferred Clinic Location" options={BRANCH_OPTIONS}
              />

              {/* Select Your Treatment */}
              <CustomSelect
                name="treatment" value={form.treatment} onSelect={handleSelect}
                placeholder="Select Your Treatment" options={TREATMENT_OPTIONS}
              />

              {status === 'error' && (
                <p className="text-red-400 text-[12px] text-center mt-1">Something went wrong. Please try again.</p>
              )}

              {/* Submit */}
              <button
                type="submit" disabled={status === 'sending'}
                className="btn-shimmer w-full active:bg-red-800 transition-colors text-white text-[15px] font-bold py-3.5 rounded-[12px] shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : 'Book Your Consultation'}
              </button>
            </form>

        </div>

      </div>
    </section>
  )
}
