import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRETE,
        })
    ],
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, user) {
            session.user.id = user.id;
            return session;
        },
    },
    jwt: {
        secret: process.env.NEXT_AUTH
    },
})

export { handler as GET, handler as POST }