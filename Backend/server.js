import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import packageRoutes from "./src/routes/package.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
import reviewRoutes from "./src/routes/review.routes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("NE Way API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
