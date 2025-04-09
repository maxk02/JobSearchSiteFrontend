import {JobCardDto, JobDetailedDto, JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";

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

export interface DeleteJobRequest {
    id: number;
}

export interface GetJobByIdRequest {
    id: number;
}

export interface GetJobByIdResponse {
    job: JobDetailedDto;
}

export interface GetJobsRequest {
    query: string;
    paginationSpec: PaginationSpec;
    employmentOptionIds: number[] | null;
    locationId: number | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateJobRequestDto {
    jobFolderId: number | null;
    categoryId: number | null;
    title: string | null;
    description: string | null;
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