import type { AuthOptions, User } from 'next-auth'
// import GoggleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import Credentials from 'next-auth/providers/credentials'
import { users } from '@/data-template/users';
import Auth0Provider from "next-auth/providers/auth0"


export const authConfig: AuthOptions = {
    providers: [
      // GoggleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID!,
      //   clientSecret: process.env.GOOGLE_SECRET!,
      // }),
      GithubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
      }),
      Auth0Provider({
        clientId: process.env.HH_ID!,
        clientSecret: process.env.HH_SECRET!,
      }),
        Credentials({
            credentials: {
              email: { label: 'email', type: 'email', required: true },
              password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
              if (!credentials?.email || !credentials.password) return null;

              const currentUser = users.find(user => user.email === credentials.email)

              if (currentUser && currentUser.password === credentials.password) {
                const { password, ...userWithoutPass } = currentUser;

                return userWithoutPass as User;
              }

              return null
            }
        })
    ],
    pages: {
        signIn: '/signin'
    }
}