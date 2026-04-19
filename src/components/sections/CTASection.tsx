"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/4915163034064?text=Hi%20Kishore%2C%20I%27m%20interested%20in%20a%20photography%20session.";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#F7F2EC] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.04]"
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
          <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] font-light mb-6">
            Ready to Preserve
            <br />
            <span className="gold-shimmer font-semibold">Your Memories?</span>
          </h2>
          <p className="text-[#6B5F5A] text-lg mb-12 max-w-xl mx-auto font-light">
            Let's craft something beautiful together. Every session is a unique story waiting to be told.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3 tracking-widest uppercase text-sm transition-colors duration-300"
            >
              <MessageCircle size={16} />
              Contact on WhatsApp
            </a>
            <a href="tel:+4915163034064" className="btn-outline-gold inline-flex items-center gap-2 justify-center">
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-[#9C8A82]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-500" />
              Munich | Regensburg, Germany
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold-500" />
              +49 151 63034064
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
