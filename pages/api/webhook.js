// pages/api/webhook.js

import crypto from "crypto";
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false, // We need the raw body for signature verification
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
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

      console.log(body);

      // Handle the event
      if (eventType === "order_created") {
        const userId = body.meta.custom_data.user_id;
        const isSuccessful = body.data.attributes.status === "paid";
        
        // You can now perform actions based on the event data
        console.log(`Order created for user ${userId}. Success: ${isSuccessful}`);
        console.log(body.meta.custom_data, 'custom data')
        console.log(body.data, 'body data');
      }

      res.status(200).json({ message: "Webhook received" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
