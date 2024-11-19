"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error : "Invalid fiels!" };
    }

    const { email, password, firstName, lastName} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);
    
    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
        },
    });

    //TODO : Send verification token email


    return { success: "User created!"};
};