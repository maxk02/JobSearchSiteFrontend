import { z } from 'zod';

export const userProfileSchema = z.object({
    firstName: z.string().min(1).max(75),
    lastName: z.string().min(1).max(75),
    phone: z.string().nullable(),
});

export type UserProfileFormData = z.infer<typeof userProfileSchema>;