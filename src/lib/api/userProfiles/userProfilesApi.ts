import fetchData from "@/lib/api/fetchData";
import {
    AddUserProfileRequest,
    GetBookmarkedCompaniesResponse,
    GetBookmarkedJobsResponse,
    GetJobApplicationsResponse,
    GetPersonalFilesResponse,
    GetUserProfileResponse,
    UpdateUserProfileRequestDto
} from "./userProfilesApiInterfaces";
import { PaginationSpec } from "@/lib/api/sharedDtos";


export const addCompanyBookmark = async (companyId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/companies/${companyId}`, "POST");
};

export const addJobBookmark = async (jobId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/jobs/${jobId}`, "POST");
};

export const addUserProfile = async (req: AddUserProfileRequest) => {
    return await fetchData<AddUserProfileRequest>("/user", "POST", req);
};

export const deleteCompanyBookmark = async (companyId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/companies/${companyId}`, "DELETE");
};

export const deleteJobBookmark = async (jobId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/jobs/${jobId}`, "DELETE");
};

export const getBookmarkedCompanies = async (paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetBookmarkedCompaniesResponse>(
        `/user/bookmarks/companies`,
        "GET",
        paginationSpec
    );
};

export const getBookmarkedJobs = async (paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetBookmarkedJobsResponse>(
        `/user/bookmarks/jobs`,
        "GET",
        paginationSpec
    );
};

export const getJobApplications = async (paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetJobApplicationsResponse>(
        `/user/job-applications`,
        "GET",
        paginationSpec
    );
};

export const getPersonalFiles = async (paginationSpec: PaginationSpec) => {
    return await fetchData<PaginationSpec, GetPersonalFilesResponse>(
        `/user/personal-files`,
        "GET",
        paginationSpec
    );
};

export const getUserProfile = async () => {
    return await fetchData<unknown, GetUserProfileResponse>(`/user`, "GET");
};

export const updateUserProfile = async (req: UpdateUserProfileRequestDto) => {
    return await fetchData<UpdateUserProfileRequestDto>(`/user`, "PATCH", req);
};