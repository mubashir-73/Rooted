import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const footerLinks = {
    'Collections': ['Living Room', 'Bedroom', 'Dining', 'Home Office', 'Outdoor', 'Accessories'],
    'Company': ['Our Story', 'Sustainability', 'Careers', 'Press'],
    'Support': ['Contact Us', 'FAQ', 'Shipping & Returns', 'Warranty', 'Care Guide'],
  }

  return (
    <footer id="contact" className="bg-rooted-brown-900 text-rooted-cream-light" ref={ref}>
      {/* Newsletter / Intro Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-white text-center">Bring Natural Warmth Into Your Home</h2>
            <p className="text-white/60 font-light mb-10 text-center">
              Get early access to new collections, sustainability stories, and exclusive member pricing.
            </p>
            <form className="flex w-full max-w-md border-b border-white pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="text-white font-semibold tracking-widest uppercase text-xs hover:text-rooted-cream transition-colors"
              >
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          <div className="lg:col-span-2">
            <img
              src="/rootedlogo.jpeg"
              alt="Rooted"
              className="h-10 w-auto object-contain mb-8 brightness-0 invert"
            />
            <div className="flex gap-6">
              {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold tracking-widest text-white uppercase mb-6">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 text-xs text-white/40">
           <span>© 2026 Rooted Sustainable Furniture Co.</span>
           <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms</span>
           </div>
        </div>
      </div>

      {/* Giant Brand Typography */}
      <div className="overflow-hidden bg-rooted-brown-900 border-t border-white/5">
        <div className="w-full flex justify-center py-6 md:py-10">
          <motion.h2
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 1.5, delay: 0.3 }}
             className="font-sans font-black text-display-huge leading-[0.75] text-white tracking-tighter uppercase whitespace-nowrap block"
          >
            ROOTED
          </motion.h2>
        </div>
      </div>
    </footer>
  )
}
