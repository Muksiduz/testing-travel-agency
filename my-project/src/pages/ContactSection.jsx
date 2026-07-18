import { useState } from "react";
import useContactStore from "../data/contact/contactStore";
import { footerData } from "../data/footerData";

const ContactSection = () => {
  const { contact } = footerData;

  const { sendContact, loading, success, error } = useContactStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const sendMessage = async (e) => {
    e.preventDefault();

    const sent = await sendContact(form);

    if (sent) {
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/80 via-black/70 to-[#0B0F11]" />

      {/* glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#28E9E9]/10 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <div className="text-white">
          <p className="text-[#28E9E9] tracking-widest mb-4">CONTACT US</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plan Your Journey With Us
          </h2>

          <p className="text-gray-300 mb-8 max-w-md">
            Have questions or ready to book your Northeast adventure? Send us a
            message and our travel experts will contact you.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 {contact.location}</p>
            <p>📞 {contact.phone}</p>
            <p>✉ {contact.email}</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={sendMessage}
          className="
            backdrop-blur-lg bg-white/5 border border-white/10
            rounded-2xl p-8 space-y-6
          ">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Email */}
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Your Destination"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Number of Members, specific Request, Budget, etc."
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-[#28E9E9] text-black font-semibold
              py-4 rounded-lg
              hover:scale-105 transition duration-300
              disabled:opacity-50
            ">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {success && (
            <p className="text-green-400">Message sent successfully!</p>
          )}

          {error && (
            <p className="text-red-400">Failed to send message. Try again.</p>
          )}
        </form>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B0F11]" />
    </section>
  );
};

export default ContactSection;
