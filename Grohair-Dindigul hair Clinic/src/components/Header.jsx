import logoImg from '../assets/Logo.png'
import PhoneIcon from './PhoneIcon'
import { useCallPopup } from '../context/CallPopupContext'
import { CLINIC_PHONE_DISPLAY } from '../constants'

export default function Header() {
  const { openCallPopup } = useCallPopup()

  return (
    <header className="flex items-center justify-between px-3 min-[375px]:px-4 min-[425px]:px-5 py-1 min-[375px]:py-1.5 min-[425px]:py-2 bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <img src={logoImg} alt="Grohair" className="h-[40px] min-[375px]:h-[50px] min-[425px]:h-[70px] w-auto object-contain" />

      <div className="flex items-center gap-4 min-[375px]:gap-5 min-[425px]:gap-6 h-full">
        {/* Treatments text-only button — no background */}
        <a 
          href="#treatments" 
          className="text-[14px] font-extrabold text-gray-900 border-b-2 border-transparent hover:border-red-700 transition-all active:scale-95 whitespace-nowrap pt-0.5"
        >
          Treatments
        </a>

        {/* Call button — opens call pop-up, which shows the number */}
        <button
          type="button"
          onClick={openCallPopup}
          aria-label={`Call us at ${CLINIC_PHONE_DISPLAY}`}
          className="w-9 h-9 bg-red-700 rounded-full flex items-center justify-center text-white shrink-0"
        >
          <PhoneIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
    </header>
  )
}
