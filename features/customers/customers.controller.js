import catchAsync from "../error/catch-async-error.js";
import {
  createOne,
  deleteOne,
  getOne,
  updateOne,
} from "../factory/factory-functions.js";
import Customers from "./customers.model.js";

const getOneCustomer = getOne(Customers);
const createCustomer = createOne(Customers);
const deleteCustomer = deleteOne(Customers);
const updateCustomer = updateOne(Customers);
const getAllCustomers = catchAsync(async (req, res, next) => {
  const docs = await Customers.find().select("-__v");
  if (!docs) return res.send(404);
  res.send(docs);
});

export {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getOneCustomer,
  updateCustomer,
};
