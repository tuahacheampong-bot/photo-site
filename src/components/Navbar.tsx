"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#2a2a2a]/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-['Playfair_Display'] text-2xl tracking-wider text-[#fafafa]">
          SHEMEN<span className="text-[#d4a853]">MEDIA</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#a0a0a0] hover:text-[#d4a853] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/booking"
          className="hidden md:inline-block px-5 py-2 text-sm uppercase tracking-widest border border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-all duration-300"
        >
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#fafafa] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-[#a0a0a0] hover:text-[#d4a853] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 text-center text-sm uppercase tracking-widest border border-[#d4a853] text-[#d4a853]"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
