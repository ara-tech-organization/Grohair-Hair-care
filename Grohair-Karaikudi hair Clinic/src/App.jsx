import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import GuaranteeBanner from './components/GuaranteeBanner'
import TransformationSection from './components/TransformationSection'
import BeforeAfterSection from './components/BeforeAfterSection'
import FacingSection from './components/FacingSection'
import TreatmentsSection from './components/TreatmentsSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import StickyBottomCta from './components/StickyBottomCta'
import CookieConsent from './components/CookieConsent'
import ThankYou from './components/ThankYou'

function Home() {
  const bottomBarRef = useRef(null)
  const [bottomBarHeight, setBottomBarHeight] = useState(64)

  useEffect(() => {
    const el = bottomBarRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setBottomBarHeight(entry.contentRect.height))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ paddingBottom: bottomBarHeight }}>
      <Header />
      <Hero />
      <GuaranteeBanner />
      <BeforeAfterSection />
      <FacingSection />
      <TreatmentsSection />
      <TransformationSection />
      <CtaBanner />
      <Footer />
      <div ref={bottomBarRef} className="fixed bottom-0 inset-x-0 mx-auto w-full max-w-[425px] min-w-[320px] z-50 flex flex-col">
        <CookieConsent />
        <StickyBottomCta />
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  )
}

export default App
