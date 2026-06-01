export default function GallerySection() {
  const images = [
    { src: "/images/shop-front.webp", alt: "Dreamz Boutique Exterior", frameType: "frame-wood", title: "Boutique Front" },
    { src: "/images/shop-interior-1.webp", alt: "Dreamz Boutique Interior", frameType: "frame-gold", title: "Luxury Showroom" },
    { src: "/images/shop-interior-2.webp", alt: "Dreamz Boutique Collections", frameType: "frame-gold", title: "Bridal Alcove" },
    { src: "/images/shop-interior-3.webp", alt: "Dreamz Boutique Showroom", frameType: "frame-wood", title: "Signature Sarees" },
  ];

  return (
    <section id="gallery" className="py-24 bg-linen w-full relative z-10 shadow-[0_-15px_30px_rgba(0,0,0,0.1)]">
      {/* Decorative brass rivets */}
      <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-gold-metallic border border-black/30 shadow-md"></div>
      <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-gold-metallic border border-black/30 shadow-md"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-brand-black text-letterpress-dark tracking-wide font-bold">Our Boutique</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-gold"></div>
            <div className="w-2 h-2 rounded-full bg-brand-gold border border-black/10"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-brand-gold"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="grid gap-16">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <div className={`relative p-4 bg-[#fbf9f4] ${images[0].frameType} shadow-2xl w-full transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01]`}>
                <div className="absolute inset-4 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
              {/* Gold Nameplate */}
              <div className="mt-4 px-4 py-1.5 bg-gold-metallic border border-[#967429]/50 rounded-sm shadow-md text-brand-black text-[10px] uppercase font-bold tracking-widest text-center">
                {images[0].title}
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <div className={`relative p-3 bg-[#fbf9f4] ${images[1].frameType} shadow-2xl w-full transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]`}>
                <div className="absolute inset-3 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                <div className="aspect-square overflow-hidden">
                  <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
              {/* Gold Nameplate */}
              <div className="mt-4 px-4 py-1.5 bg-gold-metallic border border-[#967429]/50 rounded-sm shadow-md text-brand-black text-[10px] uppercase font-bold tracking-widest text-center">
                {images[1].title}
              </div>
            </div>
          </div>

          <div className="grid gap-16">
            {/* Image 3 */}
            <div className="flex flex-col items-center">
              <div className={`relative p-3 bg-[#fbf9f4] ${images[2].frameType} shadow-2xl w-full transition-transform duration-500 hover:-rotate-1 hover:scale-[1.01]`}>
                <div className="absolute inset-3 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                <div className="aspect-square overflow-hidden">
                  <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
              {/* Gold Nameplate */}
              <div className="mt-4 px-4 py-1.5 bg-gold-metallic border border-[#967429]/50 rounded-sm shadow-md text-brand-black text-[10px] uppercase font-bold tracking-widest text-center">
                {images[2].title}
              </div>
            </div>

            {/* Image 4 */}
            <div className="flex flex-col items-center">
              <div className={`relative p-4 bg-[#fbf9f4] ${images[3].frameType} shadow-2xl w-full transition-transform duration-500 hover:rotate-1 hover:scale-[1.01]`}>
                <div className="absolute inset-4 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
              {/* Gold Nameplate */}
              <div className="mt-4 px-4 py-1.5 bg-gold-metallic border border-[#967429]/50 rounded-sm shadow-md text-brand-black text-[10px] uppercase font-bold tracking-widest text-center">
                {images[3].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

