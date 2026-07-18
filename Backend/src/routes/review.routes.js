import express from "express";

import {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";

import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getReviews);
router.get("/:id", getReview);

// Admin
router.post("/", protect, authorize("admin"), createReview);

router.put("/:id", protect, authorize("admin"), updateReview);

router.delete("/:id", protect, authorize("admin"), deleteReview);

export default router;
