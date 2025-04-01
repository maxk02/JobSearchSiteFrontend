import api from "@/lib/api/httpClient";
import {
    AddUserProfileRequest,
    GetBookmarkedCompaniesResponse,
    GetBookmarkedJobsResponse,
    GetJobApplicationsResponse,
    GetPersonalFilesResponse,
    GetUserProfileByIdResponse,
    UpdateUserProfileRequestDto
} from "./userProfilesApiInterfaces";
import {PaginationSpec} from "@/lib/api/sharedDtos";


export const addCompanyBookmark = async (userId: number, companyId: number) => {
    const response = await api.post(
        `/user-profiles/${userId}/bookmarks/companies/${companyId}`
    );
    return response.data;
};


export const addJobBookmark = async (userId: number, jobId: number) => {
    const response = await api.post(
        `/user-profiles/${userId}/bookmarks/jobs/${jobId}`
    );
    return response.data;
};


export const addUserProfile = async (req: AddUserProfileRequest) => {
    const response = await api.post("/user-profiles", req);
    return response.data;
};


export const deleteCompanyBookmark = async (userId: number, companyId: number) => {
    const response = await api.delete(
        `/user-profiles/${userId}/bookmarks/companies/${companyId}`
    );
    return response.data;
};


export const deleteJobBookmark = async (userId: number, jobId: number) => {
    const response = await api.delete(
        `/user-profiles/${userId}/bookmarks/jobs/${jobId}`
    );
    return response.data;
};


export const getBookmarkedCompanies =
    async (id: number, paginationSpec: PaginationSpec) => {
        const response = await api.get(`/user-profiles/${id}/bookmarks/companies`, {params: paginationSpec});
        return response.data as GetBookmarkedCompaniesResponse;
    };


export const getBookmarkedJobs =
    async (id: number, paginationSpec: PaginationSpec) => {
        const response = await api.get(`/user-profiles/${id}/bookmarks/jobs`, {params: paginationSpec});
        return response.data as GetBookmarkedJobsResponse;
    };


export const getJobApplications = async (id: number, paginationSpec: PaginationSpec) => {
    const response = await api.get(`/user-profiles/${id}/job-applications`, {params: paginationSpec});
    return response.data as GetJobApplicationsResponse;
};


export const getPersonalFiles = async (id: number, paginationSpec: PaginationSpec) => {
    const response = await api.get(`/user-profiles/${id}/personal-files`, {params: paginationSpec});
    return response.data as GetPersonalFilesResponse;
};


export const getUserProfileById = async (id: number) => {
    const response = await api.get(`/user-profiles/${id}`);
    return response.data as GetUserProfileByIdResponse;
};


export const updateUserProfile = async (id: number, req: UpdateUserProfileRequestDto) => {
    const response = await api.patch(`/user-profiles/${id}`, {params: req});
    return response.data;
};