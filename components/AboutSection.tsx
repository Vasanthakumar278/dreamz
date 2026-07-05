export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-leather-dark text-brand-ivory w-full relative overflow-hidden">
      {/* Decorative Brass Screws in Corners */}
      <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-gold-metallic border border-black/40 shadow-lg flex items-center justify-center">
        <div className="w-[8px] h-[1px] bg-black/40 transform rotate-45"></div>
      </div>
      <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-gold-metallic border border-black/40 shadow-lg flex items-center justify-center">
        <div className="w-[8px] h-[1px] bg-black/40 transform -rotate-45"></div>
      </div>
      <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-gold-metallic border border-black/40 shadow-lg flex items-center justify-center">
        <div className="w-[8px] h-[1px] bg-black/40 transform -rotate-12"></div>
      </div>
      <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-gold-metallic border border-black/40 shadow-lg flex items-center justify-center">
        <div className="w-[8px] h-[1px] bg-black/40 transform rotate-12"></div>
      </div>

      {/* Internal Stitched Border Frame */}
      <div className="absolute inset-4 border border-stitch-ivory rounded-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-gold-metallic/15 border border-brand-gold/30 rounded-md mb-6 shadow-sm">
              <h2 className="font-sans uppercase tracking-widest text-brand-gold text-xs font-bold">Our Story</h2>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-letterpress-light tracking-wide font-bold">
              A Legacy of <br/> Craftsmanship & Style
            </h3>
            <div className="divider-stitch w-full mb-8 opacity-40"></div>
            <p className="font-sans font-light text-brand-ivory/90 mb-6 text-lg leading-relaxed drop-shadow-sm">
              Founded in the heart of Puducherry, The Label by Mayilini is more than just a store; it is a destination for the modern woman who appreciates fine tailoring and exquisite fabrics.
            </p>
            <p className="font-sans font-light text-brand-ivory/90 mb-10 text-lg leading-relaxed drop-shadow-sm">
              We believe in the power of personal styling. Our collections are carefully curated to ensure that every piece tells a story of elegance and empowers you to walk with confidence.
            </p>
            <div className="w-20 h-[3px] bg-gold-metallic rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Elegant Gold Framed Image */}
            <div className="relative p-2 bg-[#1c0f0a] frame-gold shadow-2xl max-w-sm w-full transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
              <div className="absolute inset-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)] pointer-events-none z-10"></div>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="/images/shop-interior-1.webp" 
                  alt="The Label by Mayilini Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

