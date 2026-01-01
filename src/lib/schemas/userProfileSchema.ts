import { z } from 'zod';

export const userProfileSchema = z.object({
    firstName: z.string().min(1).max(75),
    lastName: z.string().min(1).max(75),
    phone: z.string().max(25),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;