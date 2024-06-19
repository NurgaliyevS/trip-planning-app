import connectMongoDB from "@/backend/mongodb";
import Trip from "@/backend/trip";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        const email = req?.query?.email;
        const trips = await Trip.find({ userEmail: email });
        return res.status(200).json({
          success: true,
          message: "Trips retrieved successfully",
          data: trips,
        });
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
        return res.status(201).json({
          success: true,
          message: "Trip created successfully",
          data: newTrip,
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: "Bad request" });
      }
    case "PUT":
      try {
        const { email, cards } = req.body;
        const updatePromises = cards.map(async (card) => {
          if (card.id) {
            // Update existing trip
            const trip = await Trip.findById(card.id);
            if (trip) {
              trip.country = card.country;
              trip.city = card.city;
              trip.date = card.date;
              trip.time = card.time;
              trip.note = card.note;
              trip.userEmail = email;
              return trip.save();
            } else {
              return null;
            }
          } else {
            // Create new trip
            const newTrip = new Trip({
              ...card,
              userEmail: email,
            });
            return newTrip.save();
          }
        });

        const results = await Promise.all(updatePromises);
        const successfulUpdates = results.filter((result) => result !== null);

        return res.status(200).json({
          success: true,
          message: "Trips processed successfully",
          data: successfulUpdates,
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
        return res.status(200).json({
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
