import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRETE,
            redirectUri: 'https://asif-ahammed-profile.vercel.app/api/auth/callback/google',
        })
    ],
    secret: process.env.SECRET
})

export { handler as GET, handler as POST }