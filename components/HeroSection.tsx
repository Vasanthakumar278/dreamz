export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/shop-front.webp" 
          alt="The Label by Mayilini Pondicherry" 
          className="w-full h-full object-cover"
        />
        {/* Soft fabric vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/80"></div>
        {/* Fine overlay border mimicking a wooden frame edge for the page */}
        <div className="absolute inset-4 border-2 border-brand-rosegold/30 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-24">

        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 leading-tight text-letterpress-light tracking-wide">
          Contemporary Fashion <br/> For Modern Women
        </h1>
        <p className="text-lg md:text-xl text-brand-ivory/95 font-sans max-w-2xl mx-auto mb-12 font-light drop-shadow-md">
          Curated collections of sarees, kurtis, designer wear, and statement pieces crafted for confidence and elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a 
            href="#collections" 
            className="btn-tactile-rosegold px-10 py-4.5 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center"
          >
            View Collections
          </a>
          <a 
            href="https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique" 
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

