// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectMongoDB from '@/backend/mongodb';
import User from '@/backend/user';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers as needed
  ],
  callbacks: {
    async signIn(user) {
      try {
        await connectMongoDB(); // Connect to MongoDB

        // Check if the user already exists in the database
        const email = user.user.email;

        let existingUser = await User.findOne({ email });

        if (!existingUser) {
          // If user does not exist, create a new user in MongoDB
          const newUser = new User({
            name: user.user.name,
            email: user.user.email,
            image: user.user.image,
            expires: user.account.expires_at,
            access_token: user.account.access_token,
            provider: user.account.provider,
            id_token: user.account.id_token,
            user_status: 'unpaid',
          });

          await newUser.save();
        }
      } catch (error) {
        console.error('Error saving user to MongoDB:', error);
        return false;
      }

      return true;
    },
  },
  session: {
    jwt: true, // Use JSON Web Tokens for session instead of default cookies
  },
  secret: process.env.NEXTAUTH_SECRET,
});
