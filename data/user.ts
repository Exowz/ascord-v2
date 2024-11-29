import { db } from "@/lib/db";
import { User } from "@prisma/client"; // Import User type if available

export const getUserByEmail = async (email: string): Promise<User | null> => {
    if (!email) {
        console.error("getUserByEmail: Email is required");
        return null;
    }

    try {
        const user = await db.user.findUnique({
            where: { email },
        });

        return user;
    } catch (error) {
        console.error("getUserByEmail: Database query failed", error);
        return null;
    }
};

export const getUserById = async (id: string): Promise<User | null> => {
    if (!id) {
        console.error("getUserById: ID is required");
        return null;
    }

    try {
        const user = await db.user.findUnique({
            where: { id },
        });

        return user;
    } catch (error) {
        console.error("getUserById: Database query failed", error);
        return null;
    }
};
