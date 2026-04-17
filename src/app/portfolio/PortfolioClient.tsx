"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const categories = [
  { key: "ALL", label: "All" },
  { key: "BIRTHDAY", label: "Birthdays" },
  { key: "MARRIAGE", label: "Weddings" },
  { key: "PREGNANCY", label: "Pregnancy" },
  { key: "NEWBORN", label: "Newborn" },
  { key: "FAMILY", label: "Family" },
  { key: "PORTRAIT", label: "Portraits" },
];

// Placeholder photos until real ones are uploaded
const placeholderPhotos = [
  { id: "1", title: "Golden Hour Wedding", category: "MARRIAGE", url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { id: "2", title: "Birthday Joy", category: "BIRTHDAY", url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80" },
  { id: "3", title: "First Moments", category: "NEWBORN", url: "https://images.unsplash.com/photo-1555252585-b6a0af4d8e74?w=800&q=80" },
  { id: "4", title: "Family Bond", category: "FAMILY", url: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80" },
  { id: "5", title: "Expecting", category: "PREGNANCY", url: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800&q=80" },
  { id: "6", title: "Portrait Study", category: "PORTRAIT", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { id: "7", title: "Wedding Vows", category: "MARRIAGE", url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80" },
  { id: "8", title: "Cake Smash", category: "BIRTHDAY", url: "https://images.unsplash.com/photo-1558636508-e0de89a7c1d5?w=800&q=80" },
  { id: "9", title: "Newborn Sleep", category: "NEWBORN", url: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80" },
  { id: "10", title: "Family Portrait", category: "FAMILY", url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
  { id: "11", title: "Maternity Glow", category: "PREGNANCY", url: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800&q=80" },
  { id: "12", title: "Studio Portrait", category: "PORTRAIT", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeFilter === "ALL"
    ? placeholderPhotos
    : placeholderPhotos.filter((p) => p.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold-500" />
          Portfolio
          <span className="w-8 h-px bg-gold-500" />
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f0eb] font-light mb-6">
          A Visual{" "}
          <span className="gold-shimmer font-semibold">Journey</span>
        </h1>
        <div className="w-16 h-px bg-gold-500 mx-auto" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 px-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
              activeFilter === cat.key
                ? "bg-gold-500 text-[#0a0a0a] border-gold-500"
                : "bg-transparent text-[#808080] border-[#303030] hover:border-gold-500/50 hover:text-gold-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filtered.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="masonry-item group cursor-pointer relative overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.title}
                    width={600}
                    height={800}
                    className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-[#f5f0eb] font-serif text-sm">{photo.title}</p>
                    <p className="text-gold-500 text-[10px] tracking-widest uppercase">
                      {categories.find((c) => c.key === photo.category)?.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filtered.map((p) => ({ src: p.url, alt: p.title }))}
        styles={{
          container: { backgroundColor: "rgba(10, 10, 10, 0.98)" },
        }}
      />
    </div>
  );
}
