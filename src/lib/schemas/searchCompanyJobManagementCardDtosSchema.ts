import {z} from 'zod';
import {jobCategoryIds} from "@/lib/seededData/jobCategories";
import {jobContractTypeIdsByCountry} from "@/lib/seededData/jobContractTypes";
import {employmentMobilityOptionIds, employmentTimeOptionIds} from "@/lib/seededData/employmentOptions";
import {countryIds} from "@/lib/seededData/countries";


export const searchCompanyJobManagementCardDtosSchema = z.object({
    query: z.string().max(70),
    mustHaveSalaryRecord: z.boolean(),
    locationId: z.number(),
    categoryIds: z.array(z.number())
        .refine((arr) => arr.every(num => jobCategoryIds.includes(num))),
    contractTypeIds: z.array(z.number())
        .refine((arr) => arr.every(num => jobContractTypeIdsByCountry[1].includes(num))),
    employmentTimeOptionIds: z.array(z.number())
        .refine((arr) => arr.every(num => employmentTimeOptionIds.includes(num))),
    employmentMobilityOptionIds: z.array(z.number())
        .refine((arr) => arr.every(num => employmentMobilityOptionIds.includes(num))),
});

export type SearchCompanyJobManagementCardDtosFormData = z.infer<typeof searchCompanyJobManagementCardDtosSchema>;