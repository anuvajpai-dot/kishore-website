import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import PortfolioAdmin from "./PortfolioAdmin";

export const metadata: Metadata = { title: "Admin – Portfolio" };

export default async function AdminPortfolioPage() {
  const session = await getServerSession(authOptions);
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim());
  if (!session || !adminEmails.includes(session.user?.email ?? "")) redirect("/");

  const photos = await prisma.photo.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });
  return <PortfolioAdmin photos={photos} />;
}
