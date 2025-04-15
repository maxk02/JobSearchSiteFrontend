import {userProfileSchema} from "@/lib/schemas/userProfileSchema";
import {confirmEmailSchema} from "@/lib/schemas/confirmEmailSchema";
import {z} from "zod";

export const registerUserFormSchema = userProfileSchema.merge(confirmEmailSchema);
export type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;