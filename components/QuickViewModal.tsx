"use client";

import React, { useState } from 'react';
import { useCart, Product } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

type QuickViewModalProps = {
  productId: string | null;
  productData?: any;
  onClose: () => void;
};

export default function QuickViewModal({ productId, productData, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { toggleWishlistProduct, isInWishlist } = useWishlist();
  const product = productData;

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const getHexColor = (colorName: string) => {
    const map: Record<string, string> = {
      // Boutique / Special Names
      'rosegold': '#C67D82', 'rose gold': '#C67D82',
      'ivory': '#fffff0',
      'off white': '#f8f8ff', 'off-white': '#f8f8ff',
      'champagne': '#fad6a5',
      'mustard': '#ffdb58', 'mustard yellow': '#ffdb58',
      'rust': '#b7410e',
      'charcoal': '#36454f', 'charcoal grey': '#36454f', 'charcoal gray': '#36454f',
      'pastel pink': '#ffd1dc',
      'mint': '#98ff98', 'mint green': '#98ff98',
      'peach': '#ffe5b4',
      'lilac': '#c8a2c8',
      'mauve': '#e0b0ff',
      'taupe': '#483c32',
      'blue stripe': '#87cefa', 'pink stripe': '#ffb6c1', 'grey stripe': '#d3d3d3',

      // Basic Colors
      'red': '#ff0000', 'green': '#008000', 'blue': '#0000ff',
      'yellow': '#ffff00', 'orange': '#ffa500', 'purple': '#800080',
      'black': '#000000', 'white': '#ffffff', 'grey': '#808080', 'gray': '#808080',
      'brown': '#a52a2a', 'pink': '#ffc0cb',

      // Pinks & Reds
      'crimson': '#dc143c', 'crimson red': '#dc143c',
      'maroon': '#800000', 'burgundy': '#800020',
      'hot pink': '#ff69b4', 'deep pink': '#ff1493', 'light pink': '#ffb6c1',
      'magenta': '#ff00ff', 'fuchsia': '#ff00ff',
      'coral': '#ff7f50', 'light coral': '#f08080',
      'salmon': '#fa8072', 'dark salmon': '#e9967a', 'light salmon': '#ffa07a',
      'tomato': '#ff6347',

      // Purples
      'violet': '#ee82ee', 'dark violet': '#9400d3',
      'plum': '#dda0dd', 'indigo': '#4b0082',
      'lavender': '#e6e6fa', 'thistle': '#d8bfd8', 'orchid': '#da70d6',

      // Blues
      'navy': '#000080', 'navy blue': '#000080',
      'dark blue': '#00008b', 'light blue': '#add8e6',
      'sky blue': '#87ceeb', 'deep sky blue': '#00bfff', 'light sky blue': '#87cefa',
      'royal blue': '#4169e1', 'cornflower blue': '#6495ed', 'dodger blue': '#1e90ff',
      'teal': '#008080', 'cyan': '#00ffff', 'light cyan': '#e0ffff', 'dark cyan': '#008b8b',
      'turquoise': '#40e0d0', 'dark turquoise': '#00ced1', 'medium turquoise': '#48d1cc',
      'aquamarine': '#7fffd4', 'aqua': '#00ffff',

      // Greens
      'emerald': '#50c878', 'emerald green': '#50c878',
      'olive': '#808000', 'olive green': '#808000', 'dark olive green': '#556b2f',
      'dark green': '#006400', 'light green': '#90ee90',
      'lime': '#00ff00', 'lime green': '#32cd32',
      'forest green': '#228b22', 'sea green': '#2e8b57', 'medium sea green': '#3cb371',
      'spring green': '#00ff7f', 'pale green': '#98fb98',
      'sage': '#bcbd22', 'sage green': '#bcbd22',

      // Yellows & Oranges
      'gold': '#ffd700', 'goldenrod': '#daa520', 'dark goldenrod': '#b8860b',
      'amber': '#ffbf00', 'apricot': '#fbceb1',
      'dark orange': '#ff8c00',

      // Browns & Neutrals
      'beige': '#f5f5dc', 'tan': '#d2b48c', 'khaki': '#f0e68c', 'dark khaki': '#bdb76b',
      'chocolate': '#d2691e', 'coffee': '#6f4e37', 'mocha': '#967969',
      'saddle brown': '#8b4513', 'sienna': '#a0522d', 'rosy brown': '#bc8f8f',
      'sandy brown': '#f4a460', 'peru': '#cd853f', 'burlywood': '#deb887',
      'wheat': '#f5deb3', 'cornsilk': '#fff8dc', 'blanched almond': '#ffebcd',

      // Grays & Silvers
      'light grey': '#d3d3d3', 'light gray': '#d3d3d3',
      'dark grey': '#a9a9a9', 'dark gray': '#a9a9a9',
      'dim grey': '#696969', 'dim gray': '#696969',
      'slate grey': '#708090', 'slate gray': '#708090',
      'silver': '#c0c0c0', 'gainsboro': '#dcdcdc'
    };
    
    let normalized = colorName.toLowerCase().trim();
    
    // First check explicit map (handles spaces and custom names)
    if (map[normalized]) return map[normalized];
    
    // If not found, try stripping spaces (e.g. 'light blue' -> 'lightblue' for CSS named colors)
    const stripped = normalized.replace(/\s+/g, '');
    return stripped;
  };

  if (!productId || !product) return null;

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      alert("Please select a color");
      return;
    }

    addToCart({
      ...product,
      selectedSize: selectedSize || "Default",
      selectedColor: selectedColor || "Default",
      quantity
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#1a1a1a] text-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row border border-[#333]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-[#111] p-4 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-auto max-h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h2 className="text-3xl font-serif font-bold tracking-wider uppercase mb-2 text-brand-ivory">{product.title}</h2>
          <div className="text-2xl font-sans font-medium text-brand-rosegold mb-6">₹{product.price.toLocaleString()}</div>
          
          <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Color:</h4>
            <div className="flex gap-3">
              {product.colors.map((color: string) => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-brand-rosegold scale-110' : 'border-transparent hover:border-gray-500'}`}
                  style={{ backgroundColor: getHexColor(color) }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Select Size:</h4>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md font-sans text-sm transition-colors ${selectedSize === size ? 'border-brand-rosegold text-brand-rosegold bg-brand-rosegold/10' : 'border-[#444] text-gray-300 hover:border-gray-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-4">
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className="flex-1 bg-brand-rosegold hover:bg-[#a6686c] text-white py-4 px-8 rounded font-bold uppercase tracking-wider text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!selectedSize ? 'Select Size' : !selectedColor ? 'Select Color' : 'Add to Cart'}
              </button>
              
              <button 
                onClick={() => toggleWishlistProduct(product)}
                className={`w-14 h-14 flex items-center justify-center border rounded transition-colors ${isInWishlist(product.id) ? 'border-brand-rosegold text-brand-rosegold' : 'border-[#444] text-gray-400 hover:text-white hover:border-white'}`}
                title="Wishlist"
              >
                <svg className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-brand-rosegold' : 'fill-transparent'}`} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
