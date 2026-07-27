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
            <div className="inline-block px-3 py-1 bg-gold-metallic/15 border border-brand-gold/30 rounded-md mb-4 shadow-sm">
              <h2 className="font-sans uppercase tracking-widest text-brand-gold text-xs font-bold">About Us & Our Story</h2>
            </div>

            {/* Prominent Welcome Header */}
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-letterpress-light tracking-wide font-bold">
              Welcome to <br />
              <span className="text-brand-gold">Label by Mayilini</span>
            </h3>

            {/* Dedicated Note Box */}
            <div className="bg-gradient-to-r from-brand-gold/15 to-transparent border-l-4 border-brand-gold rounded-r-xl p-5 mb-8 shadow-md">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-brand-gold text-base font-bold">📌 NOTE</span>
              </div>
              <p className="font-sans text-brand-ivory/90 text-sm md:text-base leading-relaxed">
                This website is an official online page and digital extension of <strong className="text-brand-gold font-semibold">Dreamz Fashion Boutique</strong>, bringing our exclusive boutique collections online for easy shopping.
              </p>
            </div>

            <div className="divider-stitch w-full mb-8 opacity-40"></div>
            <p className="font-sans font-light text-brand-ivory/90 mb-6 text-lg leading-relaxed drop-shadow-sm">
              Founded in the heart of Puducherry, Label by Mayilini represents our online vision — created as a seamless destination for the modern woman who appreciates fine tailoring, exclusive designer wear, and premium fabrics.
            </p>
            <p className="font-sans font-light text-brand-ivory/90 mb-10 text-lg leading-relaxed drop-shadow-sm">
              We believe in the power of personal styling. Our collections are carefully curated to ensure that every piece tells a story of elegance and empowers you to walk with confidence.
            </p>
            <div className="w-20 h-[3px] bg-gold-metallic rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Elegant Modern Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/40 shadow-2xl max-w-sm w-full transition-all duration-500 hover:-rotate-1 hover:scale-[1.02] hover:border-brand-gold">
              <div className="aspect-[3/4] overflow-hidden bg-[#1c0f0a]">
                <img 
                  src="/images/bridal.png" 
                  alt="Label by Mayilini Boutique Collection" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

