import type { Metadata } from "next";
import { Award, Aperture, Heart, Camera, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Kishore – from engineer to professional photographer. Where precision meets emotion.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            About Kishore
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#f5f0eb] font-light mb-6">
            The Story Behind
            <br />
            <span className="gold-shimmer font-semibold">Every Frame</span>
          </h1>
          <div className="w-16 h-px bg-gold-500 mx-auto" />
        </div>
      </div>

      {/* Main story */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <h2 className="font-serif text-3xl text-[#f5f0eb] mb-8 font-light">
              From Engineering Precision to{" "}
              <span className="text-gold-500">Artistic Vision</span>
            </h2>
            <div className="space-y-6 text-[#808080] leading-relaxed">
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
                Over years of professional training and hundreds of sessions, Kishore has developed a
                signature style that feels simultaneously structured and spontaneous. His images don't just
                document events — they <span className="text-[#c0c0c0] italic">capture the invisible</span>:
                the nervous exhale before the vows, the quiet pride in a new parent's eyes, the child's
                uninhibited laughter at a birthday party.
              </p>
              <p>
                Based in Regensburg, Germany, he now serves families, couples, and individuals across the
                region — bringing the same level of dedication to a newborn session as to a full wedding day.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <blockquote className="border-l-2 border-gold-500 pl-8 py-4">
              <p className="font-serif text-2xl text-[#f5f0eb] italic leading-relaxed">
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
                { icon: Camera, title: "500+ Sessions", desc: "A growing portfolio of cherished memories" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass border border-gold-500/10 p-5">
                  <Icon size={20} className="text-gold-500 mb-3" />
                  <h4 className="text-[#c0c0c0] text-sm font-medium mb-1">{title}</h4>
                  <p className="text-[#606060] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="border-t border-gold-500/10 pt-20 text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl text-[#f5f0eb] mb-6 font-light">
            The <span className="gold-shimmer font-semibold">Philosophy</span>
          </h2>
          <p className="text-[#707070] text-lg leading-relaxed mb-4">
            Photography is not about the camera — it's about the photographer's understanding of light,
            space, emotion, and timing. For Kishore, every session is a collaboration, a trust exchange
            between artist and subject.
          </p>
          <p className="text-[#606060] leading-relaxed">
            He believes that the best photograph is the one where the subject forgets the camera exists.
            That's when truth emerges — raw, unposed, timeless.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="font-serif text-3xl text-[#f5f0eb] mb-4 font-light">
            Let's Create Something{" "}
            <span className="text-gold-500">Together</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/contact" className="btn-gold">
              Book a Session
            </Link>
            <div className="flex items-center gap-2 text-[#707070] text-sm">
              <MapPin size={14} className="text-gold-500" />
              Salzgasse 7, Regensburg, Germany
            </div>
            <div className="flex items-center gap-2 text-[#707070] text-sm">
              <Mail size={14} className="text-gold-500" />
              kishore.gunda01@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
