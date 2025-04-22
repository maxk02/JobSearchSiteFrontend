import fetchData from "@/lib/api/fetchData";
import {
    AddCompanyEmployeeRequest,
    AddCompanyEmployeeResponse,
    AddCompanyRequest,
    AddCompanyResponse,
    GetCompanyEmployeesRequest,
    GetCompanyEmployeesResponse,
    GetCompanyJobsRequest,
    GetCompanyJobsResponse,
    GetCompanyManagementDtoResponse,
    SearchCompanyJobFoldersRequest,
    SearchCompanyJobFoldersResponse, GetCompanyManagementJobsRequest, GetCompanyManagementJobsResponse,
    GetCompanyResponse,
    GetLastJobFoldersResponse,
    GetLastJobsResponse,
    UpdateCompanyRequestDto, GetCompanySharedFoldersResponse, GetCompanySharedFolderChildrenResponse
} from "@/lib/api/companies/companiesApiInterfaces";
import {UploadAvatarResponse} from "@/lib/api/userProfiles/userProfilesApiInterfaces";


export const addCompany = async (req: AddCompanyRequest, file: File | null) => {

    const form = new FormData();

    form.append("request", JSON.stringify(req));

    if (file) {
        form.append("file", file);
    }

    return await fetchData<FormData, AddCompanyResponse>("/companies", "POST", form, {});
};

export const deleteCompany = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}`, "DELETE");
};

export const updateCompany = async (id: number, req: UpdateCompanyRequestDto) => {
    return await fetchData<UpdateCompanyRequestDto>(`/companies/${id}`, "PATCH", req);
};

export const getCompany = async (id: number) => {
    return await fetchData<unknown, GetCompanyResponse>(`/companies/${id}`, "GET");
};

export const getCompanyManagementDto = async (id: number) => {
    return await fetchData<unknown, GetCompanyManagementDtoResponse>(`/companies/management/${id}`, "GET");
};

export const getCompanyJobs = async (id: number, req: GetCompanyJobsRequest) => {
    return await fetchData<GetCompanyJobsRequest, GetCompanyJobsResponse>(`/companies/${id}/jobs`, "GET", req);
};

export const uploadAvatar = async (id: number, formData: FormData) => {
    return await fetchData<FormData, UploadAvatarResponse>(`/companies/${id}/management/avatar`, "PUT", formData, { "Content-Type": "multipart/form-data" });
};

export const getCompanyEmployees = async (id: number, req: GetCompanyEmployeesRequest) => {
    return await fetchData<GetCompanyEmployeesRequest, GetCompanyEmployeesResponse>(`/companies/${id}/management/users`, "GET", req);
};

export const addCompanyEmployee = async (id: number, req: AddCompanyEmployeeRequest) => {
    return await fetchData<AddCompanyEmployeeRequest, AddCompanyEmployeeResponse>(`/companies/${id}/management/users`, "POST", req);
};

export const deleteCompanyEmployee = async (id: number, userId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/users/${userId}`, "DELETE");
};

export const getLastJobs = async (id: number) => {
    return await fetchData<unknown, GetLastJobsResponse>(`/companies/${id}/management/last-jobs`, "GET");
};

export const deleteLastJob = async (id: number, jobId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs/${jobId}`, "DELETE");
};

export const deleteAllLastJobs = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs`, "DELETE");
};

export const getLastJobFolders = async (id: number) => {
    return await fetchData<unknown, GetLastJobFoldersResponse>(`/companies/${id}/management/last-job-folders`, "GET");
};

export const deleteLastJobFolder = async (id: number, folderId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-job-folders/${folderId}`, "DELETE");
};

export const deleteAllLastJobFolders = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-job-folders`, "DELETE");
};

export const searchCompanyJobFolders = async (id: number, req: SearchCompanyJobFoldersRequest) => {
    return await fetchData<SearchCompanyJobFoldersRequest, SearchCompanyJobFoldersResponse>(`/companies/${id}/management/job-folders/search`, "GET", {...req});
};

export const searchCompanyJobs = async (id: number, req: GetCompanyManagementJobsRequest) => {
    return await fetchData<GetCompanyManagementJobsRequest, GetCompanyManagementJobsResponse>(`/companies/${id}/management/jobs/search`, "GET", {...req});
};

export const getCompanySharedJobFolders = async (id: number) => {
    return await fetchData<unknown, GetCompanySharedFoldersResponse>(`/companies/${id}/management/job-folders`, "GET");
};

export const getCompanySharedJobFolderChildren = async (id: number, parentFolderId: number) => {
    return await fetchData<unknown, GetCompanySharedFolderChildrenResponse>(`/companies/${id}/management/job-folders/${parentFolderId}`, "GET");
};