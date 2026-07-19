"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects",     href: "#portfolio" },
  { label: "Reviews",      href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link href="#home" className="logo">
          <span className="logo-icon">A</span>
          <span className="logo-text">
            AIAQ<span className="logo-accent">UIRE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="header-cta">
          <a href="#contact" className="btn-header-cta">
            Get Quote <ArrowRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-header-cta nav-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
