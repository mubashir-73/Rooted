export default function Durability() {
  return (
    <section className="w-full bg-[#EFEBE4] py-32">
      <div className="w-full px-4 md:px-12 max-w-[1920px] mx-auto text-center">
        
        <h2 className="font-sans font-bold text-xl md:text-2xl tracking-widest uppercase text-[#1A1A1A] mb-24">
          WHERE DESIGN MEETS DURABILITY
        </h2>

        {/* 5 Staggered Images layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-6xl mx-auto mb-16 h-auto md:h-[500px]">
          
          {/* Two Small Left */}
          <div className="flex flex-col gap-4 self-end w-full md:w-1/5">
            <div className="w-full aspect-square bg-black/5 overflow-hidden">
              <img src="https://image.pollinations.ai/prompt/sustainable%20interior%20design%20details?width=600&height=600&nologo=true" alt="Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-3/4 aspect-video bg-black/5 overflow-hidden ml-auto">
              <img src="https://image.pollinations.ai/prompt/solid%20wood%20joints%20mortise?width=800&height=450&nologo=true" alt="Detail 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* One Large Center */}
          <div className="w-full md:w-[40%] self-start h-[300px] md:h-full relative z-10">
            <div className="w-full h-full bg-black/5 overflow-hidden">
              <img src="https://image.pollinations.ai/prompt/minimalist%20wood%20chair%20shadow?width=800&height=1200&nologo=true" alt="Main Detail" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Two Small Right */}
          <div className="flex flex-col gap-4 self-end w-full md:w-1/5 pb-12">
            <div className="w-4/5 aspect-[3/4] bg-black/5 overflow-hidden mb-4">
              <img src="https://image.pollinations.ai/prompt/wood%20furniture%20craftsmanship?width=600&height=800&nologo=true" alt="Detail 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-square bg-black/5 overflow-hidden">
              <img src="https://image.pollinations.ai/prompt/solid%20wood%20tenon?width=600&height=600&nologo=true" alt="Detail 4" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        {/* Text and Button below center image */}
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <p className="text-[13px] md:text-[14px] leading-[1.8] font-light text-[#1A1A1A] opacity-80 mb-10">
            A Rooted piece is designed to last 50+ years. Each piece is tested for strength, comfort, and longevity—so it performs beautifully in real homes, not just showrooms.
          </p>
          <a href="#shop" className="inline-flex items-center text-[11px] font-semibold tracking-[0.15em] uppercase bg-[#1A1A1A] text-white py-4 px-10 hover:bg-[#333] transition-colors">
            SHOP NOW
            <svg className="w-3 h-3 ml-3 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
