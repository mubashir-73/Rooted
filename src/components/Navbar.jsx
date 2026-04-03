import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['PRODUCTS', 'ABOUT US', 'IN STOCK', 'CIRCULAR SERVICES', 'CONTACT']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-rooted-brown-900/10 ${scrolled
        ? 'bg-[#EFEBE4]/95 backdrop-blur-md'
        : 'bg-[#EFEBE4]'
        }`}
    >
      {/* Container matching the exact grid lines from reference */}
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto hidden md:flex items-center justify-between h-[72px]">
        {/* Logo Container with Right Border */}
        <div className="flex items-center justify-start h-full pr-8 border-r border-[#1A1A1A]/10 min-w-[200px]">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/rootedlogo.png"
              alt="Rooted"
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='block'; }}
            />
            <span className="font-sans font-bold text-lg tracking-wider text-[#1A1A1A] uppercase hidden">
              ROOTED
            </span>
          </a>
        </div>

        {/* Center Nav Links with Borders */}
        <div className="flex h-full flex-grow items-center">
          <div className="flex h-full items-center pl-8">
            <a href="#products" className="flex items-center text-[11px] font-semibold tracking-[0.1em] text-[#1A1A1A] uppercase group hover:opacity-70 transition-opacity pr-10">
              PRODUCTS
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
          </div>
          
          {/* Empty spacer to push right links */}
          <div className="flex-grow border-r border-[#1A1A1A]/10 h-full"></div>

          {/* Right Links */}
          <div className="flex h-full items-center">
            {['ABOUT US', 'IN STOCK', 'CIRCULAR SERVICES', 'CONTACT'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="flex items-center justify-center px-6 h-full text-[11px] font-semibold tracking-[0.1em] text-[#1A1A1A] uppercase hover:opacity-70 transition-opacity border-r border-[#1A1A1A]/10"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Icons (Profile & Cart) */}
        <div className="flex items-center h-full">
          <button className="flex items-center justify-center w-[72px] h-full border-r border-[#1A1A1A]/10 hover:bg-[#1A1A1A]/5 transition-colors">
            <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </button>
          <button className="flex items-center justify-center w-[72px] h-full hover:bg-[#1A1A1A]/5 transition-colors">
            <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <span className="font-sans font-bold text-lg tracking-wider text-rooted-brown-900 uppercase">
          WOODSPO
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2"
        >
          <svg className="w-6 h-6 text-rooted-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#EFEBE4] border-t border-rooted-brown-900/10 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-3 text-[12px] font-semibold tracking-widest text-rooted-brown-900 uppercase"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
