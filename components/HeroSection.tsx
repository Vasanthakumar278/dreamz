export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/shop-front.webp" 
          alt="Dreamz Fashion Boutique Pondicherry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/55"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <div className="flex justify-center mb-8">
          <img src="/images/logo.png" alt="Dreamz Logo" className="h-28 w-28 object-cover rounded-full shadow-2xl border-2 border-brand-gold/40" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 leading-tight">
          Contemporary Fashion <br/> For Modern Women
        </h1>
        <p className="text-lg md:text-xl text-brand-ivory/90 font-sans max-w-2xl mx-auto mb-10 font-light">
          Curated collections of sarees, kurtis, designer wear, and statement pieces crafted for confidence and elegance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#collections" className="px-8 py-4 bg-brand-ivory text-brand-black font-sans uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300 w-full sm:w-auto text-center rounded-3xl shadow-lg">
            View Collections
          </a>
          <a href="https://wa.me/1234567890?text=Hello%20Dreamz%20Boutique" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-brand-ivory text-brand-ivory font-sans uppercase tracking-widest text-sm hover:bg-brand-ivory hover:text-brand-black transition-colors duration-300 w-full sm:w-auto text-center rounded-3xl shadow-lg backdrop-blur-sm">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
