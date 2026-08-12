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
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-gold-metallic/15 border border-brand-gold/30 rounded-md mb-4 shadow-sm">
              <h2 className="font-sans uppercase tracking-widest text-brand-gold text-xs font-bold">About Us & Our Story</h2>
            </div>

            {/* Prominent Welcome Header */}
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-letterpress-light tracking-wide font-bold">
              Welcome to <br />
              <span className="text-brand-gold">Label by Mayilini</span>
            </h3>

            {/* 11+ Years Legacy Highlight Banner */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3.5 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs uppercase tracking-widest font-semibold">
                11+ Years of Fashion Excellence
              </span>
            </div>

            <div className="space-y-5 font-sans font-light text-brand-ivory/90 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-brand-gold font-medium">Label By Mayilini</strong> is the official online extension of <strong className="text-brand-gold font-medium">Dreamz Fashion Boutique</strong>, a trusted name built on over <strong className="text-brand-ivory font-semibold">11 years</strong> of passion, elegance, and fashion craftsmanship in Puducherry.
              </p>
              
              <p>
                What began as Dreamz Fashion Boutique more than a decade ago has grown into a cherished journey shaped by our deep love for elegant designs, premium quality fabrics, and timeless styling. With Label By Mayilini, we are bringing that same bespoke boutique experience and carefully curated collections directly to you online.
              </p>
              
              <p>
                Our collections are thoughtfully selected for the modern woman — effortlessly blending grace, comfort, and sophistication for every occasion, from everyday chic to festive celebrations.
              </p>

              <p className="pt-2 italic text-brand-gold/90 text-sm md:text-base border-l-2 border-brand-gold/50 pl-4">
                &ldquo;After 11 years of being a beloved part of our customers&rsquo; fashion journeys, we are excited to take the next step and bring the Dreamz experience to your doorstep through Label By Mayilini.&rdquo;
              </p>
            </div>

            <div className="w-20 h-[3px] bg-gold-metallic rounded-full mt-8 shadow-[0_2px_4px_rgba(0,0,0,0.3)]"></div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Elegant Modern Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-gold/40 shadow-2xl max-w-sm w-full transition-all duration-500 hover:-rotate-1 hover:scale-[1.02] hover:border-brand-gold">
              <div className="aspect-[3/4] overflow-hidden bg-[#1c0f0a]">
                <img 
                  src="/images/about_boutique.png" 
                  alt="Label by Mayilini Boutique Collection" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-brand-gold/30 rounded-xl p-3 text-center">
                <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold">Dreamz Fashion Boutique &bull; Puducherry</p>
                <p className="text-brand-ivory/80 text-[11px]">Since 2015 &bull; 11+ Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

