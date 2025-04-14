import { z } from 'zod';

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1).max(50),
    newPassword: z.string().min(1).max(50),
});

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;