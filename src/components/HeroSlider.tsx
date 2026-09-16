"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero/1.jpeg",
    alt: "Veterinary surgical instruments precision crafted",
    tag: "Veterinary Excellence",
  },
  {
    image: "/images/hero/2.jpeg",
    alt: "Professional veterinary tools for livestock care",
    tag: "Global Reach",
  },
  {
    image: "/images/hero/3.jpeg",
    alt: "Equestrian equipment and horse riding gear",
    tag: "Equestrian Precision",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[650px] overflow-hidden bg-black">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="page-wrap w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="w-2 h-2 bg-[var(--coral)] rounded-full animate-pulse" />
              <span className="text-white/80 text-xs tracking-[.2em] uppercase font-semibold">
                Since 1960 · Sialkot, Pakistan
              </span>
            </div>

            <h1 className="text-white leading-[.92]">
              Tools that move<br />
              <span className="text-[var(--coral)]">care forward.</span>
            </h1>

            <p className="text-lg text-white/70 mt-8 max-w-lg leading-relaxed">
              Veterinary and equestrian instruments engineered with precision,
              made for professionals, and trusted across the world.
            </p>

            <div className="flex gap-4 mt-10">
              <Link href="/products" className="button button-coral group">
                Explore the range
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link href="/about" className="button button-quiet group">
                Our story
                <ChevronRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/50 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-[var(--coral)]"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/50 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute top-8 right-8 z-10 flex flex-col items-end gap-3">
        <div className="text-white/40 text-xs tracking-[.3em] uppercase">
          {heroSlides[current].tag}
        </div>
        <div className="text-white/30 text-xs tracking-widest font-mono">
          {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
