import { z } from 'zod';
import {jobCategories} from "@/lib/seededData/jobCategories";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";


const allowedJobCategoryIds = jobCategories.map(jc => jc.id);

const allowedJobContractTypeIds = jobContractTypes.map(jct => jct.id);

const allowedEmploymentTimeOptions = employmentOptions
    .filter((et) => et.type === "EmploymentTime")
    .map(et => et.id);

const allowedEmploymentMobilityOptions = employmentOptions
    .filter((et) => et.type === "Mobility")
    .map(et => et.id);


export const searchJobSchema = z.object({
    searchQuery: z.string().max(70),
    location: z.string().max(70),
    jobCategories: z.array(z.number())
        .refine((arr) => arr.every(num => allowedJobCategoryIds.includes(num))),
    jobContractTypes: z.array(z.number())
        .refine((arr) => arr.every(num => allowedJobContractTypeIds.includes(num))),
    employmentTimeOptions: z.array(z.number())
        .refine((arr) => arr.every(num => allowedEmploymentTimeOptions.includes(num))),
    employmentMobilityOptions: z.array(z.number())
        .refine((arr) => arr.every(num => allowedEmploymentMobilityOptions.includes(num))),
});

export type SearchJobFormData = z.infer<typeof searchJobSchema>;