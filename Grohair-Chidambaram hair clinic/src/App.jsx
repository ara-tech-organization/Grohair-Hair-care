import { useState, useEffect, useCallback, useRef } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import logoHeader from './assets/logo-header.png'
import footerLogo from './assets/footer-logo.png'
import heroBg from './assets/hero-bg.jpg'
import prpImg from './assets/prp.jpg'
import gfcImg from './assets/gfc.jpg'
import mesoImg from './assets/mesotheraphy.jpg'
import dandruffImg from './assets/dandruff.jpg'
import before1 from './assets/before&after/before1.png'
import after1 from './assets/before&after/after1.png'
import before2 from './assets/before&after/before2.png'
import after2 from './assets/before&after/after2.png'
import before3 from './assets/before&after/before3.png'
import after3 from './assets/before&after/after3.png'
import before4 from './assets/before&after/before4.png'
import after4 from './assets/before&after/after4.png'
import before5 from './assets/before&after/before5.png'
import after5 from './assets/before&after/after5.png'

// Inline SVG icons to avoid external dependencies
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)


const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#D42A2A" opacity="0.12"/>
    <path d="M9 12l2 2 4-4" stroke="#D42A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PHONE_NUMBER = 'tel:+919411656789'
const PHONE_DISPLAY = '9411656789'
const PHONE_DISPLAY_FORMATTED = '94116 56789'

const PRIVACY_POLICY_URL = 'https://adgrohairgloskinchidambaram.in/privacy-policy.html'
const TERMS_URL = 'https://adgrohairgloskinchidambaram.in/terms-and-conditions.html'
const REFUND_POLICY_URL = 'https://adgrohairgloskinchidambaram.in/refund-cancellation-policy.html'
const COOKIE_POLICY_URL = 'https://adgrohairgloskinchidambaram.in/cookie-policy.html'
const COOKIE_CONSENT_KEY = 'grohair_cookie_consent'

const problems = [
  {
    title: 'Hair Fall?',
    lines: [
      'Losing more hair than usual?',
      "Don't ignore early signs of hair fall.",
      'Get expert care before it worsens.',
    ],
  },
  {
    title: 'Bald Patches?',
    lines: [
      'Noticing visible gaps or patchy hair loss?',
      'It could be a serious scalp condition.',
      'Consult a specialist before it spreads.',
    ],
  },
  {
    title: 'Slow Hair Growth?',
    lines: [
      'Hair not growing even after treatments?',
      'Weak roots and poor scalp health may be the reason.',
      'Restore natural growth with the right care.',
    ],
  },
  {
    title: 'Dandruff?',
    lines: [
      'Constant itching and flakes on your scalp?',
      'Dandruff can damage hair roots if untreated.',
      'Get proper scalp treatment for lasting relief.',
    ],
  },
]

function ProblemsCarousel() {
  const [current, setCurrent] = useState(0)
  const total = problems.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = () => {
    setCurrent((p) => (p - 1 + total) % total)
  }

  useEffect(() => {
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next])

  const item = problems[current]

  return (
    <section className="problems-section">
      <p className="section-label">Are you facing Hair Problems?</p>
      <div className="problem-carousel">
        <button className="problem-arrow" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div className="problem-card">
          <h3 className="problem-card-title">{item.title}</h3>
          {item.lines.map((line, i) => (
            <p key={i} className="problem-card-line">{line}</p>
          ))}
        </div>

        <button className="problem-arrow" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      <div className="problem-dots">
        {problems.map((_, i) => (
          <button
            key={i}
            className={`problem-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

const reviews = [
  {
    name: 'Jeeva K',
    time: '16 weeks ago',
    text: 'I recently completed three PRP sessions at Advanced GroHair & GloSkin, and the overall experience has been highly satisfying. The clinic maintains excellent hygiene standards, and the staff is well-trained, courteous, and professional. Each session was conducted efficiently, with the medical team explaining the procedure clearly and ensuring comfort throughout. I Excited to continue my sessions and see visible changes in my hair.',
  },
  {
    name: 'Raja D',
    time: '8 weeks ago',
    text: 'I recently completed CHS system for my personal at Advanced GroHair & GloSkin, and the overall experience has been highly satisfying. The clinic maintains excellent hygiene standards, and the staff is well-trained, courteous, and professional. Each session treating well, specially hair stylist Mansoor brother treating me well and doing great work.',
  },
  {
    name: 'Arjun Brintha',
    time: '5 weeks ago',
    text: 'I had a very good consultation experience. The consultant explained my problem clearly and suggested the right treatment. The staff were friendly and the clinic was clean and professional. I feel confident and satisfied after my visit.',
  },
  {
    name: 'Inba Sekar',
    time: '2 weeks ago',
    text: "I recently visited this clinic and I'm really satisfied with their consultation and the Doctor clearly explained the problem.",
  },
  {
    name: 'Raja Sree',
    time: '6 days ago',
    text: "I visited this clinic for hair loss consultation and I'm very happy with the service. The consultation was very thorough, and the doctor Elakiya patiently answered all my questions. They suggested a customized treatment plan. The staff is supportive and the follow-ups are well organized.",
  },
]

function ReviewsCarousel() {
  const [paused, setPaused] = useState(false)
  // Duplicate reviews for seamless infinite scroll
  const doubledReviews = [...reviews, ...reviews]

  return (
    <div
      className="reviews-carousel-wrapper"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className={`reviews-track ${paused ? 'paused' : ''}`}>
        {doubledReviews.map((review, i) => (
          <div className="review-card" key={i}>
            <div className="review-header">
              <div className="review-avatar">
                {review.name.charAt(0)}
              </div>
              <div className="review-info">
                <p className="review-name">{review.name}</p>
              </div>
            </div>
            <div className="review-stars">
              {[...Array(5)].map((_, j) => (
                <StarIcon key={j} />
              ))}
              <span className="review-time">{review.time}</span>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-google">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Review</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const baSlides = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
  { before: before4, after: after4 },
  { before: before5, after: after5 },
]

function ResultsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = baSlides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="results-section">
      <h2 className="section-title">
        Success Stories <span className="text-red">from Patients </span>
      </h2>
      <p className="section-subtitle">
        Visible transformations of our patients
      </p>

      {/* Zigzag Before/After Carousel */}
      <div className="ba-carousel">
        <div className="ba-zigzag">
          {/* Before — top left */}
          <div className="ba-card ba-before">
            <span className="ba-tag before">Before</span>
            <img src={baSlides[currentSlide].before} alt="Before treatment" />
          </div>
          {/* After — bottom right */}
          <div className="ba-card ba-after">
            <span className="ba-tag after">After</span>
            <img src={baSlides[currentSlide].after} alt="After treatment" />
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="ba-controls">
          <button className="ba-arrow" onClick={prevSlide} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="ba-dots">
            {baSlides.map((_, i) => (
              <button
                key={i}
                className={`ba-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="ba-arrow" onClick={nextSlide} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="reviews-section">
        <h2 className="section-title">
          Real Stories, <span className="text-red">Real Results</span>
        </h2>
        <ReviewsCarousel />
      </div>
    </section>
  )
}

// Generate 30-min slots from 10:00 AM to 8:00 PM (single time each)
function generateTimeSlots() {
  const slots = []
  let totalMins = 10 * 60 // start at 10:00 AM
  const endMins = 20 * 60  // end at 8:00 PM
  while (totalMins <= endMins) {
    const h = Math.floor(totalMins / 60)
    const m = totalMins % 60
    const ampm = h < 12 ? 'AM' : 'PM'
    const h12 = h % 12 === 0 ? 12 : h % 12
    slots.push(`${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`)
    totalMins += 30
  }
  return slots
}
const TIME_SLOTS = generateTimeSlots()

// Today's date in YYYY-MM-DD for the date input min attribute
const TODAY = new Date().toLocaleDateString('en-CA') // reliably gives YYYY-MM-DD

// Thank You Page Component
const ThankYou = () => {
  const navigate = useNavigate()
  
  return (
    <div className="thank-you-page">
      <div className="thank-you-card">
        <div className="thank-you-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#4caf50" opacity="0.15"/>
            <path d="M8 12l3 3 5-5" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Submission Successful!</h1>
        <p>Thank you for choosing GroHair Chidambaram. Our hair expert will contact you to confirm your appointment.</p>
        
        <div className="thank-you-info">
          <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: '700' }}>
            <a href="tel:9411656789" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 9411656789</a>
          </p>
        </div>
        
        <button onClick={() => navigate('/')} className="back-home-btn">
          Back Home
        </button>
      </div>
    </div>
  )
}

// Custom dropdown (replaces native <select>)
const CustomSelect = ({ id, name, value, onChange, options, placeholder }) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } })
    setOpen(false)
  }

  return (
    <div className="custom-select" ref={containerRef}>
      <button
        type="button"
        id={id}
        className={`custom-select-trigger ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? '' : 'custom-select-placeholder'}>{value || placeholder}</span>
        <svg className="custom-select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <ul className="custom-select-options" role="listbox">
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              className={`custom-select-option ${value === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Cookie consent banner
const CookieConsent = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(COOKIE_CONSENT_KEY)
    } catch {
      return true
    }
  })
  const [bottomOffset, setBottomOffset] = useState(0)

  useEffect(() => {
    if (!visible) return
    const stickyCta = document.querySelector('.sticky-cta')
    setBottomOffset(stickyCta ? stickyCta.getBoundingClientRect().height : 0)
  }, [visible])

  const handleChoice = (choice) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice)
    } catch {
      // localStorage unavailable, just dismiss for this session
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" style={{ bottom: bottomOffset }} role="dialog" aria-label="Cookie consent">
      <p className="cookie-banner-text">
        We use cookies to enhance your browsing experience, analyze site traffic and personalize content. Read our{' '}
        <a href={COOKIE_POLICY_URL} className="cookie-banner-link">Cookie Policy</a> to learn more about how we use cookies.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="cookie-btn cookie-btn-reject" onClick={() => handleChoice('rejected')}>
          Reject
        </button>
        <a href={COOKIE_POLICY_URL} className="cookie-btn cookie-btn-customize">
          Customize
        </a>
        <button type="button" className="cookie-btn cookie-btn-accept" onClick={() => handleChoice('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}

// Call confirmation pop-up
const CallPopup = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="call-popup-overlay" onClick={onClose}>
      <div className="call-popup" role="dialog" aria-label="Call GroHair & GloSkin" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="call-popup-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div className="call-popup-icon">
          <PhoneIcon />
        </div>
        <h3>Call GroHair &amp; GloSkin</h3>
        <p className="call-popup-subtitle">We&apos;re available to answer your questions</p>
        <p className="call-popup-number">{PHONE_DISPLAY_FORMATTED}</p>
        <a href={PHONE_NUMBER} className="call-popup-btn" onClick={onClose}>
          <PhoneIcon />
          Call Now
        </a>
        <button type="button" className="call-popup-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  )
}

function Home() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    date: '',
    timeSlot: '',
    message: '',
  })
  const [callPopupOpen, setCallPopupOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCallPopupOpen(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.timeSlot) {
      setSubmitted('error')
      setTimeout(() => setSubmitted(false), 3000)
      return
    }

    setSubmitted('loading')

    try {
      const payload = {
        name: formData.name,
        city: formData.city,
        phone: formData.phone,
        date: formData.date,
        time: formData.timeSlot,
        course: 'Clinic Consultation',
        message: formData.message || 'New appointment lead'
      }

      // Force redirect after 2.8 seconds to ensure user sees progress even if API is slow
      const timeoutRedirect = setTimeout(() => {
        navigate('/thank-you')
      }, 2800)

      const response = await fetch('https://adgrohairgloskinchidambaram.in/api/email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      
      if (data.success) {
        clearTimeout(timeoutRedirect)
        setSubmitted('success')
        navigate('/thank-you')
      } else {
        throw new Error('Server returned failure')
      }
    } catch (err) {
      console.error(err)
      // Don't clear timeoutRedirect here, if it fails quickly we want to show error
      setSubmitted('error')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <img src={logoHeader} alt="GroHair" className="header-logo" />
        <nav className="header-nav">
          <a href="#treatments" className="nav-link">Treatments</a>
          <button
            type="button"
            className="header-phone"
            aria-label={`Call us at ${PHONE_DISPLAY}`}
            onClick={() => setCallPopupOpen(true)}
          >
            <PhoneIcon />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Consult Expert Hair<br />
              <span className="hero-highlight">Doctor in Chidambaram</span>
            </h1>
            <p className="hero-subtitle">Best Hair treatment in Chidambaram</p>

            {/* Booking Form */}
            <form id="book-consultation" className="hero-form" onSubmit={handleSubmit}>
              <div className="hero-form-grid">
                <div className="hero-form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="hero-form-field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="hero-form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="hero-form-field">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={TODAY}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="hero-form-field">
                  <label htmlFor="timeSlot">Time Slot</label>
                  <CustomSelect
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    options={TIME_SLOTS}
                    placeholder="Select a time slot"
                  />
                </div>
                <div className="hero-form-field hero-form-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your concern..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className={`hero-form-submit ${submitted === 'success' ? 'success' : ''} ${submitted === 'error' ? 'error' : ''}`} 
                disabled={submitted === 'loading' || submitted === 'success'}
              >
                {submitted === 'loading' ? 'Sending...' : 
                 submitted === 'success' ? '✅ Booking Sent!' : 
                 submitted === 'error' ? '❌ Try Again' : 
                 'Book your Consultation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Badges - Google Rating + Guarantee Stamp */}
      <section className="badges-section">
        <div className="google-rating">
          <div className="g-icon">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div className="g-content">
            <p className="g-label">Google Rating <strong>4.8/5</strong></p>
            <div className="g-stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="guarantee-stamp">
          <div className="stamp-ring">
            <svg className="stamp-text-svg" viewBox="0 0 200 200">
              <defs>
                <path id="topArc" d="M 30,100 a 70,70 0 0,1 140,0" />
                <path id="bottomArc" d="M 170,100 a 70,70 0 0,1 -140,0" />
              </defs>
              <text className="stamp-curved-text">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">QUICK RESULTS</textPath>
              </text>
              <text className="stamp-curved-text">
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">VISIBLE RESULTS</textPath>
              </text>
            </svg>
            <div className="stamp-center">
              <div className="stamp-stars-top">&#9733; &#9733; &#9733;</div>
              <div className="stamp-main-text">GUARANTEE</div>
              <div className="stamp-stars-bottom">&#9733; &#9733; &#9733;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Are You Facing Section */}
      <ProblemsCarousel />

      {/* Treatments Section */}
      <section id="treatments" className="treatments-section">
        <h2 className="section-title">
          Our Advanced <span className="text-red">Hair Solutions</span>
        </h2>

        <div className="treatment-card">
          <div className="treatment-image-wrapper">
            <img src={prpImg} alt="PRP Treatment" />
          </div>
          <div className="treatment-content">
            <h3><span className="treatment-emoji"></span> PRP Treatment</h3>
            <p>Boost natural hair growth using your own growth factors.</p>
            <p>Strengthens hair roots and reduces hair fall effectively.</p>
          </div>
        </div>

        <div className="treatment-card">
          <div className="treatment-image-wrapper">
            <img src={gfcImg} alt="GFC Treatment" />
          </div>
          <div className="treatment-content">
            <h3><span className="treatment-emoji"></span> GFC Treatment</h3>
            <p>Advanced growth factor therapy for faster and stronger results.</p>
            <p>Improves hair density and promotes healthy regrowth.</p>
          </div>
        </div>

        <div className="treatment-card">
          <div className="treatment-image-wrapper">
            <img src={mesoImg} alt="Mesotherapy" />
          </div>
          <div className="treatment-content">
            <h3><span className="treatment-emoji"></span> Mesotherapy</h3>
            <p>Nutrient-rich injections to nourish hair follicles.</p>
            <p>Helps improve hair thickness and overall scalp condition.</p>
          </div>
        </div>

        <div className="treatment-card">
          <div className="treatment-image-wrapper">
            <img src={dandruffImg} alt="Dandruff & Scalp Treatments" />
          </div>
          <div className="treatment-content">
            <h3><span className="treatment-emoji"></span> Dandruff &amp; Scalp Treatments</h3>
            <p>Target the root cause of dandruff and scalp issues.</p>
            <p>Reduces itching, flakes, and restores scalp health.</p>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <ResultsSection />

      {/* Why Trust Us Section */}
      <section className="trust-section">
        <h2 className="section-title">
          Why <span className="text-red">Trust Us?</span>
        </h2>

        <div className="trust-items">
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D42A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <h4>Doctor Experience</h4>
              <p>
                Over 15+ years of specialized experience in trichology and
                advanced hair restoration procedures.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D42A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h4>Certifications</h4>
              <p>
                Certified by international hair restoration boards and leading
                medical associations.
              </p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D42A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <h4>5000+ Happy Patients</h4>
              <p>
                Proven track record with thousands of successful transformations
                and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <img src={footerLogo} alt="GroHair" className="footer-logo-img" />
          <p className="footer-tagline">
            Restore your confidence today with our expert hair restoration
            solutions.<br />Book your consultation now!
          </p>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>PRP Therapy</li>
            <li>GFC Therapy</li>
            <li>Mesotherapy</li>
            <li>Dandruff & Scalp Treatment</li>
          </ul>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <LocationIcon />
            <span>First Floor, 88, E Car St, above HDFC Bank, Chidambaram, Tamil Nadu 608001</span>
          </div>
          <div className="contact-item">
            <MailIcon />
            <span>chidambaram@adgrohair.com</span>
          </div>
          <a href={PHONE_NUMBER} className="contact-item contact-item-call">
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <div className="footer-legal-grid">
            <a href={PRIVACY_POLICY_URL}>Privacy Policy</a>
            <a href={REFUND_POLICY_URL}>Refund &amp; Cancellation Policy</a>
            <a href={TERMS_URL}>Terms &amp; Conditions</a>
            <a href={COOKIE_POLICY_URL}>Cookie Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; GroHair & GloSkin. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="sticky-cta">
        <button
          type="button"
          className="cta-button sticky call"
          aria-label="Call Now"
          onClick={() => setCallPopupOpen(true)}
        >
          <PhoneIcon />
        </button>
        <a href="#book-consultation" className="cta-button sticky book">
          Book a Consultation
        </a>
      </div>

      {callPopupOpen && <CallPopup onClose={() => setCallPopupOpen(false)} />}
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <CookieConsent />
    </>
  )
}

export default App
