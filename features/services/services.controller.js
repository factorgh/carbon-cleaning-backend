import catchAsync from "../error/catch-async-error.js";
import {
  createOne,
  deleteOne,
  getOne,
  updateOne,
} from "../factory/factory-functions.js";
import Services from "./services.model.js";

const getOneService = getOne(Services);
const createService = createOne(Services); // Add service route here
const deleteService = deleteOne(Services);
const updateService = updateOne(Services);
const getAllServices = catchAsync(async (req, res, next) => {
  const docs = await Services.find().populate("cars");
  if (!docs) return res.send(404);
  res.send(docs);
});
export {
  createService,
  deleteService,
  getAllServices,
  getOneService,
  updateService,
};
