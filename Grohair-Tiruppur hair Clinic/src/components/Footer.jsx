import footerImg from '../assets/Footer.png'

const services = [
  { name: 'Hair Fall Treatment', link: '#treatments' },
  { name: 'GFC Therapy', link: '#treatments' },
  { name: 'Mesotherapy', link: '#treatments' },
  { name: 'Dandruff & Scalp Treatment', link: '#treatments' },
]

const CLINIC_ADDRESS = '172/3, Marudhachalapuram Main Rd, Near 60 Feet Rd, Tiruppur, Tamil Nadu 641603'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white/70">

      {/* ── Logo + tagline ── */}
      <div className="flex items-center gap-4 px-5 pt-7 pb-5 border-b border-white/10">
        <img src={footerImg} alt="Grohair" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
        <p className="text-[13px] leading-relaxed text-white/60">
          Restore your confidence today with our expert hair restoration solutions.<br />
          Book your consultation now!
        </p>
      </div>

      {/* ── Services + Contact ── */}
      <div className="flex flex-col gap-6 px-5 py-6 border-b border-white/10">
        <div>
          <h4 className="text-[14px] font-semibold text-white mb-3">Our Services</h4>
          <ul className="grid grid-cols-2 gap-2.5">
            {services.map((s) => (
              <li key={s.name}>
                <a href={s.link} className="text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[14px] font-semibold text-white mb-1">Contact Us</h4>

          <a href="mailto:tiruppur@adgrohair.com" className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>tiruppur@adgrohair.com</span>
          </a>

          <a href="tel:+919626056789" className="flex items-center gap-2.5 text-[13px] text-white/55 hover:text-red-400 active:text-red-400 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>096260 56789</span>
          </a>
        </div>
      </div>

      {/* ── Our Clinics ── */}
      <div id="locations" className="px-5 py-6 border-b border-white/10">
        <h4 className="text-[14px] font-semibold text-white mb-4">Our Clinics</h4>

        <h5 className="text-[15px] font-extrabold text-white mb-2.5">Tiruppur</h5>

        <div className="aspect-[16/10] relative rounded-xl overflow-hidden">
          <iframe
            src={MAPS_EMBED_URL}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Grohair Tiruppur Location"
          />
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2.5 mt-3 text-[13px] text-white/55 leading-relaxed hover:text-red-400 active:text-red-400 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-primary shrink-0 mt-0.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{CLINIC_ADDRESS}</span>
        </a>
      </div>

      {/* ── Copyright ── */}
      <div className="px-5 py-4 text-center">
        <p className="text-[11px] text-white/35">© 2026 GroHair &amp; GloSkin. All rights reserved.</p>
      </div>
    </footer>
  )
}
