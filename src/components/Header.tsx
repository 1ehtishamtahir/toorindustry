"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  veterinaryCategories,
  equestrianCategories,
} from "@/data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasMegaMenu: true },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Factory View", href: "/factory" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-14 px-5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Toor Industries - Sign of Quality"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-gray-700 hover:text-white hover:bg-white/20 rounded-full transition-all duration-200"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>

                {megaMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-2xl border border-white/40 p-6 mt-2">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-[var(--color-primary)] mb-3 text-sm">
                          Veterinary Instruments
                        </h3>
                        <ul className="grid grid-cols-2 gap-0.5">
                          {veterinaryCategories.slice(0, 12).map((cat) => (
                            <li key={cat.slug}>
                              <Link
                                href={`/products/veterinary/${cat.slug}`}
                                className="text-xs text-gray-600 hover:text-[var(--color-secondary)] hover:bg-white/50 block py-1 px-2 rounded-lg transition-colors"
                              >
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/products/veterinary"
                          className="text-xs font-medium text-[var(--color-secondary)] mt-2 inline-block px-2"
                        >
                          View All Veterinary →
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-primary)] mb-3 text-sm">
                          Equestrian Equipment
                        </h3>
                        <ul className="grid grid-cols-2 gap-0.5">
                          {equestrianCategories.map((cat) => (
                            <li key={cat.slug}>
                              <Link
                                href={`/products/equestrian/${cat.slug}`}
                                className="text-xs text-gray-600 hover:text-[var(--color-secondary)] hover:bg-white/50 block py-1 px-2 rounded-lg transition-colors"
                              >
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/products/equestrian"
                          className="text-xs font-medium text-[var(--color-secondary)] mt-2 inline-block px-2"
                        >
                          View All Equestrian →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-gray-700 hover:text-white hover:bg-white/20 rounded-full transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden">
          <ul className="p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-white/20 rounded-xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasMegaMenu && (
                  <div className="mobile-category-links pl-4">
                    <Link href="/products/veterinary" onClick={() => setMobileOpen(false)}>Veterinary Instruments <span>↗</span></Link>
                    <Link href="/products/equestrian" onClick={() => setMobileOpen(false)}>Equestrian Equipment <span>↗</span></Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" aria-hidden="true" />
    </header>
  );
}
