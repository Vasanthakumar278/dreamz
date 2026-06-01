import React from 'react';

export default function VisitStoreSection() {
  return (
    <section id="visit-us" className="py-24 bg-mahogany text-brand-black w-full relative overflow-hidden shadow-[inset_0_10px_30px_rgba(0,0,0,0.8),0_15px_30px_rgba(0,0,0,0.4)]">
      {/* Decorative brass corner brackets or screws */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-brand-gold/40"></div>
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-brand-gold/40"></div>
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-brand-gold/40"></div>
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-brand-gold/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Guest Ledger/Parchment Card */}
          <div className="w-full lg:w-1/3 flex">
            <div className="bg-parchment p-10 rounded-2xl border-stitch-gold shadow-2xl relative w-full flex flex-col justify-between">
              {/* Paper Binder Holes on the left edge to simulate a ring binder diary */}
              <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-8 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full bg-mahogany shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.4)]"></div>
                ))}
              </div>
              
              <div className="pl-6 space-y-6">
                <h2 className="font-serif text-3xl mb-6 font-bold text-letterpress-dark tracking-wide">Visit Our Boutique</h2>
                
                <div className="space-y-6 font-sans">
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-brand-gold font-bold mb-1">Location</h3>
                    <p className="font-light text-brand-black/90 leading-relaxed text-sm">
                      Dreamz Fashion Boutique<br/>
                      162, Nehru Street,<br/>
                      Near Singapur Silai, Pondicherry Bazaar,<br/>
                      Puducherry 605001<br/>
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-brand-gold font-bold mb-1">Hours</h3>
                    <p className="font-light text-brand-black/90 leading-relaxed text-sm">
                      Monday - Saturday: 10:00 AM - 8:30 PM<br/>
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="uppercase tracking-widest text-xs text-brand-gold font-bold mb-1">Contact</h3>
                    <p className="font-light text-brand-black/90 leading-relaxed text-sm">
                      +91 12345 67890<br/>
                      hello@dreamzboutique.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 pl-6">
                <a 
                  href="http://google.com/maps/place/Dreamz/@11.936129,79.828438,19.7z/data=!4m6!3m5!1s0x3a53617fcd856aa1:0x99ee69d78abf3380!8m2!3d11.9362388!4d79.8289203!16s%2Fg%2F11c74fv04j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-tactile-gold px-8 py-3.5 rounded-lg uppercase tracking-widest text-xs font-bold inline-block text-center w-full shadow-md"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Brass Bevel Framed Interactive Map Console */}
          <div className="w-full lg:w-2/3 h-96 lg:h-auto min-h-[400px] p-2 bg-[#1c0f0a] frame-gold shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute inset-2 shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] pointer-events-none z-10"></div>
            <iframe 
              src="https://maps.google.com/maps?q=11.9362388,79.8289203&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

