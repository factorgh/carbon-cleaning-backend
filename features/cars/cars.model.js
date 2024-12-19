import mongoose from "mongoose";

const carsSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
    required: [true, "Customer is required"],
  },
  make: {
    type: String,
    required: [true, "Make is required"],
  },
  model: {
    type: String,
    required: [true, "Model is required"],
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
  },
  fuelType: {
    type: String,
    required: [true, "Color is required"],
  },
  registrationNumber: {
    type: Number,
    required: [true, "Mileage is required"],
  },

  //   services: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "services",
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cars = mongoose.model("cars", carsSchema);

export default Cars;
