import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";
import {JobSalaryInfoDto} from "@/lib/api/sharedDtos";

export type JobFolderJobsSortOption = "dateAsc" | "dateDesc";

export interface JobFolderMinimalDto {
    id: number;
    name: string;
    claimIds: number[];
}

export interface JobFolderDetailedDto {
    id: number;
    name: string;
    description: string | null;
    rootFolderId: number | null;
    parentFolderId: number | null;
    companyId: number;
    companyName: string;
    companyLogoLink: string | null;
    claimIds: number[];
    children: JobFolderMinimalDto[];
}

export interface JobManagementCardDto {
    id: number;
    companyLogoLink: string | null;
    locations: StringLocationDto[];
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryInfo: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    isPublic: boolean;
    timeRangeOptionId: number;
}