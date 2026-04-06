import { z } from 'zod';

export const setNewPasswordWithLinkSchema = z.object({
    newPassword: z.string().min(8).max(50),
    confirmNewPassword: z.string().min(8).max(50),
});

export type SetNewPasswordWithLinkFormData = z.infer<typeof setNewPasswordWithLinkSchema>;