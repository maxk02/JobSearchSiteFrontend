import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {CompanyManagementDetailedDto} from "@/lib/api/companies/companiesApiDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";



export interface AddUserProfileRequest {
    firstName: string;
    lastName: string;
    phone: string | null;
}

export interface GetBookmarkedCompaniesRequest {
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedCompaniesResponse {
    companyInfos: CompanyManagementDetailedDto[];
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
    avatarLink: string | null;
    isReceivingApplicationStatusUpdates: boolean;
}

export interface UpdateUserProfileRequestDto {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    isReceivingApplicationStatusUpdates: boolean;
}

export interface UploadAvatarResponse {
    link: string;
}