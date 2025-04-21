import {userProfileSchema} from "@/lib/schemas/userProfileSchema";
import {confirmEmailSchema} from "@/lib/schemas/confirmEmailSchema";
import {z} from "zod";

export const createUserProfileSchema = userProfileSchema.merge(confirmEmailSchema);
export type CreateUserProfileFormData = z.infer<typeof createUserProfileSchema>;