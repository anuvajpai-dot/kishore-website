"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/3 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-500" />
            Let's Create
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#f5f0eb] font-light mb-6">
            Ready to Preserve
            <br />
            <span className="gold-shimmer font-semibold">Your Memories?</span>
          </h2>
          <p className="text-[#707070] text-lg mb-12 max-w-xl mx-auto font-light">
            Let's craft something beautiful together. Every session is a unique story waiting to be told.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-gold">
              Book a Session
            </Link>
            <a href="tel:+4915163034064" className="btn-outline-gold inline-flex items-center gap-2 justify-center">
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-[#606060]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-500" />
              Regensburg, Germany
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold-500" />
              +49 151 63034064
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gold-500" />
              kishore.gunda01@gmail.com
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
