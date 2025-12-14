import {LocationDto} from "@/lib/api/locations/locationsApiDtos";


export type JobApplicationSortOption = "dateAsc" | "dateDesc";

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
    folderId: number;
    folderName: string | null;
    claimIds: number[];
    isPublic: boolean;
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currencyId: number;
    unitOfTime: number;
    isAfterTaxes: boolean | null;
}