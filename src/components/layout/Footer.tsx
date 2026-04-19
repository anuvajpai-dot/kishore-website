import Link from "next/link";
import { Phone, MapPin, MessageCircle, Camera } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/4915163034064?text=Hi%20Kishore%2C%20I%27m%20interested%20in%20a%20photography%20session.";

export default function Footer() {
  return (
    <footer className="bg-[#F7F2EC] border-t border-[#EAE4DC] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/60 rounded-full">
                <Camera size={18} className="text-gold-500" />
              </div>
              <div>
                <p className="text-[#1C1918] font-serif text-base font-semibold leading-none">
                  The Ordinary Photographer
                </p>
              </div>
            </div>
            <p className="text-[#6B5F5A] text-sm leading-relaxed mt-4 font-light italic">
              Capturing life's most precious moments.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors duration-300"
            >
              <MessageCircle size={14} />
              Contact on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#333] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Portfolio", "/portfolio"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#6B5F5A] text-sm hover:text-gold-500 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-[#333] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Specialties
            </h4>
            <ul className="space-y-3">
              {[
                "Birthday Photography",
                "Wedding Photography",
                "Pregnancy Shoot",
                "Newborn Photography",
                "Family Events",
                "Portrait Sessions",
              ].map((s) => (
                <li key={s}>
                  <span className="text-[#777] text-sm tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1C1918] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-[#6B5F5A] text-sm leading-relaxed">
                  Munich | Regensburg<br />
                  Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+4915163034064"
                  className="text-[#6B5F5A] text-sm hover:text-gold-500 transition-colors"
                >
                  +49 151 63034064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={14} className="text-gold-500 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/kishoregunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B5F5A] text-sm hover:text-gold-500 transition-colors"
                >
                  @kishoregunda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#EAE4DC] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9C8A82] text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} The Ordinary Photographer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/kishoregunda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9C8A82] hover:text-gold-500 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
