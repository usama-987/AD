const checks = [
  'Expert human authentication',
  '6–12 hour standard delivery',
  '60 minute option available',
  'Certificate of authenticity included',
  'Accepted by top resale platforms',
  'Add value and confidence to your items',
]

const Pricing = () => (
  <section className="bg-[#e8ddd4] px-6 md:px-16 py-12 flex flex-col md:flex-row gap-10 items-center justify-center">
    {/* Price */}
    <div className="text-center md:text-center md:border-r-2 md:border-[#644916] md:pr-16 md:self-stretch">
      <p className="uppercase tracking-widest text-sm font-bold">Starting At</p>
      <p className="text-6xl sm:text-8xl font-black">$12</p>
      <p className="text-sm text-gray-700">Including a certificate<br />of authenticity.</p>
    </div>

    {/* Checklist */}
    <ul className="flex flex-col gap-3 md:pl-10">
      {checks.map((c, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#b47500" />
            <path d="M5.5 10l3.5 3.5 5.5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {c}
        </li>
      ))}
    </ul>
  </section>
)

export default Pricing
