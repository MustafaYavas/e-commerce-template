import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import connectMongo from '@/libs/db';
import User from '../../../models/user';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john@doe.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        connectMongo();

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        let existingUser;

        try {
          existingUser = await User.findOne({ email });
        } catch (error) {
          throw new Error('Logging in failed!');
        }

        if (!existingUser)
          throw new Error(
            'User not found! Please check your email and password.'
          );

        let isValidPassword = false;

        try {
          isValidPassword = await bcrypt.compare(
            password,
            existingUser.password
          );
        } catch (error) {
          throw new Error('Logging in failed!');
        }

        if (!isValidPassword)
          throw new Error('Could not log you in. Invalid credentials!');

        return existingUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
