"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Star } from "lucide-react";
import Image from "next/image";

interface Photo {
  id: string;
  title: string;
  description: string | null;
  url: string;
  category: string;
  featured: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const categories = ["BIRTHDAY", "MARRIAGE", "PREGNANCY", "NEWBORN", "FAMILY", "PORTRAIT"];

export default function PortfolioAdmin({ photos: initial }: { photos: Photo[] }) {
  const [photos, setPhotos] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "", description: "", url: "", category: "PORTRAIT", featured: false, sortOrder: 0,
  });
  const [submitting, setSubmitting] = useState(false);

  const addPhoto = async () => {
    if (!form.title || !form.url || !form.category) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.photo) {
        setPhotos((prev) => [data.photo, ...prev]);
        setForm({ title: "", description: "", url: "", category: "PORTRAIT", featured: false, sortOrder: 0 });
        setShowForm(false);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const deletePhoto = async (id: string) => {
    if (!confirm("Delete this photo?")) return;
    const res = await fetch("/api/photos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-[#606060] hover:text-gold-500 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="font-serif text-3xl text-[#f5f0eb]">Portfolio Management</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 btn-gold py-2 px-5 text-xs"
          >
            <Plus size={14} />
            Add Photo
          </button>
        </div>

        {/* Add Photo Form */}
        {showForm && (
          <div className="glass border border-gold-500/20 p-6 mb-8">
            <h2 className="text-[#c0c0c0] font-medium mb-5">Add New Photo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#505050] text-xs uppercase tracking-widest block mb-1.5">Title *</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-3 py-2.5 text-sm outline-none"
                />
              </div>
              <div>
                <label className="text-[#505050] text-xs uppercase tracking-widest block mb-1.5">Image URL *</label>
                <input
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-3 py-2.5 text-sm outline-none"
                />
              </div>
              <div>
                <label className="text-[#505050] text-xs uppercase tracking-widest block mb-1.5">Category *</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-3 py-2.5 text-sm outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-[#111]">{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[#505050] text-xs uppercase tracking-widest block mb-1.5">Description</label>
                <input
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-3 py-2.5 text-sm outline-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="accent-gold-500"
                />
                <label htmlFor="featured" className="text-[#909090] text-sm">Feature on homepage</label>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={addPhoto}
                disabled={submitting}
                className="btn-gold py-2 px-6 text-xs disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save Photo"}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="text-xs tracking-widest uppercase text-[#606060] hover:text-[#909090] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {photo.featured && (
                  <div className="absolute top-2 left-2">
                    <Star size={12} className="text-gold-500 fill-gold-500" />
                  </div>
                )}
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/70 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => deletePhoto(photo.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 border border-red-400/40 text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-[#c0c0c0] text-xs truncate">{photo.title}</p>
                <p className="text-[#505050] text-[10px] uppercase tracking-widest">{photo.category}</p>
              </div>
            </div>
          ))}

          {photos.length === 0 && (
            <div className="col-span-4 text-center py-16 text-[#505050]">
              No photos uploaded yet. Add your first photo above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
