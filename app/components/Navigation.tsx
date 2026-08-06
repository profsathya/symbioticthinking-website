"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/learners", label: "For Learners" },
  { href: "/educators", label: "For Educators" },
  { href: "/framework", label: "Framework" },
  { href: "/evidence", label: "Evidence" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  // { href: "/learn", label: "Learn" }, // Hidden for now - activities being redesigned
  // { href: "/portable", label: "Portable" }, // Reachable from Framework page and footer
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <span className="text-2xl">🥋</span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Symbiotic Thinking
              </span>
              <span className="text-[0.65rem] italic text-gray-500" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                道場 — a place of the way
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA - hidden on very small screens, shown on sm+ */}
            <a
              href="https://dojo.symbioticthinking.ai"
              className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base md:px-5"
            >
              Enter the Dojo
            </a>

            {/* Hamburger Button - shown on mobile only */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // X icon
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA - shown only on very small screens where header CTA is hidden */}
            <a
              href="https://dojo.symbioticthinking.ai"
              className="sm:hidden block py-3 px-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-center transition-colors"
            >
              Enter the Dojo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
