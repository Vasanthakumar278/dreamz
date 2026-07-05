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
  title: "The Label by Mayilini",
  description: "Contemporary Fashion For Modern Women - Sarees, Kurtis, and Designer Wear in Puducherry, India.",
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
