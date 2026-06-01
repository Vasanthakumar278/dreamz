export default function GallerySection() {
  const images = [
    { src: "/images/shop-front.webp", alt: "Dreamz Boutique exterior" },
    { src: "/images/shop-interior-1.webp", alt: "Dreamz Boutique interior" },
    { src: "/images/shop-interior-2.webp", alt: "Dreamz Boutique collections" },
    { src: "/images/shop-interior-3.webp", alt: "Dreamz Boutique showroom" },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-ivory w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-brand-black">Our Boutique</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-6">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-md">
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
              <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="grid gap-6">
            <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
              <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-md">
              <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
