import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Photography services by Kishore – Birthday, Wedding, Pregnancy, Newborn, Family, and Portrait sessions. Affordable packages for every occasion.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="pt-32 pb-4 text-center px-6">
        <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold-500" />
          Packages
          <span className="w-8 h-px bg-gold-500" />
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f0eb] font-light">
          Photography{" "}
          <span className="gold-shimmer font-semibold">Services</span>
        </h1>
        <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
      </div>
      <ServicesSection />
      <CTASection />
    </div>
  );
}
