import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-28 bg-white flex flex-col items-center overflow-hidden">
      {/* Huge Display Text above/overlapping image */}
      <div className="w-full max-w-[1600px] px-6 md:px-10 z-10 -mb-6 md:-mb-16 xl:-mb-24 relative mix-blend-difference pointer-events-none text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-display-huge text-white tracking-tighter uppercase w-full block leading-[0.8]"
        >
          ROOTED
        </motion.h1>
      </div>

      {/* Hero Image Container */}
      <div className="w-full max-w-[1500px] px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-rooted-brown-800 overflow-hidden rounded-sm"
        >
          {/* Darker overlay for contrast */}
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
            alt="Premium sofa in a natural-lit living room"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Content Below Image */}
      <div className="w-full max-w-[1400px] px-6 md:px-10 pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-rooted-brown-900 text-xs font-semibold tracking-widest text-rooted-cream-light uppercase">
            <span className="w-1.5 h-1.5 bg-rooted-cream-light rounded-full animate-pulse" />
            Sustainable Since Day One
          </span>
          <p className="text-xl md:text-2xl text-rooted-brown-900 font-medium leading-relaxed max-w-lg">
            Crafted for the Earth. Built to Last Generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-start gap-8 md:ml-auto max-w-md"
        >
          <p className="text-rooted-brown-600 font-light leading-relaxed">
            Every piece of Rooted furniture begins with an FSC-certified forest, where timber is harvested at the rate it regrows. Bamboo is sourced from regenerative plantations.
          </p>
          <div className="flex gap-4">
            <a
              href="#collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-rooted-brown-900 text-white font-medium tracking-wide hover:bg-rooted-brown-800 transition-colors"
            >
              Explore Collections
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-rooted-brown-300 text-rooted-brown-900 font-medium tracking-wide hover:border-rooted-brown-900 transition-colors"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
