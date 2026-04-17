"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "text-gold-500 fill-gold-500" : "text-[#404040]"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Fetch real reviews from API
    fetch("/api/reviews?limit=6")
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews || []))
      .catch(() => {});
  }, []);

  // Placeholder reviews if no data yet
  const displayReviews: Review[] = reviews.length > 0 ? reviews : [
    { id: "1", userName: "Priya Sharma", rating: 5, comment: "Kishore captured our wedding beautifully. Every photo tells a story. Highly recommended!", createdAt: "2024-03-01" },
    { id: "2", userName: "Rahul & Meena", rating: 5, comment: "The newborn session was beyond magical. So gentle, so professional, and the results were breathtaking.", createdAt: "2024-02-15" },
    { id: "3", userName: "Anita Reddy", rating: 5, comment: "My maternity shoot was a dream. Kishore made me feel so comfortable and the photos are gorgeous.", createdAt: "2024-01-20" },
    { id: "4", userName: "Vijay Kumar", rating: 5, comment: "Family portraits done right! He captured the most natural, joyful moments of our family.", createdAt: "2024-01-05" },
    { id: "5", userName: "Sunita & Ravi", rating: 5, comment: "Best birthday photographer! Our daughter's party memories are preserved beautifully.", createdAt: "2023-12-10" },
    { id: "6", userName: "Deepak S.", rating: 5, comment: "Professional headshots that actually look like me at my best. Great experience all around.", createdAt: "2023-11-28" },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-medium inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            Reviews
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#f5f0eb] font-light">
            What Clients{" "}
            <span className="gold-shimmer font-semibold">Say</span>
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-7 border border-gold-500/10 hover:border-gold-500/25 transition-colors duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="text-[#909090] text-sm leading-relaxed my-5 font-light italic">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold-500/10">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center border border-gold-500/30">
                  <span className="text-gold-500 text-xs font-semibold">
                    {review.userName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#c0c0c0] text-sm font-medium">{review.userName}</p>
                  <p className="text-[#505050] text-xs">
                    {new Date(review.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
