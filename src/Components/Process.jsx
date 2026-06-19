import { Fragment } from 'react'

const steps = [
  {
    num: 1,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#4a4a4a" strokeWidth="1.8">
        <rect x="12" y="4" width="24" height="40" rx="3" />
        <rect x="17" y="14" width="14" height="16" rx="1" />
        <line x1="17" y1="34" x2="31" y2="34" />
        <line x1="17" y1="38" x2="25" y2="38" />
        <path d="M22 22l-3 3 5 5 7-8" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Upload',
    desc: 'Upload clear photos of your item from your own device.',
  },
  {
    num: 2,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#4a4a4a" strokeWidth="1.8">
        <rect x="8" y="8" width="32" height="36" rx="2" />
        <line x1="14" y1="18" x2="34" y2="18" />
        <line x1="14" y1="24" x2="34" y2="24" />
        <line x1="14" y1="30" x2="26" y2="30" />
        <path d="M28 34l4 4 8-8" strokeWidth="2" />
      </svg>
    ),
    title: 'Get Results',
    desc: 'Receive your authentication result and digital certificate.',
  },
  {
    num: 3,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#4a4a4a" strokeWidth="1.8">
        <path d="M24 4l16 6v14c0 10-8 18-16 22C16 42 8 34 8 24V10z" />
        <path d="M16 24l6 6 10-12" strokeWidth="2.2" />
      </svg>
    ),
    title: 'Use With Confidence',
    desc: 'Use your certificate for resale, insurance, or peace of mind.',
  },
]

const Arrow = () => (
  <div className="hidden md:flex items-center self-center pb-16">
    <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
      <circle cx="6" cy="8" r="3" fill="#b47500" />
      <circle cx="20" cy="8" r="3" fill="#b47500" />
      <circle cx="34" cy="8" r="3" fill="#b47500" />
      <circle cx="48" cy="8" r="3" fill="#b47500" />
      <circle cx="62" cy="8" r="3" fill="#b47500" />
      <path d="M70 4l6 4-6 4z" fill="#b47500" />
    </svg>
  </div>
)

const Process = () => (
  <section className="bg-[#f5f0eb] px-6 md:px-16 py-12">
    <h2 className="text-center font-black uppercase tracking-widest text-lg mb-10">Our Authentication Process</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          <div className="flex flex-col items-center text-center gap-4 max-w-[180px] mx-auto">
            <div className="w-8 h-8 rounded-full bg-[#b47500] text-white flex items-center justify-center font-black text-sm">{step.num}</div>
            <div className="bg-[#ede8e1] rounded-full p-5">{step.icon}</div>
            <p className="font-black uppercase tracking-wider text-sm">{step.title}</p>
            <p className="text-xs text-gray-600">{step.desc}</p>
          </div>
          {i < steps.length - 1 && <Arrow />}
        </Fragment>
      ))}
    </div>
  </section>
)

export default Process
