import { z } from "zod";


export const MessagesSchema = z.object({
    content: z
    .string()
    .min(1,{message: "Content must be 1 charcaters"})
    .max(150,{message: "Content must be in 150 characters"})
})