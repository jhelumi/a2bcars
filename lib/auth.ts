import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "./generated/prisma/client";
import {nextCookies} from  "better-auth/next-js"
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({adapter});

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword :{
        enabled :true,
        autoSignIn: false
    },
    plugins: [nextCookies()]
});