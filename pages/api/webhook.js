import connectMongoDB from "@/backend/mongodb";
import User from "@/backend/user";
import crypto from "crypto";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false, // We need the raw body for signature verification
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const buf = await buffer(req);
      const rawBody = buf.toString();

      // Verify the signature
      const secret = process.env.LEMON_SQEEZY_WEBHOOK_SIGNATURE;
      const hmac = crypto.createHmac("sha256", secret);
      const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
      const signature = Buffer.from(req.headers["x-signature"] || "", "utf8");

      if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error("Invalid signature.");
      }

      // Parse the body
      const body = JSON.parse(rawBody);
      const eventType = req.headers["x-event-name"];

      console.log(body, 'body');
      console.log(body.data, 'data');
      console.log(body.data.attributes, 'attributes');

      // Handle the event
      if (eventType === "order_created") {
        const isSuccessful = body.data.attributes.status === "paid";

        await connectMongoDB();

        // find by email
        const user = await User.findOne({
          email: body.data.attributes.user_email,
        });

        if (user) {
          user.user_status = isSuccessful ? "paid" : "unpaid";
          await user.save();
        } else {
          // create new user
          const newUser = new User({
            name: body.data.attributes.user_name,
            email: body.data.attributes.user_email,
            user_status: isSuccessful ? "paid" : "unpaid",
          });
          await newUser.save();
        }
      }

      res.status(200).json({ message: "Webhook received" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
