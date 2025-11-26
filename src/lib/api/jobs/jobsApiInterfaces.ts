import {JobApplicationSortOption, JobCardDto, JobDetailedDto, JobManagementDto} from "@/lib/api/jobs/jobsApiDtos";
import {JobSalaryInfoDto, PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
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

export interface GetApplicationsForJobRequest {
    statusIds: number[];
    query: string | null;
    sortOption: JobApplicationSortOption;
    includedTags: string[];
    excludedTags: string[];
    page: number;
    size: number;
}

export interface GetApplicationsForJobResponse {
    jobApplications: JobApplicationForManagersDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobManagementDtoResponse {
    job: JobManagementDto;
}

export interface GetJobResponse {
    job: JobDetailedDto;
}

export interface GetJobsRequest {
    query: string | null;
    page: number;
    size: number;
    mustHaveSalaryRecord: boolean | null;
    employmentOptionIds: number[] | null;
    locationIds: number[] | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateJobRequest {
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