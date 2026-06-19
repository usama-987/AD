import NPA from '../assets/NPA.jpeg'

const TrustBar = () => {
  const items = [
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="47" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <circle cx="30" cy="40" r="8" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M 14 66 C 14 53 21 47 30 47" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="70" cy="40" r="8" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M 86 66 C 86 53 79 47 70 47" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="50" cy="42" r="11" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M 27 72 C 27 56 37 50 50 50 C 63 50 73 56 73 72" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '100% Human Experts',
      desc: 'No AI. Real experts. Real results.',
    },
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <path d="M42 58 L38 72 L50 66 L62 72 L58 58" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="50" cy="42" r="14" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
          <circle cx="50" cy="42" r="8" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        </svg>
      ),
      title: 'Recognized by Premier Marketplaces',
      desc: 'Trusted by top resale platforms worldwide.',
    },
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
          <circle cx="26" cy="26" r="24" />
          <path d="M26 12l10 4v9c0 7-5 12-10 15-5-3-10-8-10-15v-9z" />
          <path d="M21 26l4 4 7-8" strokeWidth="1.8" />
        </svg>
      ),
      title: 'Certificate Included',
      desc: 'Official documentation with every authentication.',
    },
  ]

  return (
    <section className="bg-[#f5f0eb] mx-4 md:mx-10 my-6 rounded-lg px-8 py-6 flex flex-col md:flex-row items-center gap-8 border-2 border-gray-200">
      {/* NPA Badge */}
      <div className="flex items-center gap-4 md:border-r-2 md:border-gray-200 md:pr-8 shrink-0">
        <img src={NPA} alt="NPA Industry Partner" className="h-24 w-24 object-contain" />
        <div>
          <p className="font-black uppercase text-sm tracking-wide leading-tight">Proud NPA<br />Industry Partner</p>
          <div className="w-10 h-0.5 bg-[#b47500] my-2" />
          <p className="text-xs text-gray-600 leading-relaxed max-w-[160px]">Committed to the highest standards of integrity and professionalism.</p>
        </div>
      </div>

      {/* Feature columns */}
      <div className="flex flex-col sm:flex-row gap-0 flex-1">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 flex-1 px-6 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r-2 border-gray-200 last:border-b-0 sm:last:border-r-0">
            {item.icon}
            <p className="font-black uppercase text-xs tracking-wider leading-tight sm:min-h-[32px] flex items-center">{item.title}</p>
            <p className="text-xs text-gray-600 leading-relaxed sm:min-h-[48px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
