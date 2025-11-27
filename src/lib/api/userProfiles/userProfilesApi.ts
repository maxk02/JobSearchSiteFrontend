import fetchData from "@/lib/api/fetchData";
import {
    AddUserProfileRequest,
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


export const addCompanyBookmark = async (companyId: number) => {
    return await fetchData<unknown>(`/users/current/bookmarks/companies/${companyId}`, "POST");
};

export const addJobBookmark = async (jobId: number) => {
    return await fetchData<unknown>(`/users/current/bookmarks/jobs/${jobId}`, "POST");
};

export const addUserProfile = async (req: AddUserProfileRequest, avatarFile: File | null = null) => {

    const formData = new FormData();

    formData.append("request", JSON.stringify(req));

    formData.append("request", JSON.stringify(req));
    if (avatarFile) {
        formData.append("file", avatarFile);
    }

    return await fetchData<FormData>("/users", "POST", formData, {});
};

export const deleteCompanyBookmark = async (companyId: number) => {
    return await fetchData<unknown>(`/users/current/bookmarks/companies/${companyId}`, "DELETE");
};

export const deleteJobBookmark = async (jobId: number) => {
    return await fetchData<unknown>(`/users/current/bookmarks/jobs/${jobId}`, "DELETE");
};

// export const getBookmarkedCompanies = async (page: number, size: number) => {
//     return await fetchData<GetBookmarkedCompaniesRequest, GetBookmarkedCompaniesResponse>(
//         `/users/current/bookmarks/companies`,
//         "GET",
//         { page: page, size: size }
//     );
// };

export const getBookmarkedJobs = async (page: number, size: number) => {
    return await fetchData<GetBookmarkedJobsRequest, GetBookmarkedJobsResponse>(
        `/users/current/bookmarks/jobs`,
        "GET",
        { page: page, size: size }
    );
};

export const getJobApplications = async (statusId: number | null, page: number, size: number) => {
    return await fetchData<GetJobApplicationsRequest, GetJobApplicationsResponse>(
        `/users/current/job-applications`,
        "GET",
        { statusId: statusId, page: page, size: size }
    );
};

export const getPersonalFiles = async () => {
    return await fetchData<GetPersonalFilesRequest, GetPersonalFilesResponse>(
        `/users/current/personal-files`,
        "GET"
    );
};

export const getUserProfile = async () => {
    return await fetchData<unknown, GetUserProfileResponse>(`/users/current`, "GET");
};

export const updateUserProfile = async (req: UpdateUserProfileRequest) => {
    return await fetchData<UpdateUserProfileRequest>(`/users/current`, "PATCH", req);
};

export const uploadAvatar = async (formData: FormData) => {
    return await fetchData<FormData, UploadAvatarResponse>(`/users/current/avatar`, "PUT", formData, { "Content-Type": "multipart/form-data" });
};