"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, X, Camera } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gold-500/20 shadow-2xl" : "bg-transparent"
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
            <p className="text-gold-500 font-serif text-lg font-semibold tracking-wide leading-none">KG</p>
            <p className="text-[#a0a0a0] text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
              Engineered Moments
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
                    : "text-[#c0c0c0] hover:text-gold-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  width={32}
                  height={32}
                  className="rounded-full border border-gold-500/50"
                />
              )}
              {(session.user as any)?.role === "ADMIN" && (
                <Link
                  href="/admin/dashboard"
                  className="text-xs tracking-widest uppercase text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="text-xs tracking-widest uppercase text-[#808080] hover:text-[#c0c0c0] transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-gold-400 transition-colors"
            >
              Sign In
            </button>
          )}
          <Link href="/contact" className="btn-gold text-xs py-2 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#c0c0c0] hover:text-gold-500 transition-colors"
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
            className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-gold-500/10"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-sm tracking-widest uppercase py-2 transition-colors ${
                      pathname === link.href ? "text-gold-500" : "text-[#c0c0c0]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center btn-gold text-xs mt-4"
                >
                  Book a Session
                </Link>
              </li>
              {session ? (
                <li>
                  <button
                    onClick={() => { signOut(); setOpen(false); }}
                    className="text-sm tracking-widest uppercase text-[#808080] hover:text-[#c0c0c0]"
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => { signIn("google"); setOpen(false); }}
                    className="text-sm tracking-widest uppercase text-[#a0a0a0] hover:text-gold-400"
                  >
                    Sign In with Google
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
