import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import CartSidebar from "../components/CartSidebar";
import WishlistSidebar from "../components/WishlistSidebar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mayilini.in'),
  title: {
    default: "The Label by Mayilini | Women's Fashion Boutique in Puducherry",
    template: "%s | The Label by Mayilini"
  },
  description: "Discover contemporary fashion for modern women. Shop designer kurtis, co-ord sets, 3-piece kurti sets, and boutique outfits at Label by Mayilini, Puducherry, India.",
  keywords: [
    "Label by Mayilini Puducherry",
    "Dreamz Fashion Boutique",
    "Designer Kurtis Pondicherry",
    "Co-ord Sets Puducherry",
    "3 Piece Kurti Sets Pondicherry",
    "Women's Online Fashion India",
    "Boutique Clothing Pondicherry"
  ],
  authors: [{ name: "Label by Mayilini" }],
  openGraph: {
    title: "Label by Mayilini | Women's Fashion & Co-ord Sets",
    description: "Contemporary fashion for modern women. Designer kurtis, co-ord sets, and 3-piece kurti sets online from Dreamz Fashion Boutique, Puducherry, India.",
    url: "https://www.mayilini.in",
    siteName: "Label by Mayilini",
    images: [
      {
        url: "/images/logo_circle.png",
        width: 1024,
        height: 1024,
        alt: "Label by Mayilini Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Label by Mayilini | Boutique Online Store",
    description: "Shop designer kurtis, co-ord sets, and 3-piece kurti sets online from Puducherry.",
    images: ["/images/logo_circle.png"],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased bg-brand-ivory text-brand-black`}
    >
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <WishlistProvider>
          <CartProvider>
            {children}
            <CartSidebar />
            <WishlistSidebar />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
