import { createContext, useContext, useEffect, useState } from 'react'
import CallPopup from '../components/CallPopup'

const CallPopupContext = createContext(() => {})

export function CallPopupProvider({ children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <CallPopupContext.Provider value={() => setOpen(true)}>
      {children}
      <CallPopup open={open} onClose={() => setOpen(false)} />
    </CallPopupContext.Provider>
  )
}

export function useCallPopup() {
  return useContext(CallPopupContext)
}
