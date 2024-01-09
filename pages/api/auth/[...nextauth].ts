import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from '@/libs/prismadb';
import bcrypt from 'bcrypt';


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid email or password")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid email or password")
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if(!isCorrectPassword){
                    throw new Error("Invalid email or password")
                }

                return user
            }
        })
    ],

    pages : {
        signIn : '/login'
    },
    debug : process.env.NODE_ENV === 'development',
    session : {
        strategy : 'jwt'
    },
    secret : process.env.NEXTAUTH_SECRET
})