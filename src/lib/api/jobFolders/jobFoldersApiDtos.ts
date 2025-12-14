import {JobSalaryInfoDto} from "@/lib/api/sharedDtos";
import {LocationDto} from "@/lib/api/locations/locationsApiDtos";

export type JobFolderJobsSortOption = "dateAsc" | "dateDesc";


export interface JobFolderDetailedDto {
    id: number;
    name: string | null;
    description: string | null;
    rootFolderId: number | null;
    parentFolderId: number | null;
    companyId: number;
    companyName: string;
    companyAvatarLink: string | null;
    claimIds: number[];
    children: JobFolderMinimalDto[];
}

export interface JobFolderMinimalDto {
    id: number;
    name: string | null;
    claimIds: number[];
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