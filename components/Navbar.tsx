import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-brand-ivory/90 backdrop-blur-md fixed top-0 z-50 border-b border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img src="/images/logo.png" alt="Dreamz Boutique Logo" className="h-12 w-12 object-cover rounded-full shadow-md" />
              <span className="font-serif text-2xl tracking-wider text-brand-black">DREAM'Z</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#collections" className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-black transition-colors">
              Collections
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-black transition-colors">
              About
            </Link>
            <Link href="#gallery" className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-black transition-colors">
              Gallery
            </Link>
            <Link href="#visit-us" className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-black transition-colors">
              Visit Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <span className="text-sm uppercase tracking-widest">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
