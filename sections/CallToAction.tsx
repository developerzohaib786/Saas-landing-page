import React from 'react'

const CallToAction = () => {
  return (
    <section className='py-24'>
      <style>{`
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scrollX {
          animation: scrollX 15s linear infinite;
        }
      `}</style>
      <div className='overflow-x-clip p-4 flex'>
        <div className='flex flex-none gap-16 text-7xl font-medium md:text-8xl animate-scrollX'>
          {Array.from({length:10}).map((_, i) => (
            <div key={i} className='flex items-center gap-16'>
              <span className='text-lime-400 text-7xl'>&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CallToAction