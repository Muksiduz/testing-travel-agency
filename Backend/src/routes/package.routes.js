import express from "express";
import {
  getPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
} from "../controllers/package.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

console.log("Package routes loaded");

router.get("/", getPackages);
router.get("/:id", getPackageById);

router.post("/", protect, authorize("admin"), createPackage);
router.put("/:id", protect, authorize("admin"), updatePackage);
router.delete("/:id", protect, authorize("admin"), deletePackage);

export default router;
