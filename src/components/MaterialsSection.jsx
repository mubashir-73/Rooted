import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const words = ['Refined', 'Natural Materials', 'Responsible', 'Modern']

export default function MaterialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-28 md:py-36 bg-rooted-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Natural wood grain texture detail"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-rooted-brown-800 text-rooted-cream-light rounded-2xl p-6 shadow-2xl"
            >
              <p className="text-3xl font-serif font-bold">50+</p>
              <p className="text-sm text-rooted-cream/70">Years of<br />Design Life</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-medium tracking-[0.2em] text-rooted-green uppercase mb-8 block"
            >
              Our Philosophy
            </motion.span>

            {/* Animated Words */}
            <div className="mb-10">
              {words.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.p
                    initial={{ y: '100%' }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] ${
                      i === 1 ? 'text-rooted-brown-900 font-bold' : 'text-rooted-brown-500 italic'
                    }`}
                  >
                    {word}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-lg text-rooted-brown-500 leading-relaxed mb-8 max-w-md font-light"
            >
              Every piece of Rooted furniture begins with an FSC-certified forest, where timber is harvested at the rate it regrows. All finishing oils, waxes, and stains are non-toxic and VOC-free.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { number: 'FSC', label: 'Certified Wood' },
                { number: '0%', label: 'VOC Finishes' },
                { number: '100%', label: 'Compostable Packaging' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-rooted-green">{stat.number}</p>
                  <p className="text-xs text-rooted-brown-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
