import Logo from '../assets/Logo.svg'

const Footer = () => (
  <footer>
    {/* Upper footer */}
    <div className="bg-[#f5f0eb] px-8 md:px-16 py-6 flex flex-col md:flex-row gap-6 items-center justify-between border-2 border-gray-300 mx-4 md:mx-10 my-6 rounded-xl">

      {/* Left: app links */}
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] uppercase tracking-widest font-bold">Visit Our Website</p>
          <p className="text-[12px] text-gray-700 font-medium">authenticdetective.com</p>
          <p className="text-[12px] uppercase tracking-widest font-bold mt-2">Download Our App</p>
          <div className="flex gap-2 mt-1">
            {/* App Store */}
            <div className="bg-[#1a1a1a] text-white rounded px-2 py-1.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 640" fill="white">
                <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z"/>
              </svg>
              <div><p className="text-[7px] leading-none">Download on the</p><p className="text-[10px] font-bold leading-none">App Store</p></div>
            </div>
            {/* Google Play */}
            <div className="bg-[#1a1a1a] text-white rounded px-2 py-1.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 466 511.98">
                <path fill="#EA4335" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
                <path fill="#FBBC04" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
                <path fill="#34A853" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
                <path fill="#4285F4" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
              </svg>
              <div><p className="text-[7px] leading-none">GET IT ON</p><p className="text-[10px] font-bold leading-none">Google Play</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex flex-col items-start md:items-start gap-4 flex-1 max-w-xs">
        <p className="font-black text-xl leading-snug">Ready to authenticate<br />with confidence?</p>
        <button className="bg-[#b47500] text-white rounded-sm font-bold uppercase tracking-widest px-6 py-2 text-xs">
          Get Started Now
        </button>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-[#3C1f1b] px-6 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-auto brightness-0 invert" />
      </div>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white uppercase tracking-widest font-semibold">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Authentication</li>
        <li className="cursor-pointer hover:text-gray-300">Services</li>
        <li className="cursor-pointer hover:text-gray-300">Network</li>
        <li className="cursor-pointer hover:text-gray-300">Explore</li>
        <li className="cursor-pointer hover:text-gray-300">Support</li>
        <li className="cursor-pointer hover:text-gray-300">Pricing</li>
      </ul>
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <p className="text-xs text-gray-400 uppercase tracking-widest">authenticdetective.com</p>
      </div>
    </div>
  </footer>
)

export default Footer
