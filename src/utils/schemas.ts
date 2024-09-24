import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, { message: "Password must contain at least 3 characters" }).max(20),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
