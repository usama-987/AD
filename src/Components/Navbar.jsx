import { useState, useEffect } from 'react'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  return (
    <nav className="bg-[#f5f0eb] px-4 py-4">
      <div className="flex items-center justify-between md:justify-center gap-8 md:gap-30">
        <img src={Logo} alt="Authentic Detective Logo" className="h-8 md:h-10 w-auto" />

        {!isMobile && (
          <ul className="flex items-center gap-8 text-sm font-semibold tracking-widest uppercase">
            <li className="cursor-pointer hover:underline">How It Works</li>
            <li className="cursor-pointer hover:underline">Features</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">FAQ</li>
          </ul>
        )}

        {!isMobile && (
          <button className="bg-[#1a1a1a] text-white text-sm font-bold tracking-widest uppercase px-6 py-3 rounded">
            Get Started
          </button>
        )}

        {isMobile && (
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="flex flex-col gap-1.5 p-1">
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        )}
      </div>

      {isMobile && open && (
        <ul className="flex flex-col gap-4 mt-4 pt-4 pb-2 border-t border-[#d6cfc8] text-sm font-semibold tracking-widest uppercase">
          <li className="cursor-pointer hover:underline">How It Works</li>
          <li className="cursor-pointer hover:underline">Features</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">FAQ</li>
          <li>
            <button className="bg-[#1a1a1a] text-white text-sm font-bold tracking-widest uppercase px-6 py-3 rounded w-full">
              Get Started
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
