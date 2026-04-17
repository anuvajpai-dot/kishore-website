import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(30),
  eventType: z.string().min(1).max(100),
  eventDate: z.string().optional(),
  message: z.string().min(10).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    const booking = await prisma.booking.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        eventType: data.eventType,
        eventDate: data.eventDate ? new Date(data.eventDate) : null,
        message: data.message,
      },
    });

    return NextResponse.json({ success: true, id: booking.id }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
