import { z } from "zod";

export const createUserSchema = z.object({
  fullName: z.string().max(50).min(4),
  password: z.string().max(200).min(4),
  email: z.string().email(),
  telephone: z.number(),
});