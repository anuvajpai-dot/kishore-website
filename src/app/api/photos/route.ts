import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { prisma } from "@/lib/prisma";

const photoSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  url: z.string().url(),
  category: z.enum(["BIRTHDAY", "MARRIAGE", "PREGNANCY", "NEWBORN", "FAMILY", "PORTRAIT"]),
  featured: z.boolean().optional().default(false),
  sortOrder: z.number().int().optional().default(0),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  const photos = await prisma.photo.findMany({
    where: {
      ...(category && category !== "ALL" ? { category: category as any } : {}),
      ...(featured === "true" ? { featured: true } : {}),
    },
    orderBy: [{ featured: "desc" }, { sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return NextResponse.json({ photos });
}

export async function POST(req: NextRequest) {
  const { authorized } = await requireAdmin();
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const data = photoSchema.parse(body);

    const photo = await prisma.photo.create({ data });
    return NextResponse.json({ success: true, photo }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { authorized } = await requireAdmin();
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { id } = await req.json();
  await prisma.photo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
