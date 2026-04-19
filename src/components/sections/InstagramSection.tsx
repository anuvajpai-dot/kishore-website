"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#F7F2EC]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gold-500/40 rounded-full mb-6">
            <Instagram size={28} className="text-gold-500" />
          </div>
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            Follow the Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1918] font-light mb-4">
            Behind Every{" "}
            <span className="gold-shimmer font-semibold">Frame</span>
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mb-6" />
          <p className="text-[#6B5F5A] text-base mb-8 leading-relaxed max-w-lg mx-auto">
            Moments, stories, and glimpses from sessions — follow{" "}
            <span className="text-[#1C1918] font-medium">@kishoregunda</span> on Instagram
            for the latest work.
          </p>
          <a
            href="https://www.instagram.com/kishoregunda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <Instagram size={14} />
            Follow on Instagram
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
