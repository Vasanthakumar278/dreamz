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
    <section className="py-24 bg-brand-beige w-full text-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-brand-black/10">
          {highlights.map((item, index) => (
            <div key={index} className="px-6 py-8 md:py-0 flex flex-col items-center">
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="font-sans font-light text-brand-black/70 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
