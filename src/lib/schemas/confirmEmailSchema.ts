import {z} from "zod";

export const confirmEmailSchema = z.object({
    code: z.string()
        .length(8, { message: "Wprowadzony kod ma zawierać 8 cyfr" })
        .regex(/^\d{8}$/, { message: "Wprowadzony kod ma zawierać tylko cyfry" }),
});

export type ConfirmEmailFormData = z.infer<typeof confirmEmailSchema>;