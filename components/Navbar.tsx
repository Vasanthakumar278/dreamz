import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-shelf rounded-2xl max-w-7xl mx-auto w-[calc(100%-2rem)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative p-[2px] bg-gold-metallic rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/logo.png" 
                  alt="Dreamz Boutique Logo" 
                  className="h-12 w-12 object-cover rounded-full border border-black/10" 
                />
              </div>
              <span className="font-serif text-2xl tracking-wider text-engraved-gold font-bold">DREAM'Z</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#collections" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-brand-black font-semibold text-letterpress-dark transition-all duration-200 hover:bg-gold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
              Collections
            </Link>
            <Link href="#about" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-brand-black font-semibold text-letterpress-dark transition-all duration-200 hover:bg-gold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
              About
            </Link>
            <Link href="#gallery" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-brand-black font-semibold text-letterpress-dark transition-all duration-200 hover:bg-gold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
              Gallery
            </Link>
            <Link href="#visit-us" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-brand-black font-semibold text-letterpress-dark transition-all duration-200 hover:bg-gold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
              Visit Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold text-brand-black bg-gold-metallic shadow-sm border border-brand-gold/30 hover:scale-[1.03] active:translate-y-[1px]">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

