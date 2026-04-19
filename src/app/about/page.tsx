import type { Metadata } from "next";
import { Award, Aperture, Heart, Camera, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Kishore – from engineer to professional photographer. Where precision meets emotion.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#FDFCFA]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            About Kishore
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1918] font-light mb-6">
            The Story Behind
            <br />
            <span className="gold-shimmer font-semibold">Every Frame</span>
          </h1>
          <div className="w-16 h-px bg-gold-500 mx-auto" />
        </div>
      </div>

      {/* Main story */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-28">
          <div>
            {/* Kishore portrait */}
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-gold-500/20 mb-10">
              <Image
                src="/images/kishore/IMG_6868.JPG"
                alt="Kishore Gunda – Photographer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <h2 className="font-serif text-3xl text-[#1a1a1a] mb-8 font-light">
              From Engineering Precision to{" "}
              <span className="text-gold-500">Artistic Vision</span>
            </h2>
            <div className="space-y-6 text-[#5C5550] leading-relaxed">
              <p>
                Kishore Gunda's story is one of transformation — of a meticulous engineer who discovered
                that the most complex system worth mastering was the human moment.
              </p>
              <p>
                His engineering background gave him something most photographers don't have from day one:
                an instinct for precision. Every composition is calculated. Every light source assessed.
                Every moment anticipated — and then felt.
              </p>
              <p>
                Kishore has developed a signature style that feels simultaneously structured and
                spontaneous. His images don't just document events — they{" "}
                <span className="text-[#333] italic">capture the invisible</span>:
                the nervous exhale before the vows, the quiet pride in a new parent's eyes, the child's
                uninhibited laughter at a birthday party.
              </p>
              <p>
                Based in Munich and Regensburg, Germany, he serves families, couples, and individuals
                across the region — bringing the same level of dedication to a newborn session as to a
                full wedding day.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <blockquote className="border-l-2 border-gold-500 pl-8 py-4">
              <p className="font-serif text-2xl text-[#1a1a1a] italic leading-relaxed">
                "I photograph the way I once engineered — with obsessive attention to detail
                and a deep respect for what I'm building."
              </p>
              <cite className="text-gold-500 text-xs tracking-widest uppercase mt-4 block">
                — Kishore Gunda
              </cite>
            </blockquote>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Professional Training", desc: "Trained under expert photographers in portraiture & events" },
                { icon: Aperture, title: "Technical Mastery", desc: "Engineering precision applied to every composition" },
                { icon: Heart, title: "Emotional Depth", desc: "Authentic storytelling that resonates long after" },
                { icon: Camera, title: "Growing Portfolio", desc: "A cherished collection of captured memories" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass border border-gold-500/10 p-5">
                  <Icon size={20} className="text-gold-500 mb-3" />
                  <h4 className="text-[#333] text-sm font-medium mb-1">{title}</h4>
                  <p className="text-[#666] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="border-t border-gold-500/10 pt-20 text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl text-[#1a1a1a] mb-6 font-light">
            The <span className="gold-shimmer font-semibold">Philosophy</span>
          </h2>
          <p className="text-[#5C5550] text-lg leading-relaxed mb-4">
            Photography is not about the camera — it's about the photographer's understanding of light,
            space, emotion, and timing. For Kishore, every session is a collaboration, a trust exchange
            between artist and subject.
          </p>
          <p className="text-[#7A6F68] leading-relaxed">
            He believes that the best photograph is the one where the subject forgets the camera exists.
            That's when truth emerges — raw, unposed, timeless.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4 font-light">
            Let's Create Something{" "}
            <span className="text-gold-500">Together</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <div className="flex items-center gap-2 text-[#666] text-sm">
              <MapPin size={14} className="text-gold-500" />
              Munich | Regensburg, Germany
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
