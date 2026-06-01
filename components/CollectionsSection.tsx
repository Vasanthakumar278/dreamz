export default function CollectionsSection() {
  const collections = [
    {
      id: 1,
      title: "Signature Sarees",
      description: "Handwoven elegance for timeless grace.",
      image: "/images/saree.png"
    },
    {
      id: 2,
      title: "Designer Kurtis",
      description: "Contemporary silhouettes for everyday luxury.",
      image: "/images/kurti.png"
    },
    {
      id: 3,
      title: "Bridal Collection",
      description: "Exquisite craftsmanship for your special day.",
      image: "/images/bridal.png"
    }
  ];

  return (
    <section id="collections" className="py-24 bg-brand-ivory text-brand-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Curated Collections</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {collections.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] overflow-hidden group rounded-3xl shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left px-4 md:px-12">
                <h3 className="font-serif text-3xl md:text-4xl mb-6">{item.title}</h3>
                <p className="font-sans font-light text-brand-black/70 mb-10 text-lg leading-relaxed max-w-md">
                  {item.description}
                </p>
                <a 
                  href={`https://wa.me/1234567890?text=Hello%20Dreamz%20Boutique,%20I%20would%20like%20more%20information%20about%20the%20${encodeURIComponent(item.title)}%20collection.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-sans uppercase tracking-widest text-sm text-brand-black border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
                >
                  <span>Inquire Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
