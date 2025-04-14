import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";


export interface AddCompanyBookmarkRequest {
    companyId: number;
}

export interface AddJobBookmarkRequest {
    jobId: number;
}

export interface AddUserProfileRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
}

export interface DeleteCompanyBookmarkRequest {
    companyId: number;
}

export interface DeleteJobBookmarkRequest {
    jobId: number;
}

export interface GetBookmarkedCompaniesRequest {
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedCompaniesResponse {
    companyInfos: CompanyInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetBookmarkedJobsRequest {
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedJobsResponse {
    jobInfos: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobApplicationsRequest {
    statusId: number | null;
    paginationSpec: PaginationSpec;
}

export interface GetJobApplicationsResponse {
    jobApplications: JobApplicationInUserProfileDto[];
    paginationResponse: PaginationResponse;
}

export interface GetPersonalFilesRequest {
    paginationSpec: PaginationSpec;
}

export interface GetPersonalFilesResponse {
    personalFileInfos: PersonalFileInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetUserProfileResponse {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
}

export interface UpdateUserProfileRequestDto {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
}