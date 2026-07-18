import express from "express";

import {
  register,
  login,
  logout,
  getMe,
} from "../controllers/auth.controller.js";

import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.post("/logout", protect, logout);
router.get("/me", protect, authorize("admin"), getMe);

export default router;
