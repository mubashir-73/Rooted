import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    count: '12 Pieces',
  },
  {
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    count: '9 Pieces',
  },
  {
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    count: '10 Pieces',
  },
  {
    name: 'Home Office',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    count: '7 Pieces',
  },
]

export default function Collections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="collections" className="py-28 md:py-36 bg-rooted-cream-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-[0.2em] text-rooted-green uppercase mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-bold text-4xl md:text-5xl text-rooted-brown-900 tracking-tight uppercase"
            >
              Our Collections
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-rooted-brown-700 hover:text-rooted-green transition-colors"
          >
            View All Categories
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rooted-brown-900/70 via-rooted-brown-900/10 to-transparent" />
              <div className="absolute inset-0 bg-rooted-brown-900/0 group-hover:bg-rooted-brown-900/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium tracking-[0.15em] text-rooted-cream/70 uppercase mb-1">
                  {category.count}
                </p>
                <h3 className="font-serif text-2xl text-rooted-cream-light">
                  {category.name}
                </h3>
              </div>
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
