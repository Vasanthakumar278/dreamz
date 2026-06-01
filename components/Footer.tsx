import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-ivory py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <img src="/images/logo.png" alt="Dreamz Boutique Logo" className="h-16 w-16 object-cover rounded-full shadow-lg" />
            <h2 className="font-serif text-3xl tracking-widest">DREAM'Z</h2>
          </div>
          <p className="font-sans font-light text-brand-ivory/70 leading-relaxed text-sm">
            A premium fashion boutique in Puducherry offering curated collections of sarees, kurtis, and designer wear.
          </p>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-brand-gold">Navigation</h3>
          <ul className="space-y-4 font-sans font-light text-sm">
            <li><Link href="#collections" className="hover:text-brand-gold transition-colors">Collections</Link></li>
            <li><Link href="#about" className="hover:text-brand-gold transition-colors">About</Link></li>
            <li><Link href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            <li><Link href="#visit-us" className="hover:text-brand-gold transition-colors">Visit Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-brand-gold">Social</h3>
          <ul className="space-y-4 font-sans font-light text-sm">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Pinterest</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-sans uppercase tracking-widest text-sm mb-6 text-brand-gold">Contact</h3>
          <ul className="space-y-4 font-sans font-light text-sm">
            <li>Puducherry, India</li>
            <li><a href="mailto:hello@dreamzboutique.com" className="hover:text-brand-gold transition-colors">hello@dreamzboutique.com</a></li>
            <li><a href="https://wa.me/1234567890" className="hover:text-brand-gold transition-colors">+91 12345 67890</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-light text-brand-ivory/50">
        <p>&copy; {new Date().getFullYear()} Dreamz Fashion Boutique. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <Link href="#" className="hover:text-brand-ivory transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-ivory transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
