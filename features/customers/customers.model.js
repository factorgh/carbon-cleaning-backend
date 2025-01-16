import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
  },
  accountType: {
    type: String,
    enum: ["individual", "company"],
    default: "individual",
  },
  // Car details
  carType: {
    type: String,
    enum: ["Diesel", "Petrol", "Hybrid", "Gas"],
  },
  fuel: String,
  brand: String,
  engineCapacity: String,
  mileage: String,
  preEmissions: String,
  postEmissions: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Customers = mongoose.model("customers", customerSchema);

export default Customers;
