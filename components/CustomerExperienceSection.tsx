export default function CustomerExperienceSection() {
  const highlights = [
    {
      title: "Personalized Styling",
      description: "Experience one-on-one sessions with our fashion experts to find your perfect look."
    },
    {
      title: "Premium Fabrics",
      description: "We source only the finest materials, ensuring every garment feels as luxurious as it looks."
    },
    {
      title: "Trusted Local Boutique",
      description: "A beloved fashion destination in Puducherry, built on years of trust and quality."
    }
  ];

  return (
    <section className="py-24 bg-[#eae6dc] bg-linen w-full text-brand-black relative z-10 shadow-[inset_0_10px_20px_rgba(0,0,0,0.05),0_10px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-parchment p-8 sm:p-10 rounded-xl relative border-stitch-gold text-center flex flex-col items-center shadow-[0_10px_25px_rgba(40,30,15,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(40,30,15,0.15)] transition-all duration-300"
            >
              {/* Pin / Rivet holder at top center of card */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gold-metallic border border-black/30 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]"></div>
              </div>
              
              <h3 className="font-serif text-2xl mb-4 mt-2 text-brand-black tracking-wide font-bold text-letterpress-dark">{item.title}</h3>
              <div className="divider-stitch w-1/2 mb-6"></div>
              <p className="font-sans font-light text-brand-black/80 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

