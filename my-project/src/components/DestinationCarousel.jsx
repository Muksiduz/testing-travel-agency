import { useState, useRef, useEffect } from "react";
import usePackageStore from "../data/packages/packageStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useNavigate } from "react-router-dom";

const DestinationCarousel = () => {
  const { packages, loading, getPackages } = usePackageStore();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bgImage, setBgImage] = useState("");

  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    getPackages();
  }, []);

  useEffect(() => {
    if (packages.length > 0 && !selectedPackage) {
      setSelectedPackage(packages[0]);
      setBgImage(packages[0].image);
    }
  }, [packages]);

  // Background + content animation
  useEffect(() => {
    if (!selectedPackage) return;

    if (!bgTopRef.current || !bgBottomRef.current) return;

    bgBottomRef.current.style.backgroundImage = `url(${selectedPackage.image})`;

    const tl = gsap.timeline();

    tl.to(bgTopRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    }).add(() => {
      setBgImage(selectedPackage.image);
      gsap.set(bgTopRef.current, { opacity: 1 });
    });

    tl.fromTo(
      [titleRef.current, descRef.current, priceRef.current, buttonRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      },
    );
  }, [selectedPackage]);

  if (loading || !selectedPackage) {
    return (
      <section className="py-32 bg-[#0B0F11] text-white text-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden bg-[#0B0F11]">
      {/* Background Layers */}
      <div ref={bgBottomRef} className="absolute inset-0 bg-cover bg-center" />
      <div
        ref={bgTopRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stack on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-400 mb-3 text-sm">
              {selectedPackage.duration}
            </p>

            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {selectedPackage.title}
            </h1>

            <p
              ref={descRef}
              className="text-gray-300 max-w-md mx-auto lg:mx-0 mb-6">
              {selectedPackage.description}
            </p>

            <p
              ref={priceRef}
              className="text-xl sm:text-2xl font-semibold mb-8">
              ₹{selectedPackage.price}
            </p>

            <button
              ref={buttonRef}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/contact");
              }}
              className="bg-[#28E9E9] text-black px-6 py-3 cursor-pointer rounded-lg font-semibold hover:scale-105 transition">
              Book Now
            </button>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[EffectCoverflow, Navigation]}
              effect="coverflow"
              centeredSlides
              grabCursor
              speed={1200}
              navigation
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={(swiper) => {
                if (packages[swiper.activeIndex]) {
                  setSelectedPackage(packages[swiper.activeIndex]);
                }
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 2,
                slideShadows: false,
              }}>
              {packages.map((pkg) => (
                <SwiperSlide key={pkg._id}>
                  <div
                    onClick={() => setSelectedPackage(pkg)}
                    className={`
                      relative h-56 sm:h-60 rounded-xl overflow-hidden cursor-pointer
                      transition-all duration-500
                      ${
                        selectedPackage._id === pkg._id
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-50"
                      }
                    `}>
                    <img
                      src={pkg.image}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-4 left-4 pr-4">
                      <p className="text-xs text-gray-300">{pkg.duration}</p>
                      <h3 className="text-sm font-semibold">{pkg.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0B0F11]" />
    </section>
  );
};

export default DestinationCarousel;
