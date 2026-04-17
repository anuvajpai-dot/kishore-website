import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = { title: "Admin – Reviews" };

export default async function AdminReviewsPage() {
  const session = await getServerSession(authOptions);
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim());
  if (!session || !adminEmails.includes(session.user?.email ?? "")) redirect("/");

  const reviews = await prisma.review.findMany({ orderBy: { createdAt: "desc" } });
  return <ReviewsClient reviews={reviews} />;
}
