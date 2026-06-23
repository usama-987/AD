import { useState, useEffect } from 'react'
import Logo from '../assets/Logo.svg'

const navItems = [
  { label: 'Home' },
  { label: 'Authentication' },
  { label: 'Services',  children: ['Verify Certificate', 'Authenticity Card', 'Subscription'] },
  { label: 'Network',   children: ['Sellers Collective'] },
  { label: 'Explore',   children: ['Our Brand', 'Our App', 'Blog'] },
  { label: 'Support',   children: ['Contact Us'] },
  { label: 'Pricing',   children: ['Prices'] },
]


/* ── Desktop: pure-CSS hover via Tailwind group ── */
const DesktopItem = ({ item }) => {
  if (!item.children) {
    return (
      <li className="text-sm font-bold tracking-widest uppercase cursor-pointer hover:text-[#b47500] transition-colors whitespace-nowrap">
        {item.label}
      </li>
    )
  }

  return (
    <li className="relative group">
      {/* trigger */}
      <div className="text-sm font-bold tracking-widest uppercase cursor-pointer group-hover:text-[#b47500] transition-colors whitespace-nowrap select-none">
        {item.label}
      </div>

      {/* dropdown panel — hidden until group hover */}
      <ul className="
        absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50
        bg-white border border-gray-200 rounded-lg shadow-lg
        py-1.5 min-w-[170px]
        opacity-0 invisible translate-y-1
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200
      ">
        {/* triangle pointer */}
        <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45 pointer-events-none" />
        {item.children.map(child => (
          <li
            key={child}
            className="px-4 py-2 text-[11px] font-semibold tracking-wider uppercase text-[#1a1a1a] hover:bg-[#f5f0eb] hover:text-[#b47500] cursor-pointer transition-colors whitespace-nowrap"
          >
            {child}
          </li>
        ))}
      </ul>
    </li>
  )
}

/* ── Mobile: click accordion ── */
const MobileItem = ({ item }) => {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <li className="py-2.5 text-sm font-bold tracking-widest uppercase cursor-pointer hover:text-[#b47500] transition-colors">
        {item.label}
      </li>
    )
  }

  return (
    <li>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-2.5 text-sm font-bold tracking-widest uppercase hover:text-[#b47500] transition-colors"
      >
        {item.label}
      </button>
      {open && (
        <ul className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-[#b47500] ml-1">
          {item.children.map(child => (
            <li
              key={child}
              className="py-1.5 text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-[#b47500] cursor-pointer transition-colors"
            >
              {child}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/* ── Main Navbar ── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  return (
    <nav className="bg-[#f5f0eb] px-4 py-4 relative z-40">

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between md:justify-center gap-6 md:gap-10">
        <img src={Logo} alt="Authentic Detective Logo" className="h-8 md:h-10 w-auto shrink-0" />

        {/* Desktop links */}
        {!isMobile && (
          <ul className="flex items-center gap-7">
            {navItems.map(item => <DesktopItem key={item.label} item={item} />)}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button className="shrink-0 bg-[#1a1a1a] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded hover:bg-[#b47500] transition-colors">
            Get Started
          </button>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" className="flex flex-col gap-1.5 p-1">
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        )}
      </div>

      {/* ── Mobile menu ── */}
      {isMobile && menuOpen && (
        <div className="mt-4 pt-4 pb-3 border-t border-[#d6cfc8]">
          <ul className="flex flex-col divide-y divide-gray-200">
            {navItems.map(item => <MobileItem key={item.label} item={item} />)}
          </ul>
          <button className="mt-4 bg-[#1a1a1a] text-white text-sm font-bold tracking-widest uppercase px-6 py-3 rounded w-full hover:bg-[#b47500] transition-colors">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
