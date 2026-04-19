"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Camera, Baby, Users, Stars, Cake } from "lucide-react";

const services = [
  {
    icon: Cake,
    title: "Birthday Photography",
    description: "Freeze the joy, laughter, and surprise of your special day in frames that tell the full story.",
    features: ["2–4 hour session", "Edited gallery", "Print-ready files"],
    featured: true,
  },
  {
    icon: Stars,
    title: "Pregnancy Shoot",
    description: "Celebrate the beautiful journey of expecting with breathtaking maternity portraits.",
    features: ["Indoor & outdoor", "Multiple outfits", "Styling guidance"],
  },
  {
    icon: Baby,
    title: "Newborn Photography",
    description: "Precious first days preserved forever — safe, gentle, and professionally crafted.",
    features: ["Studio setup", "Safety first", "Lifestyle options"],
  },
  {
    icon: Users,
    title: "Family Events",
    description: "Capture the bonds that matter most across gatherings, milestones, and everyday moments.",
    features: ["Outdoor preferred", "Group posing", "Same-day preview"],
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description: "Professional portraits that reveal your authentic self — for careers, profiles, or legacy.",
    features: ["1–2 hour session", "Multiple looks", "Retouched selection"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            Services
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1918] font-light">
            Every{" "}
            <span className="gold-shimmer font-semibold">Occasion</span>{" "}Deserves
            <br />
            a Masterpiece
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-6 mb-4" />
          <p className="text-[#7A6F68] text-sm tracking-widest uppercase">
            Affordable packages for every special occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 border transition-all duration-300 group hover:-translate-y-1 hover:shadow-md ${
                service.featured
                  ? "border-gold-500/50 bg-gradient-to-b from-gold-500/5 to-white shadow-sm"
                  : "border-[#EAE4DC] bg-white hover:border-gold-500/40"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-500 text-white text-[10px] tracking-widest uppercase font-bold px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`w-12 h-12 flex items-center justify-center border rounded-full mb-6 transition-colors ${
                service.featured ? "border-gold-500 bg-gold-500/10" : "border-gold-500/30 group-hover:border-gold-500"
              }`}>
                <service.icon size={20} className="text-gold-500" />
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] font-medium mb-3">{service.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#888] text-xs">
                    <span className="w-1 h-1 bg-gold-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`text-xs tracking-widest uppercase transition-colors ${
                  service.featured
                    ? "text-gold-500 hover:text-gold-400"
                    : "text-[#888] hover:text-gold-500"
                }`}
              >
                Enquire Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
