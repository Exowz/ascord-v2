import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name is required" }),
    lastName: z
      .string()
      .min(1, { message: "Last Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be the same as Password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Where to apply the error
    message: "Passwords do not match",
  });