"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const eventTypes = [
  "Birthday Photography",
  "Wedding / Marriage Photography",
  "Pregnancy Shoot",
  "Newborn Photography",
  "Family Event",
  "Portrait Session",
  "Other",
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-gold-500" />
          Get in Touch
          <span className="w-8 h-px bg-gold-500" />
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f0eb] font-light mb-6">
          Book Your{" "}
          <span className="gold-shimmer font-semibold">Session</span>
        </h1>
        <div className="w-16 h-px bg-gold-500 mx-auto mb-4" />
        <p className="text-[#707070] text-lg max-w-xl mx-auto">
          Tell us about your occasion and we'll create something beautiful together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-[#f5f0eb] mb-6 font-light">
                Contact <span className="text-gold-500">Details</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "Salzgasse 7\n93059 Regensburg\nGermany", href: null },
                  { icon: Phone, label: "Phone", value: "+49 151 63034064", href: "tel:+4915163034064" },
                  { icon: Mail, label: "Email", value: "kishore.gunda01@gmail.com", href: "mailto:kishore.gunda01@gmail.com" },
                  { icon: Instagram, label: "Instagram", value: "@kishoregunda", href: "https://www.instagram.com/kishoregunda" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold-500/30 rounded-full flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-[#606060] text-xs tracking-widest uppercase mb-1">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#c0c0c0] text-sm hover:text-gold-400 transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#c0c0c0] text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border border-gold-500/10 p-6">
              <p className="text-gold-500 text-xs tracking-widest uppercase mb-2">Response Time</p>
              <p className="text-[#c0c0c0] font-serif text-lg">Within 24 hours</p>
              <p className="text-[#606060] text-sm mt-2">
                We take every inquiry seriously and will get back to you promptly with availability and session details.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass border border-gold-500/20 p-12 text-center h-full flex flex-col items-center justify-center min-h-96"
              >
                <CheckCircle size={48} className="text-gold-500 mb-6" />
                <h3 className="font-serif text-3xl text-[#f5f0eb] mb-4">Request Received!</h3>
                <p className="text-[#808080] max-w-sm text-center">
                  Thank you for reaching out. Kishore will review your request and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      placeholder="Your full name"
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#404040]"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#404040]"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+49 ..."
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#404040]"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                      Preferred Date
                    </label>
                    <input
                      {...register("eventDate")}
                      type="date"
                      className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                    Event Type *
                  </label>
                  <select
                    {...register("eventType")}
                    className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="" className="bg-[#111]">Select event type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#111]">{t}</option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="text-red-400 text-xs mt-1">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-[#606060] text-xs tracking-widest uppercase block mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your event, vision, and any special requirements..."
                    className="w-full bg-[#111] border border-[#2a2a2a] focus:border-gold-500/60 text-[#f5f0eb] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#404040] resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <p className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
