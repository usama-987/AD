import mainImg from '../assets/Main.webp'

const Hero = () => {
  return (
    <section className="bg-[#f5f0eb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:flex-1 md:max-w-xl md:pr-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-4">
            Expert Brand Authentication
          </h1>
          <div className="w-12 h-1 bg-[#b47500] mb-6" />
          
          <p className="text-sm text-gray-800 mb-10 leading-relaxed">
            We authenticate streetwear, vintage, jewelry, apparel, bags, and accessories.
          </p>

          {/* Icons row */}
          <div className="flex divide-x divide-gray-300 mb-10">
            {/* No Account */}
            <div className="flex flex-col items-center text-center gap-3 pr-6 sm:pr-8">
              <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
                <circle cx="50" cy="38" r="12" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
                <path d="M30 72 C30 58, 40 50, 50 50 C60 50, 70 58, 70 72" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <p className="text-[10px] font-bold uppercase tracking-wide leading-tight">No Account<br />Necessary</p>
            </div>

            {/* No Subscription */}
            <div className="flex flex-col items-center text-center gap-3 px-6 sm:px-8">
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none" stroke="#1a1a1a" strokeWidth="1.8">
                <rect x="6" y="8" width="24" height="22" rx="2" />
                <line x1="12" y1="8" x2="12" y2="4" />
                <line x1="24" y1="8" x2="24" y2="4" />
                <line x1="6" y1="14" x2="30" y2="14" />
                <line x1="14" y1="20" x2="22" y2="28" />
                <line x1="22" y1="20" x2="14" y2="28" />
              </svg>
              <p className="text-[10px] font-bold uppercase tracking-wide leading-tight">No Subscription<br />Required</p>
            </div>

            {/* No Minimums */}
            <div className="flex flex-col items-center text-center gap-3 pl-6 sm:pl-8">
              <svg width="40" height="40" viewBox="0 0 93.81 122.88" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.98,31.32v-9.74h-0.01c0-4.72,1.94-9.02,5.05-12.13c3.12-3.12,7.41-5.06,12.13-5.06V4.4h0.03V4.39 c4.72,0,9.02,1.94,12.13,5.05c3.12,3.12,5.05,7.41,5.06,12.13h-0.01v9.86c-2.09,0.69-3.6,2.65-3.6,4.97c0,2.89,2.34,5.24,5.24,5.24 c2.89,0,5.24-2.35,5.24-5.24c0-1.88-0.99-3.52-2.47-4.44V21.57h-0.01c-0.01-5.93-2.43-11.32-6.33-15.22 c-3.91-3.91-9.31-6.34-15.24-6.34V0l-0.03,0v0.01c-5.93,0-11.32,2.43-15.22,6.33c-3.91,3.91-6.34,9.31-6.34,15.24h-0.01v10.65 c-1.26,0.96-2.08,2.47-2.08,4.17c0,2.89,2.35,5.24,5.24,5.24c2.89,0,5.24-2.35,5.24-5.24C32.98,33.94,31.27,31.88,28.98,31.32 L28.98,31.32L28.98,31.32z M10.99,31.49h6.56c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98h-3.23l-5.56,76.59h78.67 l-5.56-76.59h-4.6c0.11-0.64,0.17-1.31,0.17-1.98c0-1.96-0.49-3.8-1.36-5.42h7.92c1.41,0,2.64,0.57,3.55,1.48 c0.88,0.88,1.44,2.07,1.53,3.36l5.89,81.19c0.01,0.16,0.02,0.28,0.02,0.35c0,1.39-0.59,2.62-1.5,3.52c-0.85,0.83-2,1.38-3.24,1.47 c-0.16,0.01-0.29,0.02-0.36,0.02H5.1c-0.07,0-0.2-0.01-0.36-0.02c-1.23-0.09-2.39-0.63-3.24-1.47c-0.92-0.9-1.5-2.13-1.5-3.53 c0-0.07,0.01-0.18,0.02-0.35l5.89-81.19c0.09-1.29,0.65-2.48,1.53-3.36C8.36,32.06,9.59,31.49,10.99,31.49L10.99,31.49z M37.81,31.49h16.83c-0.86,1.61-1.36,3.46-1.36,5.42c0,0.68,0.06,1.34,0.17,1.98H38.99c0.11-0.64,0.17-1.31,0.17-1.98 C39.17,34.95,38.67,33.11,37.81,31.49L37.81,31.49z" fill="#1a1a1a"/>
              </svg>
              <p className="text-[10px] font-bold uppercase tracking-wide leading-tight">No Minimums</p>
              <p className="text-[9px] text-gray-600 leading-tight -mt-2">Authenticate one item<br />or an entire collection.</p>
            </div>
          </div>

          {/* Human experts badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 mb-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-widest">No AI. 100% Human Experts</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#b47500] text-white text-[11px] font-bold uppercase tracking-widest px-7 py-3">
              Get Started
            </button>
            <button className="bg-white border-2 border-gray-300 text-[11px] font-bold uppercase tracking-widest px-7 py-3">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image - positioned to bleed to edge */}
        <div className="w-full md:flex-1 md:-mr-12 mt-8 md:mt-0">
          <img src={mainImg} alt="Authentic bag" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Hero
