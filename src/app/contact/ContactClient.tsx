"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, CheckCircle, Send } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/4915163034064?text=Hi%20Kishore%2C%20I%27m%20interested%20in%20a%20photography%20session.";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Kishore, I'm ${name}. ${message} — You can reach me at ${phone}`
    );
    window.open(`https://wa.me/4915163034064?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFA] pt-24">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold-500" />
          Get in Touch
          <span className="w-8 h-px bg-gold-500" />
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] font-light mb-6">
          Contact{" "}
          <span className="gold-shimmer font-semibold">Us</span>
        </h1>
        <div className="w-16 h-px bg-gold-500 mx-auto mb-4" />
          <p className="text-[#6B5F5A] text-lg max-w-xl mx-auto">
          Reach out via WhatsApp for the fastest response, or drop us a quick message below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info + WhatsApp primary CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* WhatsApp primary button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base px-8 py-4 w-full transition-colors duration-300 tracking-wide"
            >
              <MessageCircle size={22} />
              Contact Us on WhatsApp
            </a>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <MapPin size={16} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[#888] text-xs tracking-widest uppercase mb-1">Locations</p>
                  <p className="text-[#1a1a1a] text-sm font-medium">Munich | Regensburg</p>
                  <p className="text-[#666] text-sm">Germany</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <Phone size={16} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[#888] text-xs tracking-widest uppercase mb-1">Phone / WhatsApp</p>
                  <a href="tel:+4915163034064" className="text-[#1a1a1a] text-sm font-medium hover:text-gold-500 transition-colors">
                    +49 151 63034064
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gold-500/40 rounded-full flex-shrink-0">
                  <Instagram size={16} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[#888] text-xs tracking-widest uppercase mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/kishoregunda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] text-sm font-medium hover:text-gold-500 transition-colors"
                  >
                    @kishoregunda
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-gold-500/20 p-6 bg-white">
              <p className="text-gold-500 text-xs tracking-widest uppercase mb-2">Response Time</p>
              <p className="text-[#1a1a1a] font-serif text-lg">Within 24 hours</p>
              <p className="text-[#666] text-sm mt-2">
                We take every inquiry seriously and will get back to you promptly.
              </p>
            </div>
          </motion.div>

          {/* Right — simple inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-80 border border-gold-500/20 p-12">
                <CheckCircle size={48} className="text-[#25D366] mb-6" />
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">WhatsApp Opened!</h3>
                <p className="text-[#666] max-w-xs">
                  Your message was pre-filled in WhatsApp. Kishore will get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="border border-gray-200 p-8 space-y-5">
                <h2 className="font-serif text-2xl text-[#1a1a1a] font-light mb-6">
                  Send a <span className="text-gold-500">Message</span>
                </h2>

                <div>
                  <label className="text-[#888] text-xs tracking-widest uppercase block mb-2">Your Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-white border border-gray-200 focus:border-gold-500/60 text-[#1a1a1a] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                <div>
                  <label className="text-[#888] text-xs tracking-widest uppercase block mb-2">Phone / WhatsApp</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="+49 ..."
                    className="w-full bg-white border border-gray-200 focus:border-gold-500/60 text-[#1a1a1a] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#bbb]"
                  />
                </div>

                <div>
                  <label className="text-[#888] text-xs tracking-widest uppercase block mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us about the occasion, date, or any questions..."
                    className="w-full bg-white border border-gray-200 focus:border-gold-500/60 text-[#1a1a1a] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#bbb] resize-none"
                  />
                </div>

                <button
                  onClick={handleWhatsApp}
                  disabled={!name || !phone || !message}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold tracking-widest uppercase text-sm px-8 py-3 transition-colors duration-300"
                >
                  <Send size={14} />
                  Send via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}


