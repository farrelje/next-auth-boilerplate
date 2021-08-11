import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from "next-auth/adapters";
import prisma from '../../../lib/prisma';

const options = {
  // Add any external providers if wanted
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],

  database: process.env.DATABASE_URL,
  adapter: Adapters.Prisma.Adapter({ prisma }),

};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;