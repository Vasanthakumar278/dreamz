"use client";

import React, { useState, useEffect, useCallback } from 'react';

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: "/images/shop-front.webp",
      tag: "Boutique Collection",
      title: "Contemporary Fashion\nFor Modern Women",
      subtitle: "Curated collections of Kurtis, Co-ord sets, 3-piece kurti sets, and statement designer pieces crafted for confidence and elegance.",
      primaryBtnText: "View Collections",
      primaryBtnLink: "#collections",
      secondaryBtnText: "WhatsApp Us",
      secondaryBtnLink: "https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique"
    },
    {
      id: 2,
      image: "/images/cat_3piece.png",
      tag: "Festive & Occasion Wear",
      title: "3-Piece Kurti\nEnsembles",
      subtitle: "Complete elegant suits featuring detailed kurtis, matching pants, and rich dupattas designed for grand celebrations.",
      primaryBtnText: "Explore 3-Piece Sets",
      primaryBtnLink: "#products",
      secondaryBtnText: "WhatsApp Us",
      secondaryBtnLink: "https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique,%20I%20want%20to%20know%20about%203-Piece%20Kurti%20Sets"
    },
    {
      id: 3,
      image: "/images/cat_2piece.png",
      tag: "Modern Comfort",
      title: "Trendy Matching\nCo-ord Sets",
      subtitle: "Effortless 2-piece co-ord sets crafted for modern comfort, casual chic outings, and stylish daily wear.",
      primaryBtnText: "Shop Co-ord Sets",
      primaryBtnLink: "#products",
      secondaryBtnText: "WhatsApp Us",
      secondaryBtnLink: "https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique,%20I%20want%20to%20know%20about%20Co-ord%20Sets"
    },
    {
      id: 4,
      image: "/images/cat_kurti.png",
      tag: "Everyday Luxury",
      title: "Designer Kurtis &\nHand Embroideries",
      subtitle: "Contemporary cuts blended with traditional hand embroidery, providing modern silhouettes for everyday luxury.",
      primaryBtnText: "Browse Kurtis",
      primaryBtnLink: "#products",
      secondaryBtnText: "WhatsApp Us",
      secondaryBtnLink: "https://wa.me/9677986327?text=Hello%20Mayilini%20Boutique,%20I%20want%20to%20know%20about%20Kurtis"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-20 md:py-24">
      {/* Background Image Slideshow with Smooth Crossfade */}
      {slides.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title.replace('\n', ' ')} 
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
              idx === currentIndex ? "scale-105" : "scale-100"
            }`}
          />
          {/* Soft vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/75 via-brand-black/55 to-brand-black/85"></div>
        </div>
      ))}

      {/* Fine overlay border mimicking a wooden frame edge for the page */}
      <div className="absolute inset-3 md:inset-4 border-2 border-brand-rosegold/30 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>

      {/* Slide Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-16 md:pt-20 pb-12">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id}
            className={`transition-all duration-700 ${
              idx === currentIndex ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
            }`}
          >
            {/* Tag Badge */}
            <div className="inline-block px-4 py-1.5 bg-brand-rosegold/20 border border-brand-rosegold/40 rounded-full mb-6 backdrop-blur-md shadow-lg">
              <span className="text-brand-rosegold text-xs uppercase tracking-widest font-bold">
                {slide.tag}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 leading-tight text-letterpress-light tracking-wide whitespace-pre-line">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-brand-ivory/95 font-sans max-w-2xl mx-auto mb-8 md:mb-10 font-light drop-shadow-md">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a 
                href={slide.primaryBtnLink} 
                className="btn-tactile-rosegold px-8 sm:px-10 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center"
              >
                {slide.primaryBtnText}
              </a>
              <a 
                href={slide.secondaryBtnLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-tactile-dark px-8 sm:px-10 py-4 rounded-full font-sans uppercase tracking-widest text-xs font-bold w-full sm:w-auto text-center border border-brand-grey/30"
              >
                {slide.secondaryBtnText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Slide Indicator Dots at Bottom */}
      <div className="absolute bottom-6 md:bottom-8 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              idx === currentIndex 
                ? "w-8 bg-brand-rosegold shadow-[0_0_12px_rgba(198,125,130,0.9)]" 
                : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
