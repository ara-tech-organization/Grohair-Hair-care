import { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import BookFormSection from './components/BookFormSection'
import BookingPopup from './components/BookingPopup'
import GuaranteeBanner from './components/GuaranteeBanner'
import TransformationSection from './components/TransformationSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import FacingSection from './components/FacingSection'
import TreatmentsSection from './components/TreatmentsSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import StickyBottomCta from './components/StickyBottomCta'
import ThankYou from './components/ThankYou'

const SECTION_IDS = ['hero', 'problems', 'treatments', 'results', 'why-us', 'book', 'footer']

function Home() {
  const { section } = useParams()

  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }, [section])

  // Auto-update the URL to match whichever section is in view while scrolling
  // (plain history.replaceState — bypasses the router so it doesn't re-trigger the scroll effect above)
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
        const id = topMost.target.id
        const path = `/haircare${id === 'hero' ? '/' : `/${id}`}`
        if (window.location.pathname !== path) {
          window.history.replaceState(null, '', path)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pb-16">
      <Header />
      <Hero />
      <BookFormSection />
      <GuaranteeBanner />
      <BeforeAfterSection />
      <FacingSection />
      <TreatmentsSection />
      <TransformationSection />
      <CtaBanner />
      <Footer />
      <StickyBottomCta />
      <BookingPopup />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/:section" element={<Home />} />
    </Routes>
  )
}

export default App
