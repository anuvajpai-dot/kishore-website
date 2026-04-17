"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Birthdays", slug: "BIRTHDAY", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80", count: "Celebrate" },
  { name: "Weddings", slug: "MARRIAGE", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", count: "Forever" },
  { name: "Pregnancy", slug: "PREGNANCY", image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&q=80", count: "Expecting" },
  { name: "Newborn", slug: "NEWBORN", image: "https://images.unsplash.com/photo-1555252585-b6a0af4d8e74?w=600&q=80", count: "New Life" },
  { name: "Family", slug: "FAMILY", image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80", count: "Together" },
  { name: "Portraits", slug: "PORTRAIT", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", count: "You" },
];

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            Portfolio
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#f5f0eb] font-light">
            Moments Through{" "}
            <span className="gold-shimmer font-semibold">Every Lens</span>
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <Link href={`/portfolio?category=${cat.slug}`}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent group-hover:from-[#0a0a0a]/70 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase mb-1">{cat.count}</p>
                  <p className="text-[#f5f0eb] font-serif text-2xl font-medium">{cat.name}</p>
                </div>
                <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-gold">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
