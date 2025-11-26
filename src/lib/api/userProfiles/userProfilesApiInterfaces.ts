import {PaginationResponse} from "@/lib/api/sharedDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";


export interface AddUserProfileRequest {
    firstName: string;
    lastName: string;
    phone: string | null;
}

export interface AddUserProfileResponse {
    id: number;
}

// export interface GetBookmarkedCompaniesRequest {
//     paginationSpec: PaginationSpec;
// }
//
// export interface GetBookmarkedCompaniesResponse {
//     companyInfos: CompanyManagementDetailedDto[];
//     paginationResponse: PaginationResponse;
// } //todo check

export interface GetBookmarkedJobsRequest {
    page: number;
    size: number;
}

export interface GetBookmarkedJobsResponse {
    jobInfos: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobApplicationsRequest {
    statusId: number | null;
    page: number;
    size: number;
}

export interface GetJobApplicationsResponse {
    jobApplications: JobApplicationInUserProfileDto[];
    paginationResponse: PaginationResponse;
}

export interface GetPersonalFilesRequest {
    page: number;
    size: number;
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

export interface UpdateUserProfileRequest {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    isReceivingApplicationStatusUpdates: boolean | null;
}

export interface UploadAvatarResponse {
    avatarId: number; //todo check
}