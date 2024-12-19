import mongoose, { Schema } from "mongoose";

const servicesSchema = mongoose.Schema({
  car: {
    type: Schema.Types.ObjectId,
    ref: "cars",
  },
  serviceType: {
    type: String,
    required: [true, "Service price is required"],
  },
  serviceDate: {
    type: Date,
  },
  servicePrice: {
    type: Number,
    required: [true, "Service cost is required"],
  },
  notes: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Services = mongoose.model("Services", servicesSchema);

export default Services;
