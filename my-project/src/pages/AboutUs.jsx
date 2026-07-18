import { aboutData } from "../data/aboutData";

import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent text-white">
      {/* HERO */}
      <section className="relative py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutData.hero.backgroundImage})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/80 via-black/70 to-[#0B0F11]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#28E9E9] tracking-widest mb-4">
            {aboutData.hero.badge}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {aboutData.hero.title}
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            {aboutData.hero.description}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={aboutData.story.image}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#28E9E9] mb-4">{aboutData.story.badge}</p>

            <h2 className="text-4xl font-bold mb-6">{aboutData.story.title}</h2>

            {aboutData.story.paragraphs.map((text, index) => (
              <p key={index} className="text-gray-300 mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#28E9E9]">
              {aboutData.mission.title}
            </h3>

            <p className="text-gray-300">{aboutData.mission.description}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#28E9E9]">
              {aboutData.vision.title}
            </h3>

            <p className="text-gray-300">{aboutData.vision.description}</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {aboutData.stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-[#28E9E9]">
                {stat.number}
              </h3>

              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">{aboutData.cta.title}</h2>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/packages");
          }}
          className="bg-[#28E9E9] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
          {aboutData.cta.button}
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
