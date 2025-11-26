import fetchData from "@/lib/api/fetchData";
import {
    AddUserProfileRequest,
    GetBookmarkedCompaniesRequest,
    GetBookmarkedCompaniesResponse,
    GetBookmarkedJobsRequest,
    GetBookmarkedJobsResponse,
    GetJobApplicationsRequest,
    GetJobApplicationsResponse,
    GetPersonalFilesRequest,
    GetPersonalFilesResponse,
    GetUserProfileResponse,
    UpdateUserProfileRequest,
    UploadAvatarResponse
} from "./userProfilesApiInterfaces";
import {PaginationSpec} from "@/lib/api/sharedDtos";


export const addCompanyBookmark = async (companyId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/companies/${companyId}`, "POST");
};

export const addJobBookmark = async (jobId: number) => {
    return await fetchData<unknown>(`/user/bookmarks/jobs/${jobId}`, "POST");
};

export const addUserProfile = async (req: AddUserProfileRequest, avatarFile: File | null = null) => {

    const formData = new FormData();

    formData.append("request", JSON.stringify(req));

    formData.append("request", JSON.stringify(req));
    if (avatarFile) {
        formData.append("file", avatarFile);
    }

    return await fetchData<FormData>("/user", "POST", formData, {});
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

export const getPersonalFiles = async () => {
    return await fetchData<GetPersonalFilesRequest, GetPersonalFilesResponse>(
        `/user/personal-files`,
        "GET"
    );
};

export const getUserProfile = async () => {
    return await fetchData<unknown, GetUserProfileResponse>(`/user`, "GET");
};

export const updateUserProfile = async (req: UpdateUserProfileRequest) => {
    return await fetchData<UpdateUserProfileRequest>(`/user`, "PATCH", req);
};

export const uploadAvatar = async (formData: FormData) => {
    return await fetchData<FormData, UploadAvatarResponse>(`/user/avatar`, "PUT", formData, { "Content-Type": "multipart/form-data" });
};