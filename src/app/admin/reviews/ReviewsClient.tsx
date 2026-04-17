"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Trash2, CheckCircle, XCircle } from "lucide-react";

interface Review {
  id: string;
  userId: string;
  photoId: string | null;
  userName: string;
  email: string;
  googleId: string | null;
  rating: number;
  comment: string;
  approved: boolean;
  createdAt: Date;
}

export default function ReviewsClient({ reviews: initial }: { reviews: Review[] }) {
  const [reviews, setReviews] = useState(initial);

  const deleteReview = async (id: string) => {
    if (!confirm("Delete this review?")) return;
    const res = await fetch(`/api/reviews/${id}`, { method: "DELETE" });
    if (res.ok) setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleApproval = async (id: string, approved: boolean) => {
    const res = await fetch(`/api/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved }),
    });
    if (res.ok) setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved } : r)));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/dashboard" className="text-[#606060] hover:text-gold-500 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-serif text-3xl text-[#f5f0eb]">Review Moderation</h1>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`glass border p-5 transition-colors ${
                review.approved ? "border-gold-500/10" : "border-red-400/20 opacity-70"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          className={s <= review.rating ? "text-gold-500 fill-gold-500" : "text-[#404040]"}
                        />
                      ))}
                    </div>
                    <span className="text-[#909090] text-sm font-medium">{review.userName}</span>
                    <span className="text-[#505050] text-xs">
                      {new Date(review.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    {!review.approved && (
                      <span className="text-[10px] tracking-widest bg-red-400/10 text-red-400 px-2 py-0.5 uppercase">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-[#707070] text-sm leading-relaxed">"{review.comment}"</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleApproval(review.id, !review.approved)}
                    className={`p-2 border transition-colors ${
                      review.approved
                        ? "border-[#303030] text-[#505050] hover:border-amber-400/40 hover:text-amber-400"
                        : "border-green-400/30 text-green-400 hover:bg-green-400/10"
                    }`}
                    title={review.approved ? "Hide review" : "Approve review"}
                  >
                    {review.approved ? <XCircle size={16} /> : <CheckCircle size={16} />}
                  </button>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="p-2 border border-[#303030] text-[#505050] hover:border-red-400/40 hover:text-red-400 transition-colors"
                    title="Delete review"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="text-center py-16 text-[#505050]">No reviews yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
