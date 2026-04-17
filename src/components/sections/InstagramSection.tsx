"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder Instagram grid using Unsplash images
  const posts = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
    "https://images.unsplash.com/photo-1555252585-b6a0af4d8e74?w=400&q=80",
    "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=400&q=80",
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=400&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            <Instagram size={14} />
            Instagram
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-serif text-4xl text-[#f5f0eb] font-light">
            Follow the{" "}
            <span className="gold-shimmer font-semibold">Journey</span>
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-6 mb-4" />
          <p className="text-[#606060] text-sm tracking-widest">
            @kishoregunda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {posts.map((url, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/kishoregunda"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden aspect-square group block"
            >
              <img
                src={url}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/60 transition-all duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-[#f5f0eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/kishoregunda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <Instagram size={14} />
            View on Instagram
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
