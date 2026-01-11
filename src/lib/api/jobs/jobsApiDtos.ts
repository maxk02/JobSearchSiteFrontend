import {LocationDto} from "@/lib/api/locations/locationsApiDtos";


export type JobApplicationSortOption = "dateAppliedAsc" | "dateAppliedDesc";

export interface JobCardDto {
    id: number;
    companyId: number;
    companyAvatarLink: string | null;
    companyName: string;
    locations: LocationDto[];
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryInfoDto: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    isBookmarked: boolean;
}

export interface JobDetailedDto {
    id: number;
    companyId: number;
    companyAvatarLink: string | null;
    companyName: string;
    companyDescription: string | null;
    locations: LocationDto[];
    categoryId: number;
    title: string;
    description: string | null;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    niceToHaves: string[];
    salaryInfoDto: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    isBookmarked: boolean;
    applicationId: number | null;
}

export interface JobManagementDto {
    id: number;
    companyId: number;
    companyLogoLink: string | null;
    companyName: string;
    companyDescription: string | null;
    locations: LocationDto[];
    categoryId: number;
    title: string;
    description: string | null;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    niceToHaves: string[];
    salaryInfoDto: JobSalaryInfoDto | null;
    employmentOptionIds: number[];
    contractTypeIds: number[];
    isPublic: boolean;
    claimIds: number[];
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currencyId: number;
    unitOfTime: number;
    isAfterTaxes: boolean | null;
}

export interface JobManagementCardDto {
    id: number;
    locations: LocationDto[];
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryInfoDto: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    isBookmarked: boolean;
    isPublic: boolean;
}