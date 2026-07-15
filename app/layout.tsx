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
  description: "Discover contemporary fashion for modern women. Shop custom designer kurtis, designer sarees, bridal wear, and custom boutique outfits at The Label by Mayilini, Puducherry, India.",
  keywords: [
    "Mayilini Boutique Puducherry",
    "Boutique in Pondicherry",
    "Designer Sarees Puducherry",
    "Custom Kurtis Pondicherry",
    "Bridal Wear Puducherry",
    "Women's Clothing Store Pondicherry",
    "Contemporary Women Fashion India",
    "Designer Blouses Puducherry"
  ],
  authors: [{ name: "The Label by Mayilini" }],
  openGraph: {
    title: "The Label by Mayilini | Women's Boutique in Puducherry",
    description: "Contemporary fashion for modern women. Designer sarees, custom kurtis, and bridal wear tailored to perfection in Puducherry, India.",
    url: "https://www.mayilini.in",
    siteName: "The Label by Mayilini",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "The Label by Mayilini Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Label by Mayilini | Boutique in Puducherry",
    description: "Shop designer sarees, kurtis, and custom bridal wear in Puducherry.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
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
