import connectMongoDB from "@/backend/mongodb";
import Trip from "@/backend/trip";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        const trips = await Trip.find();
        return res
          .status(200)
          .json({ success: true, message: "Trips found", data: trips });
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    case "POST":
      try {
        const newTrip = await Trip.insertMany(
          req.body.cards.map((card) => ({
            ...card,
            userEmail: req.body.email,
          }))
        );
        return res
          .status(201)
          .json({
            success: true,
            message: "Trip created successfully",
            data: newTrip,
          });
      } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" });
      }
    case "PUT":
      try {
        const trip = await Trip.findByIdAndUpdate(req.query, req.body, {
          new: true,
          runValidators: true,
        });
        if (!trip) {
          return res
            .status(404)
            .json({ success: false, message: "Trip not found" });
        }
        return res
          .status(200)
          .json({
            success: true,
            message: "Trip updated successfully",
            data: trip,
          });
      } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" });
      }
    case "DELETE":
      try {
        const trip = await Trip.findByIdAndDelete(req.query);
        if (!trip) {
          return res
            .status(404)
            .json({ success: false, message: "Trip not found" });
        }
        return res
          .status(200)
          .json({
            success: true,
            message: "Trip deleted successfully",
            data: trip,
          });
      } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" });
      }
    default:
      return res.status(400).json({ success: false, message: "Bad request" });
  }
}
