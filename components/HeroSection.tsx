export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/shop-front.webp" 
          alt="The Label by Mayilini Pondicherry" 
          className="w-full h-full object-cover"
        />
        {/* Soft fabric vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/80"></div>
        {/* Fine overlay border mimicking a wooden frame edge for the page */}
        <div className="absolute inset-3 md:inset-4 border-2 border-brand-rosegold/30 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-16 md:pt-20 pb-8">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 leading-tight text-letterpress-light tracking-wide">
          Contemporary Fashion <br/> For Modern Women
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-brand-ivory/95 font-sans max-w-2xl mx-auto mb-8 md:mb-10 font-light drop-shadow-md">
          Curated collections of Kurtis, Co-ord sets, 3-piece kurti sets, and statement designer pieces crafted for confidence and elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a 
            href="#collections" 
            className="btn-tactile-rosegold px-8 sm:px-10 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center"
          >
            View Collections
          </a>
          <a 
            href="https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-tactile-dark px-8 sm:px-10 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center border border-brand-grey/30"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

