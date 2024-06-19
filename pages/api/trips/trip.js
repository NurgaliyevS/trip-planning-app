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
        const ids = req.body.cards.map((card) => card.id);

        console.log(ids, 'ids');

        // can you add logic if id is empty then create new trip
        // else update the existing trip

        const trips = await Trip.find({ _id: { $in: ids } });

        console.log(trips, 'trips');

        const updatedTrips = await Promise.all(
          trips.map((trip, index) => {
            const card = req.body.cards[index];
            trip.country = card.country;
            trip.city = card.city;
            trip.date = card.date;
            trip.time = card.time;
            trip.note = card.note;
            trip.email = req.body.email;
            return trip.save();
          })
        );

        console.log(updatedTrips, "updatedTrips");

        if (!trips) {
          return res
            .status(404)
            .json({ success: false, message: "Trip not found" });
        }
        return res
          .status(200)
          .json({
            success: true,
            message: "Trip updated successfully",
            data: updatedTrips,
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
