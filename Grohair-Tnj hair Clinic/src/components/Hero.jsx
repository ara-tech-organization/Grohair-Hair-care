import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle') // idle | sending | error
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()

    // Basic Validation
    if (!form.name || !form.phone || !form.date || !form.time) {
      alert('Please fill all required fields')
      return
    }

    if (form.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number')
      return
    }

    setStatus('sending')
    try {
      // Format date from YYYY-MM-DD to DD-MM-YYYY
      const dateParts = form.date.split('-')
      const formattedDate = dateParts.length === 3 ? `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}` : form.date

      // Format time from 24h to 12h AM/PM
      const [h, m] = form.time.split(':')
      const hour = parseInt(h)
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const h12 = hour % 12 || 12
      const formattedTime = `${h12}:${m} ${ampm}`

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: formattedDate,
        time: formattedTime,
        treatment: 'Hair-Treatment',
        message: form.message,
        source: 'Website '
      }

      const res = await fetch('https://adgrohairgloskinthanjavur.com/api/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
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
          className="absolute inset-0"
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
          <h1 className="text-[26px] leading-[32px] font-bold text-white mb-1 drop-shadow-md">
            Consult Expert Hair<br />
            Doctor in Thanjavur
          </h1>
          <p className="text-[14px] text-white/90 drop-shadow-md pb-1">
            Best Hair treatment in Thanjavur
          </p>
        </div>

        {/* Booking form card */}
        <div
          id="book"
          className="w-full max-w-[360px] rounded-[24px] p-5 text-left border border-white/30 shadow-2xl"
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
                placeholder="Your Name" required
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* Email */}
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Email Address" required
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* Phone */}
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="Phone Number" required pattern="[0-9]{10}"
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
              />

              {/* Date + Time slot — side by side */}
              <div className="flex gap-2">
                <input
                  type="date" name="date" value={form.date} onChange={handleChange} required
                  className="flex-1 min-w-0 bg-black/20 text-white/90 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
                  style={{ colorScheme: 'dark' }}
                />
                <input
                  type="time" name="time" value={form.time} onChange={handleChange} required
                  className="flex-1 min-w-0 bg-black/20 text-white/90 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all shadow-inner"
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              {/* Message */}
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Brief about your concern (optional)" rows={3}
                className="w-full bg-black/20 text-white placeholder-white/60 text-[14px] px-4 py-3 rounded-[14px] outline-none focus:border-white border border-white/30 focus:ring-1 focus:ring-white transition-all resize-none shadow-inner"
              />

              {status === 'error' && (
                <p className="text-red-400 text-[12px] text-center mt-1">Something went wrong. Please try again.</p>
              )}

              {/* Submit */}
              <button
                type="submit" disabled={status === 'sending'}
                className="btn-shimmer w-full transition-colors text-white text-[15px] font-bold py-3.5 rounded-[12px] shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : 'Book a Consultation'}
              </button>
            </form>

        </div>

      </div>
    </section>
  )
}
