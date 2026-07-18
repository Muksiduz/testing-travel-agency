import { useState, useRef, useEffect } from "react";
import { discoverData } from "../data/discoverData";
import gsap from "gsap";

/* Extract YouTube ID from URL */
// const getYoutubeId = (url) => {
//   const regExp = /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^#\&\?]*)/;
//   const match = url.match(regExp);
//   return match && match[1] ? match[1] : null;
// };

const DiscoverSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  /* ESC key close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* Animate modal open */
  useEffect(() => {
    if (activeVideo) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
      );

      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }
  }, [activeVideo]);

  /* Close modal with animation */
  const closeModal = () => {
    gsap.to(modalContentRef.current, {
      scale: 0.85,
      opacity: 0,
      y: 40,
      duration: 0.4,
      ease: "power3.in",
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => setActiveVideo(null),
    });
  };

  /* Triangular positions */
  const positions = [
    "top-0 left-12 w-40 h-28",
    "top-16 left-52 w-52 h-36",
    "top-44 left-0 w-48 h-32",
    "top-52 left-56 w-44 h-28",
    "top-28 left-96 w-40 h-28",
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${discoverData.mainImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/70 via-black/60 to-[#0B0F11]" />

      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#28E9E9]/10 blur-[180px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div className="text-white space-y-8">
          <div>
            <p className="text-[#28E9E9] tracking-widest text-sm mb-4">
              EXPLORE MORE
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              {discoverData.title}
            </h2>
          </div>

          <p className="text-gray-300 max-w-lg">{discoverData.description}</p>

          {/* CTA */}
          <button
            onClick={() => setActiveVideo(discoverData.videos[0].youtubeId)}
            className="
              group inline-flex items-center gap-4
              px-6 py-4 rounded-full
              bg-white/10 backdrop-blur-md
              border border-white/20
              hover:border-[#28E9E9]/50
              transition-all duration-500
              hover:-translate-y-1
            ">
            <div className="w-10 h-10 rounded-full bg-[#28E9E9] text-black flex items-center justify-center">
              ▶
            </div>

            <span>{discoverData.ctaText}</span>
          </button>
        </div>

        {/* TRIANGULAR MOSAIC */}
        <div className="relative w-full h-[420px] hidden lg:block">
          {discoverData.videos.slice(0, 5).map((video, index) => {
            const youtubeId = video.youtubeId;

            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo(youtubeId)}
                className={`absolute ${positions[index]} group cursor-pointer rounded-xl overflow-hidden hover:scale-105 hover:z-20 transition duration-700`}>
                <img
                  src={video.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl">
                    ▶
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {discoverData.videos.map((video) => {
            const youtubeId = video.youtubeId;

            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo(youtubeId)}
                className="relative rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  className="w-full h-40 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-md"
          onClick={closeModal}>
          <div
            ref={modalContentRef}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#28E9E9]">
              ×
            </button>

            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DiscoverSection;
