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
import ThankYou from './components/ThankYou'
import { CallPopupProvider } from './context/CallPopupContext'

function Home() {
  return (
    <CallPopupProvider>
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
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[425px] min-w-[320px] z-50 flex flex-col">
          <StickyBottomCta />
        </div>
      </div>
    </CallPopupProvider>
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
