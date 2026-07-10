"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left block: Inline on Desktop, Burger Menu on Mobile */}
          <div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="nav-el relative group font-anton text-sm uppercase tracking-[0.15em] text-[#0A0A0A] hover:opacity-75 transition-opacity py-1">
                <span>GALLERY</span>
                <span className="nav-underline absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-between w-6 h-[14px] z-50 relative pointer-events-auto cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className={`mobile-burger-line h-[2px] w-full bg-black transition-all duration-300 origin-left ${mobileMenuOpen ? "rotate-[38deg] translate-x-[3px] -translate-y-[2px]" : ""}`} />
              <span className={`mobile-burger-line h-[2px] w-full bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`mobile-burger-line h-[2px] w-full bg-black transition-all duration-300 origin-left ${mobileMenuOpen ? "-rotate-[38deg] translate-x-[3px] translate-y-[2px]" : ""}`} />
            </button>
          </div>

          {/* Center Logo: Site name FROM */}
          <a href="#" className="nav-el header-logo font-anton text-4xl md:text-[2.75rem] font-normal tracking-[0.05em] text-[#0A0A0A] select-none text-center transform -translate-y-[2px] z-50 relative">
            FROM
          </a>

          {/* Right: Contact link */}
          <a href="mailto:hello@from.studio" className="nav-el font-anton text-xs md:text-sm uppercase tracking-[0.15em] text-[#0A0A0A] hover:opacity-60 transition-opacity pt-1 z-50 relative">
            CONTACT
          </a>
        </div>
      </header>

      {/* 1.1 MOBILE MENU DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 grain-overlay opacity-5 pointer-events-none" />
        <nav className="flex flex-col space-y-8 text-center font-anton text-3xl tracking-widest uppercase">
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#FF2E2E] transition-colors duration-300"
          >
            GALLERY
          </a>
          <a
            href="mailto:hello@from.studio"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#FF2E2E] transition-colors duration-300"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </>
  );
}
