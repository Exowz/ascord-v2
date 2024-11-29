// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      role: UserRole;
      image?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    firstName?: string;
    lastName?: string;
    role?: UserRole;
    isTwoFactorEnabled: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    role?: UserRole;
    image?: string | null;
  }
}
