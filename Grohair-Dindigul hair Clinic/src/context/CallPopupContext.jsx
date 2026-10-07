import { createContext, useContext, useEffect, useState } from 'react'
import CallPopup from '../components/CallPopup'

const CallPopupContext = createContext(null)
const AUTO_OPEN_DELAY = 5000

export function CallPopupProvider({ children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), AUTO_OPEN_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return (
    <CallPopupContext.Provider value={{ openCallPopup: () => setOpen(true) }}>
      {children}
      <CallPopup open={open} onClose={() => setOpen(false)} />
    </CallPopupContext.Provider>
  )
}

export function useCallPopup() {
  const ctx = useContext(CallPopupContext)
  if (!ctx) throw new Error('useCallPopup must be used within CallPopupProvider')
  return ctx
}
