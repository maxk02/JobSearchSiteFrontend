import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";


export interface AddCompanyBookmarkRequest {
    userId: number;
    companyId: number;
}

export interface AddJobBookmarkRequest {
    userId: number;
    jobId: number;
}

export interface AddUserProfileRequest {
    accountId: number;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: string | null;
    email: string;
    phone: string | null;
}

export interface DeleteCompanyBookmarkRequest {
    userId: number;
    companyId: number;
}

export interface DeleteJobBookmarkRequest {
    userId: number;
    jobId: number;
}

export interface GetBookmarkedCompaniesRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedCompaniesResponse {
    companyInfos: CompanyInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetBookmarkedJobsRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedJobsResponse {
    jobInfos: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobApplicationsRequest {
    id: number;
    paginationSpec: PaginationSpec;
}

export interface GetJobApplicationsResponse {
    jobApplications: JobApplicationInUserProfileDto[];
    paginationResponse: PaginationResponse;
}

export interface GetPersonalFilesRequest {
    id: number;
    paginationSpec: PaginationSpec;
}

export interface GetPersonalFilesResponse {
    personalFileInfos: PersonalFileInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetUserProfileByIdRequest {
    id: number;
}

export interface GetUserProfileByIdResponse {
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: string | null;
    email: string;
    phone: string | null;
}

export interface UpdateUserProfileRequestDto {
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    dateOfBirth: string | null;
    email: string | null;
    phone: string | null;
}