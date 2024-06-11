import NextAuth, {SessionStrategy} from 'next-auth'
import {db} from '@/lib/db'
import GoogleProvider from 'next-auth/providers/google'
import {encode, decode} from 'next-auth/jwt'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!!
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error'
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
    strategy: 'jwt' as SessionStrategy
  },
  jwt: {encode, decode},
  callbacks: {
    async session({token, session}) {
      const user = session.user

      if (token && user) {
        user.name = token.name
        user.email = token.email
      }
      return session
    },
    async signIn(profile: any) {
      if (!profile?.profile?.email) {
        throw new Error('No email found in user profile')
      }
      await db.user.upsert({
        where: {email: profile.profile.email},
        create: {email: profile.profile.email, name: profile.profile.name},
        update: {email: profile.profile.email}
      })
      return true
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}
