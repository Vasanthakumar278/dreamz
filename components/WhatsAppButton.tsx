export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/1234567890?text=Hello%20Dreamz%20Boutique,%20I%20would%20like%20more%20information." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-b from-[#1ebd5d] to-[#0f8c41] text-[#dfca8c] rounded-full border-2 border-[#dfca8c] shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-110 hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      {/* Outer physical leather stitching overlay */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#dfca8c]/50 pointer-events-none"></div>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      
      <span className="absolute right-full mr-4 bg-[#2b1810] text-[#faf5e6] text-xs font-bold px-3 py-2 rounded-lg border border-[#dfca8c]/30 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-letterpress-light">
        Chat with us
      </span>
    </a>
  );
}

