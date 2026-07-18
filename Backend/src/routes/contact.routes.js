import express from "express";

import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contact.controller.js";

import { protect, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.post("/", createContact);

// Admin
router.get("/", protect, authorize("admin"), getContacts);

router.get("/:id", protect, authorize("admin"), getContactById);

router.put("/:id", protect, authorize("admin"), updateContact);

router.delete("/:id", protect, authorize("admin"), deleteContact);

export default router;
