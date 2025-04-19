import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";


export type JobApplicationSortOption = "dateAsc" | "dateDesc";

export interface JobCardDto {
    id: number;
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

    managementInfo: JobManagementInfoDto | null;
}

export interface JobDetailedDto {
    id: number;
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

    managementInfo: JobManagementInfoDto | null;
}

export interface JobManagementInfoDto {
    folderId: number;
    isPublic: boolean;
    timeRangeOptionId: number;
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currency: string;
    unitOfTime: string;
    isAfterTaxes: boolean;
}