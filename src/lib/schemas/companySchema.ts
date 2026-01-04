import { z } from 'zod';

export const companySchema = z.object({
    name: z.string().min(1, 'Nazwa firmy jest wymagana'),
    nip: z.string().length(10, 'NIP musi mieć 10 cyfr').regex(/^\d+$/, 'NIP musi być liczbą'),
    description: z.string(),
});

export type CompanyFormData = z.infer<typeof companySchema>;