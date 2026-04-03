import { useState } from 'react'

export default function ModernSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "WHAT TYPE OF WOOD DO YOU USE?",
      answer: "We use carefully selected, FSC-certified solid hardwoods including Walnut, White Oak, Ash, and Teak."
    },
    {
      question: "ARE YOUR PRODUCTS MADE FROM SOLID WOOD?",
      answer: "Yes, we use traditional joinery like mortise-and-tenon or dovetail, and we never use MDF or particle board."
    },
    {
      question: "DO YOU OFFER CUSTOM OR MADE-TO-ORDER PRODUCTS?",
      answer: "Yes, custom dimensions and premium finishes are available for all items in our catalog."
    },
    {
      question: "HOW LONG DOES A CUSTOM ORDER TAKE?",
      answer: "Custom size and finish orders require a 6-10 week lead time from order confirmation."
    }
  ]

  return (
    <section className="w-full bg-[#EFEBE4] py-24 border-t border-[#1A1A1A]/10">
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto">
        
        {/* Huge Header Text on Right */}
        <div className="flex justify-end mb-16 md:mb-24 px-4 md:px-12">
          <h2 className="font-sans font-black text-[clamp(3rem,8vw,8rem)] text-[#2A1810] tracking-tighter uppercase leading-[0.85] text-right max-w-4xl">
            STRONG, MINIMAL<br/>
            & MODERN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-4 md:px-12">
          
          {/* Left Column: Image, Text, Button */}
          <div className="flex flex-col h-full justify-between">
            <div className="w-full aspect-[16/9] bg-black/5 overflow-hidden mb-16">
              <img src="https://image.pollinations.ai/prompt/modern%20sustainable%20dining%20room?width=1200&height=675&nologo=true" alt="Modern Sustainable Dining Room" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-sm mt-auto">
              <p className="text-[14px] leading-[1.6] font-medium text-[#1A1A1A] mb-8">
                Still have questions or need something specific?
              </p>
              <a href="#contact" className="inline-flex items-center text-[11px] font-semibold tracking-widest uppercase border border-[#1A1A1A] py-3.5 px-8 hover:bg-[#1A1A1A] hover:text-white transition-colors group">
                TALK TO OUR TEAM
                <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="flex flex-col border-t-2 border-[#1A1A1A]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#1A1A1A]/20">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="text-[11px] font-bold tracking-widest uppercase pr-8">
                    {faq.question}
                  </span>
                  <span className="text-xl font-light w-6 text-right">
                    {openIndex === idx ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[13px] leading-[1.6] opacity-70 font-light pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
