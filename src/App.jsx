import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionSection from './components/MissionSection'
import Collections from './components/Collections'
import ProductGrid from './components/ProductGrid'
import Durability from './components/Durability'
import ModernSection from './components/ModernSection'

function App() {
  return (
    <div className="w-full bg-[#EFEBE4] min-h-screen text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#2A1810] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <Collections />
        <ProductGrid />
        <Durability />
        <ModernSection />
      </main>
      
      {/* Short simple footer replicating the reference image's very bottom */}
      <footer className="w-full bg-[#2A1810] text-[#EFEBE4] pt-24 pb-0">
        <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-sans font-medium text-[15px] md:text-[18px] tracking-[0.2em] uppercase mb-12">
            BRING NATURAL WARMTH<br/>
            INTO YOUR HOME
          </h2>
          <a href="#shop" className="inline-flex items-center justify-center bg-white text-[#2A1810] px-12 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-opacity-90 transition-colors mb-24">
            SHOP ALL
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          
          {/* Bottom links imitating the reference image */}
          <div className="w-full flex justify-between md:justify-center md:gap-32 text-[9px] font-semibold tracking-widest uppercase border-t border-white/20 pt-8 pb-16 opacity-70">
            <a href="#about" className="hover:opacity-100 transition-opacity">ABOUT US</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity flex gap-4 md:gap-32">
              <span>CONTACT</span>
              <span>PRIVACY</span>
            </a>
          </div>
          
          <h1 className="font-sans font-black text-[clamp(4rem,20vw,24rem)] text-white tracking-tighter uppercase w-full block leading-[0.75] mt-auto">
            NATURAL
          </h1>
        </div>
      </footer>
    </div>
  )
}

export default App
