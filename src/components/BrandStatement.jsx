import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BrandStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-28 md:py-40 bg-rooted-cream overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        {/* WHERE DESIGN MEETS DURABILITY */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-sm font-semibold tracking-[0.2em] text-rooted-brown-900 uppercase mb-10"
        >
          Where Design Meets Durability
        </motion.p>

        {/* Small center image insert */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-48 h-64 md:w-64 md:h-80 mb-16 overflow-hidden rounded-sm"
        >
          <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80" alt="Detail" className="w-full h-full object-cover" />
        </motion.div>

        {/* Big Statement */}
        <div className="w-full">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black text-display text-rooted-brown-900 leading-[0.9] tracking-tight uppercase"
          >
            STRONG, MINIMAL<br/>& MODERN
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left border-t border-rooted-brown-300 pt-10"
        >
           <div className="flex flex-col justify-between">
              <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80" alt="Detail" className="w-full aspect-[16/9] object-cover mb-4" />
              <p className="text-sm text-rooted-brown-600 uppercase font-semibold tracking-wider">Quality Materials</p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="p-6 border border-rooted-brown-300">
                <p className="text-xs uppercase tracking-widest text-rooted-brown-500 mb-2">01 / Construction</p>
                <p className="text-rooted-brown-900 font-medium">All joinery uses traditional mortise-and-tenon or dovetail methods.</p>
              </div>
              <div className="p-6 border border-rooted-brown-300">
                <p className="text-xs uppercase tracking-widest text-rooted-brown-500 mb-2">02 / Finishing</p>
                <p className="text-rooted-brown-900 font-medium">Non-toxic finishes, safe for homes and the planet.</p>
              </div>
           </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          href="#about"
          className="mt-16 inline-flex items-center justify-center px-10 py-5 bg-rooted-brown-900 text-white font-medium tracking-widest uppercase hover:bg-rooted-brown-800 transition-colors text-xs"
        >
          Discover Our Craft
        </motion.a>
      </div>
    </section>
  )
}
