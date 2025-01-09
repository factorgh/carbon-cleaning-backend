import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  accountType: {
    type: String,
    enum: ["individual", "company"],
    default: "individual",
  },
  // Car details
  carType: {
    type: String,
    required: [true, "Car type is required"],
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
