export default function CollectionsSection() {
  const collections = [
    {
      id: 1,
      title: "Signature Sarees",
      description: "Handwoven elegance with rich borders and intricate patterns, curated for timeless grace and heritage styling.",
      image: "/images/saree.png"
    },
    {
      id: 2,
      title: "Designer Kurtis",
      description: "Contemporary cuts blended with traditional hand embroidery, providing modern silhouettes for everyday luxury.",
      image: "/images/kurti.png"
    },
    {
      id: 3,
      title: "Bridal Collection",
      description: "Exquisite heavy craftsmanship, custom detailing, and luxurious fabrics tailored to perfection for your special day.",
      image: "/images/bridal.png"
    }
  ];

  return (
    <section id="collections" className="py-24 bg-linen text-brand-black w-full relative z-10 shadow-[0_-15px_30px_rgba(0,0,0,0.15)]">
      {/* Decorative metal rivets at section top corners */}
      <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-gold-metallic border border-black/30 shadow-md"></div>
      <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-gold-metallic border border-black/30 shadow-md"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-letterpress-dark tracking-wide font-bold">Curated Collections</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-gold"></div>
            <div className="w-2 h-2 rounded-full bg-brand-gold border border-black/10"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-brand-gold"></div>
          </div>
        </div>

        <div className="space-y-32">
          {collections.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Wooden Framed Artwork Card */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative p-4 bg-[#fbf9f4] frame-wood shadow-2xl max-w-md w-full transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                  {/* Subtle inner shadow overlay inside frame */}
                  <div className="absolute inset-4 shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
                  <div className="aspect-[4/5] overflow-hidden bg-brand-beige">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Parchment Description Sheet */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
                <div className="bg-parchment p-8 sm:p-12 rounded-2xl w-full border-stitch-gold">
                  {/* Small decorative corner graphics */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-brand-gold/60"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-brand-gold/60"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-brand-gold/60"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brand-gold/60"></div>

                  <h3 className="font-serif text-3xl md:text-4xl mb-4 text-brand-black tracking-wide font-bold">{item.title}</h3>
                  <div className="divider-stitch w-full mb-6"></div>
                  <p className="font-sans font-light text-brand-black/85 mb-8 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <a 
                    href={`https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique,%20I%20would%20like%20more%20information%20about%20the%20${encodeURIComponent(item.title)}%20collection.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile-gold px-6 py-3.5 rounded-lg text-xs uppercase tracking-widest font-bold inline-flex items-center space-x-3"
                  >
                    <span>Inquire Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

