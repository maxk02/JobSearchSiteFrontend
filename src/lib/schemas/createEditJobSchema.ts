import {z} from 'zod';
import {jobCategoryIds} from "@/lib/seededData/jobCategories";
import {employmentOptionIds} from "@/lib/seededData/employmentOptions";
import {jobContractTypeIdsByCountry} from "@/lib/seededData/jobContractTypes";
import {unitsOfTime} from "@/lib/seededData/unitsOfTime";


export const listItemsSchema = z.array(
    z.string().min(1, "Tekst jest wymagany").max(200, "Zbyt długi tekst")
).max(10, "Maksymalnie 10 elementów")
    .refine((arr) => new Set(arr).size === arr.length, {
        message: "Elementy muszą być unikalne",
    })
    .nullable();

export const jobSalaryInfoSchema = z.object({
    minWage: z.number().min(1).max(1000000).nullable(),
    maxWage: z.number().min(1).max(1000000).nullable(),
    wageTimeUnit: z.enum(unitsOfTime),
    isAfterTaxes: z.boolean(),
}).nullable();

export const createEditJobSchema = z.object({
    jobFolderId: z.number().min(1),
    title: z.string().min(1, 'Nazwa jest wymagana').max(60, 'Zbyt długa nazwa stanowiska'),
    category: z.number().refine(num => jobCategoryIds.includes(num)),
    description: z.string().min(30).max(500).nullable(),
    timeRangeOption: z.number().min(1).max(4),
    dateTimeExpiringUtc: z.date().min(new Date()),
    isPublic: z.boolean(),
    employmentOptionIds: z.array(z.number())
        .refine((arr) => arr.every(num => employmentOptionIds.includes(num))),
    jobContractTypeIds: z.array(z.number())
        .refine((arr) => arr.every(num => jobContractTypeIdsByCountry[1].includes(num))),
    locationIds: z.array(z.number().min(1)),
    salaryInfo: jobSalaryInfoSchema,
    responsibilities: listItemsSchema,
    requirements: listItemsSchema,
    niceToHaves: listItemsSchema,
});


export type CreateEditJobFormData = z.infer<typeof createEditJobSchema>;