import NextAuth from "next-auth";
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
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectMongoDB();

        const email = user.email;
        let existingUser = await User.findOne({ email });

        if (existingUser) {
          if (!existingUser.access_token) {
            await User.updateOne(
              { email },
              {
                expires: account.expires_at,
                access_token: account.access_token,
                provider: account.provider,
                id_token: account.id_token,
                image: user.image,
              }
            );
          }
        } else {
          const newUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
            expires: account.expires_at,
            access_token: account.access_token,
            provider: account.provider,
            id_token: account.id_token,
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
    async session({ session, token }) {
      try {
        await connectMongoDB();
        const user = await User.findOne({ email: session.user.email });

        if (user) {
          session.user.id = user.id;
          session.user.user_status = user.user_status;
        }
      } catch (error) {
        console.error("Error retrieving user from MongoDB:", error);
      }

      return session;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.expires = account.expires_at;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
});