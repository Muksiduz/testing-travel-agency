import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import App from "./App";
import "./index.css";

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,
  easing: (t) => 1 - Math.pow(1 - t, 3),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
