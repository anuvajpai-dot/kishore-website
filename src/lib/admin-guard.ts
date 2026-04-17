import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((e) => e.trim());

  if (!session || !session.user?.email || !adminEmails.includes(session.user.email)) {
    return { authorized: false, session: null };
  }
  return { authorized: true, session };
}
