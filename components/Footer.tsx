import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mahogany text-brand-ivory py-20 px-4 md:px-8 relative overflow-hidden border-t-4 border-[#80611d]/60 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      {/* Internal Stitched Border Frame */}
      <div className="absolute inset-4 border border-stitch-ivory rounded-xl pointer-events-none opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative p-[1px] bg-gold-metallic rounded-full shadow-md">
              <img src="/images/logo.png" alt="Dreamz Boutique Logo" className="h-16 w-16 object-cover rounded-full border border-black/10" />
            </div>
            <h2 className="font-serif text-3xl tracking-widest text-engraved-gold font-bold">DREAM'Z</h2>
          </div>
          <p className="font-sans font-light text-brand-ivory/80 leading-relaxed text-sm">
            A premium fashion boutique in Puducherry offering curated collections of sarees, kurtis, and designer wear.
          </p>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-xs mb-6 text-brand-gold font-bold text-letterpress-light">Navigation</h3>
          <ul className="space-y-4 font-sans font-light text-sm text-brand-ivory/85">
            <li><Link href="#collections" className="hover:text-brand-gold hover:underline transition-all">Collections</Link></li>
            <li><Link href="#about" className="hover:text-brand-gold hover:underline transition-all">About</Link></li>
            <li><Link href="#gallery" className="hover:text-brand-gold hover:underline transition-all">Gallery</Link></li>
            <li><Link href="#visit-us" className="hover:text-brand-gold hover:underline transition-all">Visit Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-xs mb-6 text-brand-gold font-bold text-letterpress-light">Social</h3>
          <ul className="space-y-4 font-sans font-light text-sm text-brand-ivory/85">
            <li><a href="#" className="hover:text-brand-gold hover:underline transition-all">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-gold hover:underline transition-all">Facebook</a></li>
            <li><a href="#" className="hover:text-brand-gold hover:underline transition-all">Pinterest</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-xs mb-6 text-brand-gold font-bold text-letterpress-light">Contact</h3>
          <ul className="space-y-4 font-sans font-light text-sm text-brand-ivory/85">
            <li>Puducherry, India</li>
            <li><a href="mailto:hello@dreamzboutique.com" className="hover:text-brand-gold hover:underline transition-all">hello@dreamzboutique.com</a></li>
            <li><a href="https://wa.me/1234567890" className="hover:text-brand-gold hover:underline transition-all">+91 12345 67890</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-light text-brand-ivory/55 relative z-10">
        <p>&copy; {new Date().getFullYear()} Dreamz Fashion Boutique. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <Link href="#" className="hover:text-brand-ivory transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-ivory transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

