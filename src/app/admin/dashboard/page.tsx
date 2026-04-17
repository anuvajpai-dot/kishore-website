import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Dashboard" };

async function getStats() {
  const [totalBookings, pendingBookings, totalPhotos, totalReviews] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "PENDING" } }),
    prisma.photo.count(),
    prisma.review.count(),
  ]);
  const recentBookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return { totalBookings, pendingBookings, totalPhotos, totalReviews, recentBookings };
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim());

  if (!session || !adminEmails.includes(session.user?.email ?? "")) {
    redirect("/");
  }

  const { totalBookings, pendingBookings, totalPhotos, totalReviews, recentBookings } = await getStats();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl text-[#f5f0eb] mb-2">Admin Dashboard</h1>
          <p className="text-[#606060] text-sm">Welcome back, {session.user?.name}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Bookings", value: totalBookings, color: "text-blue-400" },
            { label: "Pending Requests", value: pendingBookings, color: "text-amber-400" },
            { label: "Photos Uploaded", value: totalPhotos, color: "text-green-400" },
            { label: "Reviews", value: totalReviews, color: "text-gold-500" },
          ].map(({ label, value, color }) => (
            <div key={label} className="glass border border-gold-500/10 p-6">
              <p className={`font-serif text-4xl font-semibold ${color}`}>{value}</p>
              <p className="text-[#606060] text-xs tracking-widest uppercase mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { href: "/admin/bookings", label: "Booking Requests", desc: "View & manage inquiries" },
            { href: "/admin/portfolio", label: "Portfolio Upload", desc: "Add & manage photos" },
            { href: "/admin/reviews", label: "Review Moderation", desc: "Approve or remove reviews" },
            { href: "/", label: "View Website", desc: "See live site" },
          ].map(({ href, label, desc }) => (
            <a
              key={href}
              href={href}
              className="glass border border-gold-500/10 p-6 hover:border-gold-500/30 transition-colors group"
            >
              <h3 className="text-[#c0c0c0] font-medium mb-1 group-hover:text-gold-400 transition-colors">{label}</h3>
              <p className="text-[#505050] text-xs">{desc}</p>
            </a>
          ))}
        </div>

        {/* Recent bookings */}
        <div>
          <h2 className="font-serif text-2xl text-[#f5f0eb] mb-6">Recent Inquiries</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold-500/10 text-[#606060] text-xs tracking-widest uppercase">
                  <th className="text-left py-3 pr-4">Name</th>
                  <th className="text-left py-3 pr-4">Event</th>
                  <th className="text-left py-3 pr-4">Date</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b: { id: string; fullName: string; eventType: string; createdAt: Date; status: string }) => (
                  <tr key={b.id} className="border-b border-[#1a1a1a] hover:bg-[#111] transition-colors">
                    <td className="py-4 pr-4 text-[#c0c0c0]">{b.fullName}</td>
                    <td className="py-4 pr-4 text-[#808080]">{b.eventType}</td>
                    <td className="py-4 pr-4 text-[#606060]">
                      {new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="py-4">
                      <span className={`text-xs tracking-widest uppercase px-2 py-1 ${
                        b.status === "PENDING" ? "bg-amber-400/10 text-amber-400" :
                        b.status === "CONFIRMED" ? "bg-green-400/10 text-green-400" :
                        b.status === "CANCELLED" ? "bg-red-400/10 text-red-400" :
                        "bg-blue-400/10 text-blue-400"
                      }`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {recentBookings.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-[#505050] text-sm">
                      No bookings yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
