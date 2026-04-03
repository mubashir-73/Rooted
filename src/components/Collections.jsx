export default function Collections() {
  const collections = [
    { name: 'Living Room', image: 'Mossvale,Sofa,organic,fabric' },
    { name: 'Dining', image: 'Harvest,Farmhouse,Table' },
    { name: 'Office', image: 'Watershed,Writing,Desk' },
    { name: 'Bedroom', image: 'Millstream,Dresser' }
  ]

  return (
    <section className="w-full bg-[#EFEBE4] py-24" id="collections">
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto">
        <h2 className="text-center font-sans font-bold text-2xl md:text-3xl tracking-widest uppercase mb-12 text-[#1A1A1A]">
          OUR COLLECTIONS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1A1A1A]/20">
          {collections.map((col, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center bg-[#EFEBE4] p-6 lg:p-8 ${idx !== collections.length - 1 ? 'border-r border-[#1A1A1A]/20' : ''} ${idx > 1 ? 'border-t lg:border-t-0 border-[#1A1A1A]/20' : ''}`}
            >
              <div className="w-full aspect-[4/5] mb-8 bg-black/5 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${col.image.replace(/,/g, '')}/600/800`}
                  alt={col.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-[#1A1A1A]">
                {col.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
