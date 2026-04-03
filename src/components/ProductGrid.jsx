export default function ProductGrid() {
  const products = [
    { name: 'Driftwood Rocking Chair', price: '$890', image: 'wooden,rocking,chair,minimalist' },
    { name: 'Fern Round Dining Table', price: '$1,400', image: 'round,solid,wood,dining,table' },
    { name: 'Stonebrook Nesting Tables', price: '$580', image: 'wooden,nesting,tables,set' },
    { name: 'Spindle Dining Chair', price: '$380', image: 'spindle,dining,chair,wood' }
  ]

  return (
    <section className="w-full bg-[#E5DCD0] py-32" id="products">
      <div className="w-full px-4 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-sans font-bold text-xl md:text-2xl tracking-widest uppercase text-[#1A1A1A]">
            NEW ARRIVALS
          </h2>
          <a href="#all" className="hidden md:inline-flex items-center text-[11px] font-semibold tracking-widest uppercase border border-[#1A1A1A] py-3 px-8 hover:bg-[#1A1A1A] hover:text-white transition-colors">
            VIEW ALL
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>

        {/* Clean Staggered Layout Using Flex Masonry style */}
        <div className="flex flex-col md:flex-row items-end gap-6 md:gap-4 lg:gap-8 justify-between">
          
          <div className="w-full md:w-1/4 flex flex-col pt-12 md:pb-32">
            <div className="w-full aspect-[4/5] bg-black/5 overflow-hidden mb-4">
              <img src={`https://picsum.photos/seed/${products[0].name.replace(/ /g, '')}/600/800`} alt={products[0].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#1A1A1A]/20">
              <span className="text-[12px] font-medium tracking-wide mb-1 opacity-90">{products[0].name}</span>
              <span className="text-[11px] font-semibold">{products[0].price}</span>
            </div>
          </div>

          <div className="w-full md:w-[35%] flex flex-col md:pb-24">
            <div className="w-full aspect-[4/3] bg-black/5 overflow-hidden mb-4">
              <img src={`https://picsum.photos/seed/${products[1].name.replace(/ /g, '')}/800/600`} alt={products[1].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#1A1A1A]/20">
              <span className="text-[12px] font-medium tracking-wide mb-1 opacity-90">{products[1].name}</span>
              <span className="text-[11px] font-semibold">{products[1].price}</span>
            </div>
          </div>

          <div className="w-full md:w-1/5 flex flex-col md:pb-12">
            <div className="w-full aspect-square bg-black/5 overflow-hidden mb-4">
              <img src={`https://picsum.photos/seed/${products[2].name.replace(/ /g, '')}/600/600`} alt={products[2].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#1A1A1A]/20">
              <span className="text-[12px] font-medium tracking-wide mb-1 opacity-90">{products[2].name}</span>
              <span className="text-[11px] font-semibold">{products[2].price}</span>
            </div>
          </div>

          <div className="w-full md:w-[15%] flex flex-col md:pt-48">
            <div className="w-full aspect-[3/4] bg-black/5 overflow-hidden mb-4">
              <img src={`https://picsum.photos/seed/${products[3].name.replace(/ /g, '')}/600/800`} alt={products[3].name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#1A1A1A]/20">
              <span className="text-[12px] font-medium tracking-wide mb-1 opacity-90">{products[3].name}</span>
              <span className="text-[11px] font-semibold">{products[3].price}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
