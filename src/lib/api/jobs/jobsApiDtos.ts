import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";
import {JobSalaryInfoDto} from "@/lib/api/sharedDtos";


export type JobApplicationSortOption = "dateAsc" | "dateDesc";

export interface JobCardDto {
    id: number;
    companyId: number;
    companyLogoLink: string | null;
    companyName: string;
    locations: StringLocationDto[];
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryInfo: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    isBookmarked: boolean;
}

export interface JobDetailedDto {
    id: number;
    companyId: number;
    companyLogoLink: string | null;
    companyName: string;
    companyDescription: string | null;
    locations: StringLocationDto[];
    categoryId: number;
    title: string;
    description: string | null;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    niceToHaves: string[];
    salaryInfo: JobSalaryInfoDto | null;
    employmentTypeIds: number[] | null;
    contractTypeIds: number[] | null;
    isBookmarked: boolean;
    applicationId: number | null;
}