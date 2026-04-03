import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full pt-[72px] bg-[#EFEBE4] flex flex-col overflow-hidden">
      {/* Huge Display Text above/overlapping image */}
      <div className="w-full max-w-[1920px] mx-auto z-10 -mb-8 md:-mb-16 lg:-mb-24 relative pointer-events-none mt-12 flex justify-center break-words px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-[clamp(6rem,22vw,28rem)] text-[#EFEBE4] tracking-tighter uppercase leading-[0.75]"
        >
          NATURAL
        </motion.h1>
      </div>

      {/* Hero Image Container */}
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto relative z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/7] bg-[#3C2415] overflow-hidden"
        >
          <img
            src="https://picsum.photos/seed/minimalistsustainablelivingroomsolidwood/1920/1080"
            alt="Sustainable minimal living room"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Sub-navigation Bar overlapping image bottom */}
        <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 bg-[#1A1A1A] text-white flex items-center justify-between text-[11px] font-medium tracking-[0.15em] uppercase p-[2px]">
          <a href="#living-room" className="flex-1 py-4 px-6 flex justify-between items-center hover:bg-white/10 transition-colors border-r border-white/20">
            LIVING ROOM
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
          <a href="#dining" className="flex-1 py-4 px-6 flex justify-between items-center hover:bg-white/10 transition-colors border-r border-white/20">
            DINING
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
          <a href="#bedroom" className="flex-1 py-4 px-6 flex justify-between items-center hover:bg-white/10 transition-colors border-r border-white/20">
            BEDROOM
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
          <a href="#workspace" className="flex-1 py-4 px-6 flex justify-between items-center hover:bg-white/10 transition-colors">
            WORKSPACE
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
