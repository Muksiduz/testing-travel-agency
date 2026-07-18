import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import usePackageStore from "../data/packages/packageStore";

const ToursSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { packages, loading, getPackages } = usePackageStore();

  const tours = packages.slice(0, 4);

  useEffect(() => {
    getPackages();
  }, []);

  useEffect(() => {
    if (!tours.length) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".tour-card"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  if (loading) {
    return (
      <section className="py-32 bg-[#0B0F11]">
        <div className="max-w-7xl mx-auto px-6 text-white">
          Loading tours...
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0B0F11] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#28E9E9]/10 blur-[200px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#28E9E9] tracking-widest mb-3">POPULAR TOURS</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Our Best Tours
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Carefully crafted experiences across Northeast India designed for
            unforgettable memories.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour._id}
              className="
                tour-card
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-[#28E9E9]/40
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              ">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/packages/${tour._id}`);
                  }}
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">{tour.title}</h3>

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-gray-400">{tour.duration}</span>

                  <span className="text-[#28E9E9] font-semibold">
                    ₹{tour.price.toLocaleString()}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/contact");
                  }}
                  className="
                    w-full py-2 rounded-lg
                    bg-[#28E9E9] text-black font-medium
                    hover:bg-[#1fcfcf]
                    transition duration-300 cursor-pointer
                  ">
                  Book Now
                </button>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
