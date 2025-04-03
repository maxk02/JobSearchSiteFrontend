import { z } from 'zod';

export const logInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(40),
    rememberMe: z.boolean(),
});

export type LogInFormData = z.infer<typeof logInSchema>;