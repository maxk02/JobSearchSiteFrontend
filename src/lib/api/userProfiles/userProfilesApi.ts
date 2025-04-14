import fetchData from "@/lib/api/fetchData";
import {
    AddUserProfileRequest, GetBookmarkedCompaniesRequest,
    GetBookmarkedCompaniesResponse, GetBookmarkedJobsRequest,
    GetBookmarkedJobsResponse, GetJobApplicationsRequest,
    GetJobApplicationsResponse, GetPersonalFilesRequest,
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
    return await fetchData<GetBookmarkedCompaniesRequest, GetBookmarkedCompaniesResponse>(
        `/user/bookmarks/companies`,
        "GET",
        { paginationSpec: paginationSpec }
    );
};

export const getBookmarkedJobs = async (paginationSpec: PaginationSpec) => {
    return await fetchData<GetBookmarkedJobsRequest, GetBookmarkedJobsResponse>(
        `/user/bookmarks/jobs`,
        "GET",
        { paginationSpec: paginationSpec }
    );
};

export const getJobApplications = async (statusId: number | null, paginationSpec: PaginationSpec) => {
    return await fetchData<GetJobApplicationsRequest, GetJobApplicationsResponse>(
        `/user/job-applications`,
        "GET",
        { statusId: statusId, paginationSpec: paginationSpec }
    );
};

export const getPersonalFiles = async (paginationSpec: PaginationSpec) => {
    return await fetchData<GetPersonalFilesRequest, GetPersonalFilesResponse>(
        `/user/personal-files`,
        "GET",
        { paginationSpec: paginationSpec }
    );
};

export const getUserProfile = async () => {
    return await fetchData<unknown, GetUserProfileResponse>(`/user`, "GET");
};

export const updateUserProfile = async (req: UpdateUserProfileRequestDto) => {
    return await fetchData<UpdateUserProfileRequestDto>(`/user`, "PATCH", req);
};