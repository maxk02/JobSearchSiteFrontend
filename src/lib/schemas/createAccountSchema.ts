import { z } from 'zod';

export const createAccountSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(40),
    confirmPassword: z.string().min(1).max(40),
}).refine(data => data.password === data.confirmPassword,
    {path: ['confirmPassword'], message: "Hasło i potwierdzenie muszą się zgadzać."});

export type CreateAccountFormData = z.infer<typeof createAccountSchema>;