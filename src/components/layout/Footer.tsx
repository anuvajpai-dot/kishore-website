import Link from "next/link";
import { Mail, Phone, MapPin, Camera } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gold-500/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/60 rounded-full">
                <Camera size={18} className="text-gold-500" />
              </div>
              <div>
                <p className="text-gold-500 font-serif text-lg font-semibold leading-none">KG</p>
                <p className="text-[#707070] text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
                  Engineered Moments
                </p>
              </div>
            </div>
            <p className="text-[#707070] text-sm leading-relaxed mt-4 font-light italic">
              Where precision meets emotion.
            </p>
            <p className="text-[#505050] text-xs leading-relaxed mt-3">
              From engineering precision to artistic storytelling — preserving memories that last forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c0c0c0] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["Portfolio", "/portfolio"],
                ["Services", "/services"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#707070] text-sm hover:text-gold-400 transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c0c0c0] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Services
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
                  <Link
                    href="/services"
                    className="text-[#707070] text-sm hover:text-gold-400 transition-colors tracking-wide"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c0c0c0] text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-[#707070] text-sm leading-relaxed">
                  Salzgasse 7<br />
                  93059 Regensburg<br />
                  Germany
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+4915163034064"
                  className="text-[#707070] text-sm hover:text-gold-400 transition-colors"
                >
                  +49 151 63034064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:kishore.gunda01@gmail.com"
                  className="text-[#707070] text-sm hover:text-gold-400 transition-colors"
                >
                  kishore.gunda01@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={14} className="text-gold-500 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/kishoregunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#707070] text-sm hover:text-gold-400 transition-colors"
                >
                  @kishoregunda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-500/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#404040] text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Engineered Moments by Kishore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/kishoregunda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#505050] hover:text-gold-500 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
