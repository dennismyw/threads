import * as z from "zod";

export const ThreadValidation = z.object({
    thread: z.string().min(1, { message: "Thread must not be empty." }).min(3, { message: "Minimum 3 characters." }),
    accountId: z.string(),
});

export const CommentValidation = z.object({
    thread: z.string().min(1, { message: "Comment must not be empty." }).min(3, { message: "Minimum 3 characters." }),
});
