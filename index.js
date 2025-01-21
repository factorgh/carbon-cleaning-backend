import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import carsRoutes from "./features/cars/cars.route.js";
import customersRoutes from "./features/customers/customers.route.js";
import servicesRoutes from "./features/services/services.route.js";
import bulkRoute from "./utils/bulkUpload.js";

dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/customers", customersRoutes);
app.use("/api/v1/services", servicesRoutes);
app.use("/api/v1/cars", carsRoutes);
app.use("/api/v1/bulk", bulkRoute);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
