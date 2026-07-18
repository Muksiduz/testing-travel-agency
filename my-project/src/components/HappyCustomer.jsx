import { useEffect, useRef } from "react";
import gsap from "gsap";
import useReviewStore from "../data/review/reviewStore";

const HappyCustomers = () => {
  const sectionRef = useRef(null);
  const { reviews, getReviews, loading } = useReviewStore();

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (!reviews.length) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".review-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  if (loading) {
    return (
      <section className="py-32 bg-[#0B0F11] text-white text-center">
        Loading Reviews...
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0B0F11] text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#28E9E9]/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#28E9E9] tracking-widest mb-3">TESTIMONIALS</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Happy Customers
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Hear from travelers who experienced unforgettable journeys with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="review-card relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#28E9E9]/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#28E9E9]">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image || "https://placehold.co/100x100"}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
