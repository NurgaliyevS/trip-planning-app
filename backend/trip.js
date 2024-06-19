import mongoose from "mongoose";

const TripSchema = new mongoose.Schema(
  {
    country: String,
    city: String,
    date: String,
    time: String,
    note: String,
    userEmail: String,
  },
  { timestamps: true }
);

const Trip = mongoose.models.Trip || mongoose.model("Trip", TripSchema);

export default Trip;
