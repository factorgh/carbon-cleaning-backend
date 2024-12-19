import express from "express";
import {
  deleteCar,
  getAllCars,
  getOneCar,
  updateCar,
} from "./cars.controller.js";

const router = express.Router();

// Car routes
router.get("/", getAllCars);

router.get("/:id", getOneCar);
router.delete("/:id", deleteCar);
router.patch("/:id", updateCar);

export default router;
