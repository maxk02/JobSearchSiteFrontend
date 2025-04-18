import {JobCardDto, JobDetailedDto, JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";

export interface AddJobRequest {
    jobFolderId: number;
    categoryId: number;
    title: string;
    description: string | null;
    isPublic: boolean;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    niceToHaves: string[];
    salaryInfo: JobSalaryInfoDto | null;
    employmentOptionIds: number[];
    contractTypeIds: number[];
    locationIds: number[];
}

export interface AddJobResponse {
    id: number;
}

export interface DeleteJobRequest {
    id: number;
}

export interface GetJobByIdRequest {
    id: number;
}

export interface GetJobByIdResponse {
    job: JobDetailedDto;
}

export interface GetJobManagementInfoResponse {
    companyId: number;
    companyName: string;
    companyLogoLink: string | null;
    folderId: number;
    folderName: string;
}

export interface GetJobsRequest {
    query: string;
    paginationSpec: PaginationSpec;
    companyIds: number[] | null;
    employmentOptionIds: number[] | null;
    locationIds: number[] | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateJobRequestDto {
    title: string | null;
    folderId: number | null;
    categoryId: number | null;
    description: string | null;
    timeRangeOptionId: number | null;
    isPublic: boolean | null;
    dateTimeExpiringUtc: string | null;
    responsibilities: string[] | null;
    requirements: string[] | null;
    niceToHaves: string[] | null;
    salaryInfo: JobSalaryInfoDto | null;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    locationIds: number[] | null;
}

export interface GetApplicationsRequest {
    statusIds: number[];
    query: string | null;
    includedTags: string[];
    excludedTags: string[];
    paginationSpec: PaginationSpec;
}

export interface GetApplicationsResponse {
    jobApplications: JobApplicationForManagersDto[];
    paginationResponse: PaginationResponse;
}