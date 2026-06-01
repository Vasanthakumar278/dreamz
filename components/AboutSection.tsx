export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-black text-brand-ivory w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-sans uppercase tracking-widest text-brand-gold text-sm mb-6">Our Story</h2>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              A Legacy of <br/> Craftsmanship & Style
            </h3>
            <p className="font-sans font-light text-brand-ivory/80 mb-6 text-lg leading-relaxed">
              Founded in the heart of Puducherry, Dreamz Fashion Boutique is more than just a store; it is a destination for the modern woman who appreciates fine tailoring and exquisite fabrics.
            </p>
            <p className="font-sans font-light text-brand-ivory/80 mb-10 text-lg leading-relaxed">
              We believe in the power of personal styling. Our collections are carefully curated to ensure that every piece tells a story of elegance and empowers you to walk with confidence.
            </p>
            <div className="w-16 h-px bg-brand-gold rounded-full"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/images/shop-interior-1.webp" 
                alt="Dreamz Boutique Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
