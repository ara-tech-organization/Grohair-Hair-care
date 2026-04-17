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
import ThankYou from './pages/ThankYou'

function Home() {
  return (
    <div className="pb-16">
      <Header />
      <Hero />
      <GuaranteeBanner />
      <BeforeAfterSection />
      <FacingSection />
      <TreatmentsSection />
      <TransformationSection />
      <CtaBanner />
      <Footer />
      <StickyBottomCta />
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
