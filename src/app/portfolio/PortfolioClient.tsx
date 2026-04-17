"use client";
import { useState, useCallback, useEffect } from "react";
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

type Photo = {
  id: string;
  title: string;
  category: string;
  url: string;
};

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => setPhotos(data.photos ?? []))
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeFilter === "ALL"
    ? photos
    : photos.filter((p) => p.category === activeFilter);

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
        {loading ? (
          <div className="text-center py-20 text-[#606060] tracking-widest uppercase text-xs">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#606060] tracking-widest uppercase text-xs">No photos in this category yet</div>
        ) : (
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
        )}
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
