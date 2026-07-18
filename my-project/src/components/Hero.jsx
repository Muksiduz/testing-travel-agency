import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroData } from "../data/heroData";

const Hero = () => {
  const bgRef = useRef(null);
  const neWayRef = useRef(null);
  const mobileDescRef = useRef(null);
  const mobileBtnRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    gsap.fromTo(
      bgRef.current,
      { scale: 1.15 },
      {
        scale: 1,
        duration: 8,
        ease: "power2.out",
      },
    );

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      neWayRef.current,
      {
        y: isMobile ? 120 : 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
      },
    );

    if (isMobile) {
      tl.fromTo(
        mobileDescRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=2",
      ).fromTo(
        mobileBtnRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
        },
        "-=1.2",
      );
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center z-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Title */}
      <div
        className="
        absolute inset-0 z-20 px-4
        flex flex-col items-center text-center
        justify-start pt-80
        sm:pt-36
        md:pt-60
      ">
        <h1
          ref={neWayRef}
          className="
          text-white font-bold
          text-4xl
          sm:text-6xl
          md:text-8xl
          lg:text-[120px]
          xl:text-[150px]
        ">
          {heroData.title}
        </h1>

        {/* Mobile Description */}
        <p
          ref={mobileDescRef}
          className="mt-4 max-w-xs text-gray-300 text-sm md:hidden">
          {heroData.description}
        </p>

        {/* Mobile Button */}
        <button
          ref={mobileBtnRef}
          onClick={() =>
            window.open(
              "https://wa.me/917099767458?text=" +
                encodeURIComponent(
                  "Hello NE Way Travels! 👋\n\nI am interested in planning a trip and would like to know more about your travel packages, pricing, and availability. Please share the details.\n\nThank you!",
                ),
              "_blank",
            )
          }
          className="
    mt-5
    px-6 py-3
    rounded-full
    bg-[#28E9E9]
    text-black
    font-semibold
    text-sm
    md:hidden
    hover:scale-105
    transition
  ">
          Enquire Now
        </button>
      </div>

      {/* Mountain foreground */}
      <img
        src={heroData.foregroundImage}
        alt="mountain foreground"
        className="
        absolute left-1/2 -translate-x-1/2 z-30
        pointer-events-none select-none
        bottom-[6%]
        sm:bottom-[-6%]
        md:bottom-[-10%]
        lg:bottom-[-15%]
        w-[100%]
        sm:w-[140%]
        md:w-[120%]
        lg:w-full
        scale-[2]
        sm:scale-[1.2]
        md:scale-[1.15]
        lg:scale-[1.1]
        max-w-none
      "
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0B0F11] z-40" />
    </section>
  );
};

export default Hero;
