import {z} from 'zod';
import {jobCategoryIds} from "@/lib/seededData/jobCategories";
import {employmentOptionIds} from "@/lib/seededData/employmentOptions";
import {jobContractTypeIdsByCountry} from "@/lib/seededData/jobContractTypes";
import {unitsOfTime} from "@/lib/seededData/unitsOfTime";


export const listItemSchema = z.object({
    id: z.number(),
    text: z.string().min(1, "Tekst jest wymagany").max(200, "Zbyt długi tekst"),
});

export const jobSalaryInfoSchema = z.object({
    minWage: z.number().min(1).max(1000000).optional(),
    maxWage: z.number().min(1).max(1000000).optional(),
    wageTimeUnit: z.enum(unitsOfTime),
    isAfterTaxes: z.boolean(),
}).optional();

export const createEditJobSchema = z.object({
    title: z.string().min(1, 'Nazwa jest wymagana').max(60, 'Zbyt długa nazwa stanowiska'),
    category: z.number().refine(num => jobCategoryIds.includes(num)),
    description: z.string().min(30).max(500).optional(),
    timeRangeOption: z.number().min(1).max(4),
    dateTimeExpiringUtc: z.date().min(new Date()),
    isPublic: z.boolean(),
    employmentOptionIds: z.array(z.number())
        .refine((arr) => arr.every(num => employmentOptionIds.includes(num))),
    jobContractTypeIds: z.array(z.number())
        .refine((arr) => arr.every(num => jobContractTypeIdsByCountry[1].includes(num))),
    locationIds: z.array(z.number().min(1).max(1000000)),
    salaryInfo: jobSalaryInfoSchema,
    responsibilities: z.array(listItemSchema).max(10).optional(),
    requirements: z.array(listItemSchema).max(10).optional(),
    niceToHaves: z.array(listItemSchema).max(10).optional(),
});


export type CreateEditJobFormData = z.infer<typeof createEditJobSchema>;
export type ListItemType = z.infer<typeof listItemSchema>;