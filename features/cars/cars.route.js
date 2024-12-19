import express from "express";
import {
  createCar,
  deleteCar,
  getAllCars,
  getOneCar,
  updateCar,
} from "./cars.controller.js";

const router = express.Router();

// Car routes
router.get("/", getAllCars);
router.post("/", createCar);

router.get("/:id", getOneCar);
router.delete("/:id", deleteCar);
router.patch("/:id", updateCar);

export default router;
