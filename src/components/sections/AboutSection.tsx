"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Aperture, Heart, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeUp}
              className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-gold-500" />
              The Story
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#1C1918] font-light mb-6 leading-tight">
              From{" "}
              <span className="gold-shimmer font-semibold">Engineer</span>
              <br />
              to Artist
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-gold-500 mb-8" />
            <motion.p variants={fadeUp} className="text-[#5C5550] leading-relaxed mb-6 text-lg font-light">
              Kishore's journey began in the world of engineering — where every detail mattered, every structure
              had to be precise, and every solution had to be elegant. These principles didn't leave him when
              he picked up his first camera.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#7A6F68] leading-relaxed mb-8">
              Today, he brings the same meticulous eye for detail, the same pursuit of perfection, and an
              overflowing passion for human emotion to every session. The result is photography that feels
              both technically flawless and deeply personal — moments engineered to last forever.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#7A6F68] leading-relaxed mb-10">
              With acclaimed experience and professional training from expert photographers, Kishore has
              mastered the art of capturing authentic emotion in its purest form.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/about" className="btn-outline-gold">
                Read More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Photo + Visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Profile photo */}
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-gold-500/20">
              <Image
                src="/images/kishore/IMG_6868.JPG"
                alt="Kishore Gunda – Photographer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#1a1a1a] font-serif text-lg">Kishore Gunda</p>
                <p className="text-gold-500 text-xs tracking-widest uppercase">Photographer</p>
              </div>
            </div>
            {/* Credibility card */}
            <div className="glass rounded-none p-8 border border-gold-500/10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <Award size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-serif text-xl mb-2 font-medium">
                    Acclaimed Experience
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    Professional training from industry-leading photographers with expertise across
                    portraiture, event, and lifestyle photography.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-none p-8 border border-gold-500/10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <Aperture size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-serif text-xl mb-2 font-medium">
                    Technical Precision
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    An engineer's eye for detail combined with artistic instinct ensures every image
                    is perfectly composed, lit, and timed.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-none p-8 border border-gold-500/10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <Heart size={20} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-[#f5f0eb] font-serif text-xl mb-2 font-medium">
                    Emotional Storytelling
                  </h3>
                  <p className="text-[#707070] text-sm leading-relaxed">
                    Each session is crafted to capture genuine emotion — laughter, tears, tenderness,
                    and the warmth between loved ones.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold-500 pl-6 py-2">
              <p className="text-[#c0c0c0] font-serif text-lg italic">
                "Every photograph is an engineering feat of light, time, and emotion."
              </p>
              <cite className="text-[#606060] text-xs tracking-widest uppercase mt-3 block">
                — Kishore Gunda
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
