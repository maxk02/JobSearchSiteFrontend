import {LocationDto} from "@/lib/api/locations/locationsApiDtos";
import {UnitOfTime} from "@/lib/api/sharedEnums";

export interface JobCardDto {
    id: number;
    companyLogoLink: string | null;
    companyName: string;
    locations: LocationDto[];
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryInfo: JobSalaryInfoDto | null;
    employmentTypeIds: number[] | null;
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
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currencyCode: string;
    unitOfTime: UnitOfTime;
    isAfterTaxes: boolean | null;
}