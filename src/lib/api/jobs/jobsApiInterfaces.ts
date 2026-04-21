import {JobApplicationSortOption, JobCardDto, JobDetailedDto, JobManagementDto, JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobApplicationForManagersDto, JobApplicationOnJobPageDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";

export interface AddJobRequest {
    companyId: number;
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

export interface GetDailyApplicationsForJobForDateRangeRequest {
    startDate: string;
    endDate: string;
}

export interface GetDailyApplicationsForJobForDateRangeResponse {
    dailyApplications: Record<string, number>[];
}

export interface GetDailyViewsForJobForDateRangeRequest {
    startDate: string;
    endDate: string;
}

export interface GetDailyViewsForJobForDateRangeResponse {
    dailyViews: Record<string, number>[];
}

export interface GetApplicationsForJobRequest {
    locationId: number;
    statusIds: number[];
    query: string | null;
    sortOption: JobApplicationSortOption | null;
    includedTags: string[];
    excludedTags: string[];
    page: number;
    size: number;
}

export interface GetApplicationsForJobResponse {
    jobApplications: JobApplicationForManagersDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobDataForCurrentAccountResponse {
    jobApplicationOnJobPageDto: JobApplicationOnJobPageDto | null;
    isBookmarked: boolean;
}

export interface GetJobManagementDtoResponse {
    jobManagementDto: JobManagementDto;
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
    countryIds: number[] | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateJobRequest {
    title: string | null;
    categoryId: number | null;
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