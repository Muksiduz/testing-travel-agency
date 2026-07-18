import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usePackageStore from "../data/packages/packageStore";

const Packages = () => {
  const navigate = useNavigate();
  //data from zustand
  const { packages, loading, getPackages } = usePackageStore();

  useEffect(() => {
    getPackages();
  }, []);

  if (loading) {
    return (
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-3xl">Loading packages...</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-16 text-white">
          All Travel Packages
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="
                group relative rounded-2xl overflow-hidden
                bg-white/5 border border-white/10
                hover:border-[#28E9E9]/40
                transition duration-500
                hover:-translate-y-2
              ">
              {/* Image */}
              <div
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  console.log(pkg._id);
                  navigate(`/packages/${pkg._id}`);
                }}
                className="h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Duration */}
                <p className="text-[#28E9E9] text-sm mb-2">{pkg.duration}</p>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {pkg.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    ₹{pkg.price.toLocaleString()}
                  </span>

                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/contact");
                    }}
                    className="
                      bg-[#28E9E9] text-black px-4 py-2 rounded-full
                      text-sm font-medium
                      cursor-pointer
                      hover:scale-105
                      transition
                    ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
