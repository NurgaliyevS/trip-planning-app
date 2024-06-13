import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        // Check if a user ID is provided in the request URL
        const userId = req.query.id;
        console.log(userId, "user");
        if (userId) {
          // Find the user with the provided ID
          const user = await User.findById(userId);
          console.log(user, 'findby id');

          if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
          }
          res
            .status(200)
            .json({ success: true, message: "User found", data: user });
        } else {
          // Get all users
          const users = await User.find();
          res
            .status(200)
            .json({ success: true, message: "Users found", data: users });
        }
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({
          success: true,
          message: "User created successfully",
          data: user,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
