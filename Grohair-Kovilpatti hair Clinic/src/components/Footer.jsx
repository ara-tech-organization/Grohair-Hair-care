import footerImg from '../assets/Footer.png'

const quickLinks = [
  { name: 'Home', link: '#hero' },
  { name: 'Before & After', link: '#results' },
  { name: 'Treatments', link: '#treatments' },
  { name: 'Patient Say', link: '#reviews' }
]
const services = [
  { name: 'PRP Therapy', link: '#prp' },
  { name: 'GFC Therapy', link: '#gfc' },
  { name: 'Scalp Care', link: '#scalp' },
  { name: 'Mesotherapy', link: '#meso' }
]

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Advanced+GroHair+%26+GloSkin+Kovilpatti,+Nellai+Bypass+Road,+V.O.C.+Nagar,+Kovilpatti,+Tamil+Nadu+628502'
const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8174242898203!2d77.85768887946988!3d9.173553167413566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b3dd2c2e6a31%3A0xc988c3b3599ed244!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Kovilpatti!5e1!3m2!1sen!2sin!4v1791367927202!5m2!1sen!2sin'
const INSTAGRAM_URL = 'https://www.instagram.com/adgrogloclinic.kovilpatti/'
const FACEBOOK_URL = 'https://www.facebook.com/people/AdGro-Hair-and-GloSkin-Kovilpatti/61590591973757/'

const legalLinks = [
  { name: 'Privacy Policy', link: 'https://adgrohairgloskinvellore.in/privacy-policy.html' },
  { name: 'Terms & Conditions', link: 'https://adgrohairgloskinvellore.in/terms-and-conditions.html' },
  { name: 'Refund & Cancellation Policy', link: 'https://adgrohairgloskinvellore.in/refund-cancellation-policy.html' },
  { name: 'Cookie Policy', link: 'https://adgrohairgloskinvellore.in/cookie-policy.html' }
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0f1117]">

      {/* ── Logo + tagline ── */}
      <div className="px-5 pt-7 pb-5 border-b border-white/10 flex items-center gap-3 min-[375px]:gap-4 min-[425px]:gap-6">
        <img src={footerImg} alt="Grohair" className="h-[64px] min-[375px]:h-[72px] min-[425px]:h-[80px] sm:h-24 w-auto object-contain shrink-0 bg-white rounded-lg" />
        <p className="text-[13px] min-[375px]:text-[15px] min-[425px]:text-[14px] text-white/60 leading-relaxed font-semibold whitespace-nowrap">Advanced Grohair &amp; Gloskin<br />Kovilpatti</p>
      </div>

      {/* ── Links ── */}
      <div className="flex px-5 py-6 border-b border-white/10 text-center">
        <div className="flex-1">
          <h4 className="text-[11px] font-extrabold text-white uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.name}><a href={l.link} className="text-[13px] text-white/50 hover:text-red-500 transition-colors">{l.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="w-px bg-white/10 mx-2 self-stretch" />
        <div className="flex-1">
          <h4 className="text-[11px] font-extrabold text-white uppercase tracking-widest mb-4">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.name}><a href={s.link} className="text-[13px] text-white/50 hover:text-red-500 transition-colors">{s.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Contact info ── */}
      <div className="px-5 py-5 border-b border-white/10 flex flex-col gap-4">

        {/* Address → Google Maps */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 active:text-red-500 group"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0 mt-0.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[12px] text-white/45 leading-relaxed hover:text-red-400 active:text-red-400 transition-colors">
            16, First Floor, No. 464, Nellai Bypass Road, Near Fire Station, V.O.C. Nagar, Kadershan Koil, Kovilpatti, Tamil Nadu – 628502
          </span>
        </a>

        {/* Phone → Dialer */}
        <a href="tel:+918098056789" className="flex items-center gap-3 group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="text-[12px] text-white/45 hover:text-red-400 active:text-red-400 transition-colors">080980 56789</span>
        </a>

        {/* Email → Mail app */}
        <a href="mailto:adgrokovilpatti@gmail.com" className="flex items-center gap-3 group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-red-500 shrink-0">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span className="text-[12px] text-white/45 hover:text-red-400 active:text-red-400 transition-colors">adgrokovilpatti@gmail.com</span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-red-500 hover:border-red-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-red-500 hover:border-red-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z" />
            </svg>
          </a>
        </div>

        {/* Map */}
        <iframe
          src={MAPS_EMBED_URL}
          title="Advanced GroHair & GloSkin Kovilpatti location"
          className="w-full h-48 rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </div>

      {/* ── Legal links ── */}
      <div className="px-5 py-4 border-b border-white/10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {legalLinks.map((l, i) => (
          <span key={l.name} className="flex items-center gap-3">
            <a
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/40 hover:text-red-500 transition-colors"
            >
              {l.name}
            </a>
            {i < legalLinks.length - 1 && <span className="text-white/15">|</span>}
          </span>
        ))}
      </div>

      {/* ── Copyright ── */}
      <div className="px-5 py-4 text-center">
        <p className="text-[11px] text-white/20">© 2026 GroHair &amp; GloSkin. All rights reserved.</p>
      </div>
    </footer>
  )
}
