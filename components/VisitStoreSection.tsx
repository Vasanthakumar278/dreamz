import React from 'react';

export default function VisitStoreSection() {
  return (
    <section id="visit-us" className="py-24 bg-brand-ivory text-brand-black w-full border-t border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-4xl mb-8">Visit Our Boutique</h2>
            
            <div className="space-y-8 font-sans">
              <div>
                <h3 className="uppercase tracking-widest text-sm text-brand-gold mb-2">Location</h3>
                <p className="font-light text-brand-black/80 leading-relaxed">
                  Dreamz Fashion Boutique<br/>
                  162, Nehru Street,<br/>
                  Near Singapur Silai, Pondicherry Bazaar,<br/>
                  Puducherry 605001<br/>
                  India
                </p>
              </div>
              
              <div>
                <h3 className="uppercase tracking-widest text-sm text-brand-gold mb-2">Hours</h3>
                <p className="font-light text-brand-black/80 leading-relaxed">
                  Monday - Saturday: 10:00 AM - 8:30 PM<br/>
                  Sunday: 11:00 AM - 6:00 PM
                </p>
              </div>
              
              <div>
                <h3 className="uppercase tracking-widest text-sm text-brand-gold mb-2">Contact</h3>
                <p className="font-light text-brand-black/80 leading-relaxed">
                  +91 12345 67890<br/>
                  hello@dreamzboutique.com
                </p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="http://google.com/maps/place/Dreamz/@11.936129,79.828438,19.7z/data=!4m6!3m5!1s0x3a53617fcd856aa1:0x99ee69d78abf3380!8m2!3d11.9362388!4d79.8289203!16s%2Fg%2F11c74fv04j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-black text-brand-ivory uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors duration-300 inline-block text-center w-full sm:w-auto rounded-3xl"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 h-96 lg:h-auto min-h-[400px] bg-brand-grey/10 relative overflow-hidden rounded-3xl shadow-xl flex items-center justify-center">
            <iframe 
              src="https://maps.google.com/maps?q=11.9362388,79.8289203&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
