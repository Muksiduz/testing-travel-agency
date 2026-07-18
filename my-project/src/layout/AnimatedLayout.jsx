import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PageTransition from "./PageTransition";

const AnimatedLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-[#0B0F11] text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -60,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.87, 0, 0.13, 1],
          }}>
          <PageTransition />
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AnimatedLayout;
