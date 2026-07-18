import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0B0F11] z-[100]"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1],
      }}
      style={{ transformOrigin: "bottom" }}
    />
  );
};

export default PageTransition;
