import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minlength: 10,
    maxlength: 15,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    minlength: 10,
    maxlength: 255,
  },
  customerType: {
    type: String,
    enum: ["individual", "company"],
    default: "individual",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Customers = mongoose.model("customers", customerSchema);

export default Customers;
