import NextAuth from "next-auth"
import authConfig from "@/auth.config"

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth",
        error: "/auth/error",
    },
    events : {
        async linkAccount( { user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            //Allow OAuth without email verification
            if (account?.provider !== "credentials") return true;

            const existingUser = await getUserById(user.id);

            //Prevent sing in without email verification
            if (!existingUser?.emailVerified) return false;
            // ADD 2FA check
            return true;
        },
        async session({ session, token }) {
            // Attach additional user fields to the session
            if (token) {
              session.user = {
                id: token.sub || null,
                email: token.email || null,
                firstName: token.firstName || "",
                lastName: token.lastName || "",
                role: token.role || null,
              };
            }
      
            return session; // Return the enriched session
          },
          async jwt({ token }) {
            // If no `sub`, return the token as-is
            if (!token.sub) return token;
      
            // Fetch user from the database if fields are missing
            if (!token.firstName || !token.lastName || !token.role) {
              const user = await getUserById(token.sub);
      
              if (user) {
                token.firstName = user.firstName || null;
                token.lastName = user.lastName || null;
                token.role = user.role || null;
              }
            }
      
            return token; // Return the enriched token
          }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt"},
  ...authConfig,
})