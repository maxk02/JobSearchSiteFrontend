import api from "@/lib/api/httpClient";
import {PaginationResponse, PaginationSpec} from "@/lib/api/_sharedInterfaces";
import {CompanyDto, JobApplicationInUserProfileDto, JobInfoDto, PersonalFileInfoDto} from "@/lib/api/_dtos";


//
export interface AddCompanyBookmarkRequest {
    userId: number;
    companyId: number;
}

export const addCompanyBookmark = async (req: AddCompanyBookmarkRequest) => {
    const response = await api.post(
        `/user-profiles/${req.userId}/bookmarks/companies/${req.companyId}`
    );
    return response.data;
};


//
export interface AddJobBookmarkRequest {
    userId: number;
    jobId: number;
}

export const addJobBookmark = async (req: AddJobBookmarkRequest) => {
    const response = await api.post(
        `/user-profiles/${req.userId}/bookmarks/jobs/${req.jobId}`
    );
    return response.data;
};


//
export interface AddUserProfileRequest {
    accountId: number;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: string | null;
    email: string;
    phone: string | null;
}

export interface AddUserProfileResponse {
    id: number;
}

export const addUserProfile = async (req: AddUserProfileRequest) => {
    const response = await api.post("/user-profiles", req);
    return response.data as AddUserProfileResponse;
};


//
export interface DeleteCompanyBookmarkRequest {
    userId: number;
    companyId: number;
}

export const deleteCompanyBookmark = async (req: DeleteCompanyBookmarkRequest) => {
    const response = await api.delete(
        `/user-profiles/${req.userId}/bookmarks/companies/${req.companyId}`
    );
    return response.data;
};


//
export interface DeleteJobBookmarkRequest {
    userId: number;
    jobId: number;
}

export const deleteJobBookmark = async (req: DeleteJobBookmarkRequest) => {
    const response = await api.delete(
        `/user-profiles/${req.userId}/bookmarks/jobs/${req.jobId}`
    );
    return response.data;
};


//
export interface GetBookmarkedCompaniesRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedCompaniesResponse {
    companyInfoCardDtos: CompanyDto[];
    paginationResponse: PaginationResponse;
}

export const getBookmarkedCompanies = async (req: GetBookmarkedCompaniesRequest) => {
    const response = await api.get(`/user-profiles/${req.userId}/bookmarks/companies`, {
        params: req.paginationSpec,
    });
    return response.data as GetBookmarkedCompaniesResponse;
};


//
export interface GetBookmarkedJobsRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetBookmarkedJobsResponse {
    jobInfoCardDtos: JobInfoDto[];
    paginationResponse: PaginationResponse;
}

export const getBookmarkedJobs = async (req: GetBookmarkedJobsRequest) => {
    const response = await api.get(`/user-profiles/${req.userId}/bookmarks/jobs`, {
        params: req.paginationSpec,
    });
    return response.data as GetBookmarkedJobsResponse;
};


//
export interface GetJobApplicationsForUserRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetJobApplicationsForUserResponse {
    jobApplicationDtos: JobApplicationInUserProfileDto[];
    paginationResponse: PaginationResponse;
}

export const getJobApplicationsForUser = async (req: GetJobApplicationsForUserRequest) => {
    const response = await api.get(`/user-profiles/${req.userId}/job-applications`, {
        params: req.paginationSpec,
    });
    return response.data as GetJobApplicationsForUserResponse;
};


//
export interface GetPersonalFilesRequest {
    userId: number;
    paginationSpec: PaginationSpec;
}

export interface GetPersonalFilesResponse {
    personalFileInfoCardDtos: PersonalFileInfoDto[];
    paginationResponse: PaginationResponse;
}

export const getPersonalFiles = async (req: GetPersonalFilesRequest) => {
    const response = await api.get(`/user-profiles/${req.userId}/personal-files`, {
        params: req.paginationSpec,
    });
    return response.data as GetPersonalFilesResponse;
};


//
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

export const getUserProfileById = async (req: GetUserProfileByIdRequest) => {
    const response = await api.get(`/user-profiles/${req.id}`);
    return response.data as GetUserProfileByIdResponse;
};


//
export interface UpdateUserProfileRequest {
    id: number;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    dateOfBirth: string | null;
    email: string | null;
    phone: string | null;
}

export const updateUserProfile = async (req: UpdateUserProfileRequest) => {
    const response = await api.patch("/user-profiles", req);
    return response.data;
};