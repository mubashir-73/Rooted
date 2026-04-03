export default function MissionSection() {
  return (
    <section className="w-full bg-[#301C11] text-[#EFEBE4]">
      <div className="w-full px-4 md:px-12 max-w-[1920px] mx-auto py-32">
        {/* Strictly Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24">
          
          {/* Left Column: Big Text, then Small Image below */}
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[22px] leading-[1.6] max-w-lg font-light mb-auto pb-12">
              <span className="opacity-90">To design and craft furniture that honours the natural world - using only responsibly sourced materials, zero-waste processes, and timeless aesthetics so that every piece becomes a permanent, cherished part of the homes and lives it enters.</span>
            </p>
            
            <div className="w-[180px] md:w-[220px]">
              <div className="aspect-square overflow-hidden bg-black/20">
                <img
                  src="https://picsum.photos/seed/woodenstool/600/600"
                  alt="Natural light on wooden stool"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Small Image + Text, then Social Links below */}
          <div className="flex flex-col h-full justify-between pt-16">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-24 lg:ml-24">
              <div className="w-[160px] md:w-[200px] shrink-0">
                <div className="aspect-[3/4] overflow-hidden bg-black/20">
                  <img
                    src="https://picsum.photos/seed/woodchairdetail/600/800"
                    alt="Wooden chair detail craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[12px] leading-[1.8] opacity-70 font-light max-w-[200px] mt-4 md:mt-24">
                Every piece of Rooted furniture begins with an FSC-certified forest, where timber is harvested at the rate it regrows.
              </p>
            </div>

            {/* Social Links Right Aligned Bottom */}
            <div className="flex flex-col gap-0 border-t border-white/20 ml-auto w-full max-w-[300px]">
              {['INSTAGRAM', 'FACEBOOK', 'LINKEDIN', 'PINTEREST'].map((social) => (
                <a 
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="py-5 border-b border-white/20 flex items-center justify-between group hover:text-white transition-colors"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {social}
                  </span>
                  <svg className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
