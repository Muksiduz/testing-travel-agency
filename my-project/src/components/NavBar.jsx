import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/navLinks";
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        {/* <h1 className="text-white text-xl font-bold z-50">TRAVEL</h1> */}
        <motion.img
          src={navLinks.logo.src}
          alt={navLinks.logo.alt}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-20 w-auto rounded-full"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white text-base font-light tracking-widest relative">
          {navLinks.links.map((link) => (
            <NavLink key={link.id} to={link.path}>
              {({ isActive }) => (
                <li className="relative cursor-pointer hover:text-[#28E9E9] transition hover:font-semibold">
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#28E9E9]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* CTA Desktop */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-[#28E9E9] text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-300 transition">
          Book Now
        </button>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 flex flex-col gap-1">
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0
              bg-black/95 backdrop-blur-xl
              flex flex-col items-center justify-center
              gap-8
              md:hidden
            ">
            {navLinks.links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-light hover:text-[#28E9E9] transition">
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="
    mt-4
    bg-[#28E9E9]
    text-black
    px-6 py-3
    rounded-full
    font-semibold
  ">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
