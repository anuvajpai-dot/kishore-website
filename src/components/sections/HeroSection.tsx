"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/4915163034064?text=Hi%20Kishore%2C%20I%27m%20interested%20in%20a%20photography%20session.";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FDFCFA]" />

      {/* Subtle gold dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/30 to-transparent ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/30 to-transparent mr-[10%] hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            Engineered Moments
            <span className="w-8 h-px bg-gold-500" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#1C1918] leading-[1.05] mb-6"
        >
          Capturing Life's
          <br />
          <span className="gold-shimmer font-semibold">Most Precious</span>
          <br />
          Moments
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#6B5F5A] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From engineering precision to artistic storytelling,{" "}
          <span className="text-[#1a1a1a] font-medium">Kishore</span> transforms moments into timeless memories.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/portfolio" className="btn-gold">
            View Portfolio
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3 tracking-widest uppercase text-sm transition-colors duration-300"
          >
            <MessageCircle size={16} />
            Contact on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/kishoregunda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9C8A82] hover:text-gold-500 transition-colors text-sm tracking-widest uppercase"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#aaa] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={16} className="text-gold-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
