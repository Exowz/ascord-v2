import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        const [firstName, ...lastNameParts] = profile.name?.split(" ") || [];
        return {
          id: profile.sub,
          email: profile.email,
          firstName: firstName || "", // Assign the first part as firstName
          lastName: lastNameParts.join(" ") || "", // Join remaining parts as lastName
          image: profile.picture || null,
          isTwoFactorEnabled: profile.isTwoFactorEnabled as boolean, // Include isTwoFactorEnabled if present
        };
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        const [firstName, ...lastNameParts] = profile.name?.split(" ") || [];
        return {
          id: String(profile.id),
          email: profile.email,
          firstName: firstName || "",
          lastName: lastNameParts.join(" ") || "",
          image: profile.avatar_url || null,
          isTwoFactorEnabled: profile.isTwoFactorEnabled as boolean, // Include isTwoFactorEnabled if present
        };
      },
    }),
    Credentials({
      // Ensure proper typing for `authorize`
      authorize: async (credentials) => {
        if (!credentials) return null;

        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) return null;

        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName || "", // Include firstName if present
          lastName: user.lastName || "", // Include lastName if present
          role: user.role || "USER", // Default to "USER" if not present
          image: user.image || null, // Include image if present
          isTwoFactorEnabled: user.isTwoFactorEnabled as boolean, // Include isTwoFactorEnabled if present
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
