import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRETE,
            redirectUri: 'http://localhost:3000/api/auth/callback/google',
        })
    ],
    secret: process.env.SECRET
})

export { handler as GET, handler as POST }