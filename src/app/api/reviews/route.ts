import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const reviewSchema = z.object({
  photoId: z.string().optional(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(5).max(1000),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(parseInt(searchParams.get("limit") || "20"), 50);
  const photoId = searchParams.get("photoId");

  const reviews = await prisma.review.findMany({
    where: {
      approved: true,
      ...(photoId ? { photoId } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      userName: true,
      rating: true,
      comment: true,
      createdAt: true,
      photoId: true,
    },
  });

  return NextResponse.json({ reviews });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const data = reviewSchema.parse(body);

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const review = await prisma.review.create({
      data: {
        userId: user.id,
        photoId: data.photoId || null,
        userName: session.user.name || "Anonymous",
        email: session.user.email,
        googleId: (session.user as any).id || null,
        rating: data.rating,
        comment: data.comment,
      },
    });

    return NextResponse.json({ success: true, id: review.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Review error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
