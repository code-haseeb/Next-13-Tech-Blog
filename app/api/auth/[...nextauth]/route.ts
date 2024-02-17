import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [

    CredentialsProvider({

      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials, req) {
      }),
   const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
  const user = response.rows[0];
  async authorize(credentials, req) {
  ])
