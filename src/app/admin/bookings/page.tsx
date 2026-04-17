import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import BookingsClient from "./BookingsClient";

export const metadata: Metadata = { title: "Admin – Bookings" };

export default async function AdminBookingsPage() {
  const session = await getServerSession(authOptions);
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim());
  if (!session || !adminEmails.includes(session.user?.email ?? "")) redirect("/");

  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: "desc" } });

  return <BookingsClient bookings={bookings} />;
}
