export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/shop-front.webp" 
          alt="Dreamz Fashion Boutique Pondicherry" 
          className="w-full h-full object-cover"
        />
        {/* Soft fabric vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/80"></div>
        {/* Fine overlay border mimicking a wooden frame edge for the page */}
        <div className="absolute inset-4 border-2 border-brand-gold/30 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <div className="flex justify-center mb-10">
          {/* Beveled Gold Medallion Logo Holder */}
          <div className="relative p-3 bg-gold-metallic rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.6)] border border-[#80611d] flex items-center justify-center">
            <div className="bg-[#1e130c] p-1.5 rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]">
              <img 
                src="/images/logo.png" 
                alt="Dreamz Logo" 
                className="h-28 w-28 object-cover rounded-full border border-brand-gold/30" 
              />
            </div>
          </div>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 leading-tight text-letterpress-light tracking-wide">
          Contemporary Fashion <br/> For Modern Women
        </h1>
        <p className="text-lg md:text-xl text-brand-ivory/95 font-sans max-w-2xl mx-auto mb-12 font-light drop-shadow-md">
          Curated collections of sarees, kurtis, designer wear, and statement pieces crafted for confidence and elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a 
            href="#collections" 
            className="btn-tactile-gold px-10 py-4.5 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center"
          >
            View Collections
          </a>
          <a 
            href="https://wa.me/1234567890?text=Hello%20Dreamz%20Boutique" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-tactile-dark px-10 py-4.5 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center border border-brand-grey/30"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

