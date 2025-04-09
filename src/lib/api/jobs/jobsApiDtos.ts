import {LocationDto} from "@/lib/api/locations/locationsApiDtos";

export interface JobCardDto {
    id: number;
    companyLogoLink: string | null;
    companyName: string;
    locations: LocationDto[];
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
    companyLogoLink: string | null;
    companyName: string;
    locations: LocationDto[];
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
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currency: string;
    unitOfTime: string;
    isAfterTaxes: boolean;
}