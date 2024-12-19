import catchAsync from "../error/catch-async-error.js";
import {
  createOne,
  deleteOne,
  getOne,
  updateOne,
} from "../factory/factory-functions.js";
import Cars from "./cars.model.js";

const getOneCar = getOne(Cars);
const createCar = createOne(Cars); // Add car route here
const deleteCar = deleteOne(Cars);
const updateCar = updateOne(Cars);
const getAllCars = catchAsync(async (req, res, next) => {
  const docs = await Cars.find().populate("owner");
  if (!docs) return res.send(404);
  res.send(docs);
});
export { createCar, deleteCar, getAllCars, getOneCar, updateCar };
