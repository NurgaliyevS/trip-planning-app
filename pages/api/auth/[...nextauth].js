// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import User from "@/backend/user";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/backend/mongodbClient";
import connectMongoDB from "@/backend/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: "noreply@mg.tripplanss.com",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn(user) {
      try {
        await connectMongoDB();

        const email = user.user.email;

        let existingUser = await User.findOne({ email });

        if (existingUser && !existingUser?.access_token) {
          await User.updateOne(
            { email },
            {
              expires: user?.account?.expires_at,
              access_token: user?.account?.access_token,
              provider: user?.account?.provider,
              id_token: user?.account?.id_token,
              image: user?.user?.image,
            }
          );
        }

        if (!existingUser) {
          // If user does not exist, create a new user in MongoDB
          const newUser = new User({
            name: user?.user?.name,
            email: user?.user?.email,
            image: user?.user?.image,
            expires: user?.account?.expires_at,
            access_token: user?.account?.access_token,
            provider: user?.account?.provider,
            id_token: user?.account?.id_token,
            user_status: "unpaid",
          });

          await newUser.save();
        }
      } catch (error) {
        console.error("Error saving user to MongoDB:", error);
        return false;
      }

      return true;
    },
  },
  session: {
    jwt: true, // Use JSON Web Tokens for session instead of default cookies
  },
  // add logo here
  // theme: {

  // },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
});
