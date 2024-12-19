import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getOneCustomer,
  updateCustomer,
} from "./customers.controller.js";

const router = express.Router();

// customer routes
router.get("/", getAllCustomers);
router.post("/", createCustomer); // Add customer route here

router.get("/:id", getOneCustomer);
router.delete("/:id", deleteCustomer);
router.patch("/:id", updateCustomer);

export default router;
