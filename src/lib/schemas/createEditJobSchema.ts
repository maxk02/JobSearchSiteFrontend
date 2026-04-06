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

export const mandatoryListItemsSchema = z.array(
    z.string().min(1, "Tekst jest wymagany").max(200, "Zbyt długi tekst")
).min(2, "Ta lista ma zawierać co najmniej 2 elementy").max(10, "Maksymalnie 10 elementów")
    .refine((arr) => new Set(arr).size === arr.length, {
        message: "Elementy muszą być unikalne",
    });

export const jobSalaryInfoSchema = z.object({
    minimum: z.number().min(1).max(1000000).nullable(),
    maximum: z.number().min(1).max(1000000).nullable(),
    unitOfTime: z.string().nullable(),
    isAfterTaxes: z.boolean().nullable()
}).nullable();

export const createEditJobSchema = z.object({
    companyId: z.number().min(1),
    title: z.string().min(1, 'Nazwa jest wymagana').max(60, 'Zbyt długa nazwa stanowiska'),
    category: z.number().refine(num => jobCategoryIds.includes(num)),
    description: z.string().min(30, "Opis musi mieć co najmniej 30 znakow").max(500).nullable(),
    dateTimeExpiringUtc: z.date().min(new Date()),
    isPublic: z.boolean(),
    employmentOptionIds: z.array(z.number())
        .refine((arr) => (arr ?? []).every(num => employmentOptionIds.includes(num))),
    jobContractTypeIds: z.array(z.number())
        .refine((arr) => (arr ?? []).every(num => jobContractTypeIdsByCountry[1].includes(num))),
    locationIds: z.array(z.number().min(1)).min(1, "Oferta pracy musi mieć co najmniej jedną lokalizację"),
    salaryInfo: jobSalaryInfoSchema,
    responsibilities: mandatoryListItemsSchema,
    requirements: mandatoryListItemsSchema,
    niceToHaves: listItemsSchema,
});


export type CreateEditJobFormData = z.infer<typeof createEditJobSchema>;