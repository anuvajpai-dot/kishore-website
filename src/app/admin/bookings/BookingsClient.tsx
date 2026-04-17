"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BookingStatus = string;

interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: Date | null;
  message: string;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  CONFIRMED: "bg-green-400/10 text-green-400 border-green-400/20",
  CANCELLED: "bg-red-400/10 text-red-400 border-red-400/20",
  COMPLETED: "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

export default function BookingsClient({ bookings: initial }: { bookings: Booking[] }) {
  const [bookings, setBookings] = useState(initial);
  const [filter, setFilter] = useState("ALL");

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status: status as any } : b)));
    }
  };

  const filtered = filter === "ALL" ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/dashboard" className="text-[#606060] hover:text-gold-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-serif text-3xl text-[#f5f0eb]">Booking Requests</h1>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8">
          {["ALL", "PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                filter === s
                  ? "border-gold-500 text-gold-500"
                  : "border-[#2a2a2a] text-[#606060] hover:border-gold-500/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((booking) => (
            <div key={booking.id} className="glass border border-gold-500/10 p-6 hover:border-gold-500/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[#f5f0eb] font-medium">{booking.fullName}</h3>
                    <span className={`text-[10px] tracking-widest uppercase px-2 py-0.5 border ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 text-sm">
                    <div>
                      <p className="text-[#505050] text-[10px] uppercase tracking-widest">Email</p>
                      <p className="text-[#909090]">{booking.email}</p>
                    </div>
                    <div>
                      <p className="text-[#505050] text-[10px] uppercase tracking-widest">Phone</p>
                      <p className="text-[#909090]">{booking.phone}</p>
                    </div>
                    <div>
                      <p className="text-[#505050] text-[10px] uppercase tracking-widest">Event</p>
                      <p className="text-[#909090]">{booking.eventType}</p>
                    </div>
                    <div>
                      <p className="text-[#505050] text-[10px] uppercase tracking-widest">Received</p>
                      <p className="text-[#909090]">
                        {new Date(booking.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                  {booking.message && (
                    <div className="mt-3">
                      <p className="text-[#505050] text-[10px] uppercase tracking-widest mb-1">Message</p>
                      <p className="text-[#707070] text-sm">{booking.message}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {["CONFIRMED", "CANCELLED", "COMPLETED"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(booking.id, s)}
                      disabled={booking.status === s}
                      className={`text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                        s === "CONFIRMED" ? "border-green-400/30 text-green-400 hover:bg-green-400/10" :
                        s === "CANCELLED" ? "border-red-400/30 text-red-400 hover:bg-red-400/10" :
                        "border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#505050]">No bookings found</div>
          )}
        </div>
      </div>
    </div>
  );
}
