"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

      {/* Cinematic overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent mr-[10%] hidden lg:block" />

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
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[#f5f0eb] leading-[1.05] mb-6"
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
          className="text-[#909090] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From engineering precision to artistic storytelling,{" "}
          <span className="text-[#c0c0c0]">Kishore</span> transforms moments into timeless memories.
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
          <Link href="/contact" className="btn-outline-gold">
            Book a Session
          </Link>
          <a
            href="https://www.instagram.com/kishoregunda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#909090] hover:text-gold-400 transition-colors text-sm tracking-widest uppercase"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-12 mt-20 pt-12 border-t border-gold-500/10"
        >
          {[
            { value: "500+", label: "Sessions" },
            { value: "6", label: "Categories" },
            { value: "100%", label: "Dedication" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-3xl text-gold-500 font-semibold">{value}</p>
              <p className="text-[#606060] text-xs tracking-widest uppercase mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#505050] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
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
