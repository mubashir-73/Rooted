import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    name: 'Mossvale 3-Seater Sofa',
    category: 'Living Room',
    price: '$2,200',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    material: 'Solid Walnut · Organic Cotton',
  },
  {
    name: 'Canopy Lounge Chair',
    category: 'Living Room',
    price: '$1,100',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    material: 'Solid Ash · GOTS Certified',
  },
  {
    name: 'Millpond Coffee Table',
    category: 'Living Room',
    price: '$1,400',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80',
    material: 'Live Edge Walnut',
  },
  {
    name: 'Clearwater Platform Bed',
    category: 'Bedroom',
    price: '$1,800',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    material: 'FSC Walnut · Organic Wool',
  },
  {
    name: 'Harvest Farmhouse Table',
    category: 'Dining',
    price: '$2,400',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
    material: 'Reclaimed Oak',
  },
  {
    name: 'Driftwood Rocking Chair',
    category: 'Living Room',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80',
    material: 'Solid Walnut',
  },
]

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 md:py-36 bg-white" ref={ref}>
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
              Handcrafted Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-bold text-4xl md:text-5xl text-rooted-brown-900 tracking-tight uppercase"
            >
              New Arrivals
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md text-rooted-brown-500 font-light"
          >
            Every piece begins with an FSC-certified forest and ends with a lifetime of use.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-rooted-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick action overlay */}
                <div className="absolute inset-0 bg-rooted-brown-900/0 group-hover:bg-rooted-brown-900/10 transition-colors duration-500" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-rooted-brown-800 text-sm font-medium tracking-wide rounded-xl hover:bg-white transition-colors">
                    View Details
                  </button>
                </motion.div>
              </div>

              {/* Info */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.12em] text-rooted-brown-400 uppercase">
                    {product.category}
                  </span>
                  <span className="text-sm font-semibold text-rooted-brown-800">
                    {product.price}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-rooted-brown-900 group-hover:text-rooted-green transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-rooted-brown-400">
                  {product.material}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
