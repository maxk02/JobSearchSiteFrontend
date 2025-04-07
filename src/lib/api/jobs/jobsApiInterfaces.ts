import {JobCardDto, JobDetailedDto, JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";

export interface AddJobRequest {
    jobFolderId: number;
    categoryId: number;
    title: string;
    description: string;
    isPublic: boolean;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    niceToHaves: string[];
    jobSalaryInfoDto: JobSalaryInfoDto | null;
    employmentTypeIds: number[];
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
    mustHaveSalaryRecord: boolean | null;
    employmentTypeIds: number[] | null;
    countryIds: number[] | null;
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
    newDateTimeExpiringUtc: string | null;
    responsibilities: string[] | null;
    requirements: string[] | null;
    advantages: string[] | null;
    salaryInfo: JobSalaryInfoDto | null;
    employmentTypeIds: number[] | null;
    contractTypeIds: number[] | null;
    locationIds: number[] | null;
}