import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return children;
};

export default SmoothScrollProvider;
