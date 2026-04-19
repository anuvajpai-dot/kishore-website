"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/4915163034064?text=Hi%20Kishore%2C%20I%27m%20interested%20in%20a%20photography%20session.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFCFA]/95 backdrop-blur-md border-b border-[#EAE4DC] shadow-sm"
          : "bg-[#FDFCFA]/85 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center border border-gold-500/60 rounded-full group-hover:border-gold-400 transition-colors">
            <Camera size={18} className="text-gold-500 group-hover:text-gold-400 transition-colors" />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="text-[#1C1918] font-serif text-base font-semibold tracking-wide leading-none">
              The Ordinary Photographer
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-[#6B5F5A] hover:text-gold-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors duration-300"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#333] hover:text-gold-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-sm tracking-widest uppercase py-2 transition-colors ${
                      pathname === link.href ? "text-gold-500" : "text-[#555]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 mt-4 w-full transition-colors"
                >
                  <MessageCircle size={14} />
                  Contact on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
