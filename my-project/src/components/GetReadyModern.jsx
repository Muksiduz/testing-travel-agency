import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { footerData } from "../data/footerData";

const GetReadyModern = () => {
  const { socials } = footerData;
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      },
    );
  }, []);

  const navigate = useNavigate();

  const whatsappNumber = socials.whatsapp; // replace with your number

  return (
    <section
      ref={sectionRef}
      className="relative py-40 overflow-hidden bg-transparent">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/70 via-black/60 to-[#0B0F11]" />

      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#28E9E9]/10 blur-[200px] rounded-full" />

      <div className="absolute top-0 w-full h-40 bg-gradient-to-t from-transparent to-[#0B0F11]" />
      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <p className="text-[#28E9E9] tracking-widest mb-4">
          START YOUR JOURNEY
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready To Explore The Northeast?
        </h2>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Book your dream tour today or speak directly with our team to plan a
          personalized experience crafted just for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Book Now → Contact page */}
          <button
            onClick={() => navigate("/contact")}
            className="
      group px-8 py-4 rounded-full
      bg-[#28E9E9] text-black font-semibold
      transition-all duration-500
      hover:scale-105 hover:shadow-[0_0_30px_rgba(40,233,233,0.4)]
    ">
            Book Now
          </button>

          {/* WhatsApp */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=Hello, I want to book a travel package.`,
                "_blank",
              )
            }
            className="
      group px-8 py-4 rounded-full
      bg-white/10 backdrop-blur-md
      border border-white/20
      hover:border-[#28E9E9]/50
      transition-all duration-500
      hover:scale-105
    ">
            WhatsApp Us
          </button>
        </div>
      </div>

      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B0F11]" />
    </section>
  );
};

export default GetReadyModern;
