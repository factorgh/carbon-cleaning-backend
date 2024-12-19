import express from "express";
import {
  createService,
  deleteService,
  getAllServices,
  getOneService,
  updateService,
} from "./services.controller.js";

const router = express.Router();

// Service routes
router.get("/", getAllServices);
router.post("/", createService);

// Service routes
router.get("/:id", getOneService);
router.delete("/:id", deleteService);
router.patch("/:id", updateService);

export default router;
