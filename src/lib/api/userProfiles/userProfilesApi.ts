import fetchData from "@/lib/api/fetchData";
import {
    AddUserProfileRequest,
    GetBookmarkedCompaniesResponse,
    GetBookmarkedJobsResponse,
    GetJobApplicationsResponse,
    GetPersonalFilesResponse,
    GetUserProfileByIdResponse,
    UpdateUserProfileRequestDto
} from "./userProfilesApiInterfaces";
import { PaginationSpec } from "@/lib/api/sharedDtos";


export const addCompanyBookmark = async (userId: number, companyId: number) => {
    return await fetchData<unknown>(`/user-profiles/${userId}/bookmarks/companies/${companyId}`, "POST");
};

export const addJobBookmark = async (userId: number, jobId: number) => {
    return await fetchData<unknown>(`/user-profiles/${userId}/bookmarks/jobs/${jobId}`, "POST");
};

export const addUserProfile = async (req: AddUserProfileRequest) => {
    return await fetchData<AddUserProfileRequest>("/user-profiles", "POST", req);
};

export const deleteCompanyBookmark = async (userId: number, companyId: number) => {
    return await fetchData<unknown>(`/user-profiles/${userId}/bookmarks/companies/${companyId}`, "DELETE");
};

export const deleteJobBookmark = async (userId: number, jobId: number) => {
    return await fetchData<unknown>(`/user-profiles/${userId}/bookmarks/jobs/${jobId}`, "DELETE");
};

export const getBookmarkedCompanies = async (id: number, paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetBookmarkedCompaniesResponse>(
        `/user-profiles/${id}/bookmarks/companies`,
        "GET",
        paginationSpec
    );
};

export const getBookmarkedJobs = async (id: number, paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetBookmarkedJobsResponse>(
        `/user-profiles/${id}/bookmarks/jobs`,
        "GET",
        paginationSpec
    );
};

export const getJobApplications = async (id: number, paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetJobApplicationsResponse>(
        `/user-profiles/${id}/job-applications`,
        "GET",
        paginationSpec
    );
};

export const getPersonalFiles = async (id: number, paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetPersonalFilesResponse>(
        `/user-profiles/${id}/personal-files`,
        "GET",
        paginationSpec
    );
};

export const getUserProfileById = async (id: number) => {
    return await fetchData<unknown, GetUserProfileByIdResponse>(`/user-profiles/${id}`, "GET");
};

export const updateUserProfile = async (id: number, req: UpdateUserProfileRequestDto) => {
    return await fetchData<UpdateUserProfileRequestDto>(`/user-profiles/${id}`, "PATCH", req);
};