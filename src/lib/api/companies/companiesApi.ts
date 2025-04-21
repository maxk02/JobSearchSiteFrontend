import fetchData from "@/lib/api/fetchData";
import {
    AddCompanyEmployeeRequest,
    AddCompanyEmployeeResponse,
    AddCompanyRequest,
    AddCompanyResponse,
    GetCompaniesRequest,
    GetCompaniesResponse,
    GetCompanyEmployeesRequest,
    GetCompanyEmployeesResponse,
    GetCompanyJobsRequest,
    GetCompanyJobsResponse,
    GetCompanyManagementDtoResponse,
    GetCompanyResponse, GetLastFoldersResponse, GetLastJobsResponse,
    UpdateCompanyRequestDto
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

export const getCompanies = async (req: GetCompaniesRequest) => {
    return await fetchData<GetCompaniesRequest, GetCompaniesResponse>("/companies", "GET", req);
};

export const getCompany = async (id: number) => {
    return await fetchData<unknown, GetCompanyResponse>(`/companies/${id}`, "GET");
};

export const getCompanyManagementDto = async (id: number) => {
    return await fetchData<unknown, GetCompanyManagementDtoResponse>(`/companies/${id}?type=management`, "GET");
};

export const getCompanyJobs = async (id: number, req: GetCompanyJobsRequest) => {
    return await fetchData<GetCompanyJobsRequest, GetCompanyJobsResponse>(`company/${id}/jobs`, "GET", req);
};

export const uploadAvatar = async (id: number, formData: FormData) => {
    return await fetchData<FormData, UploadAvatarResponse>(`/company/${id}/avatar`, "PUT", formData, { "Content-Type": "multipart/form-data" });
};

export const getCompanyEmployees = async (id: number, req: GetCompanyEmployeesRequest) => {
    return await fetchData<GetCompanyEmployeesRequest, GetCompanyEmployeesResponse>(`/company/${id}/users`, "GET", req);
};

export const addCompanyEmployee = async (id: number, req: AddCompanyEmployeeRequest) => {
    return await fetchData<AddCompanyEmployeeRequest, AddCompanyEmployeeResponse>(`/company/${id}/users`, "POST", req);
};

export const deleteCompanyEmployee = async (id: number, userId: number) => {
    return await fetchData<unknown>(`/company/${id}/users/${userId}`, "DELETE");
};

export const getLastJobs = async (id: number) => {
    return await fetchData<unknown, GetLastJobsResponse>(`company/${id}/last-jobs`, "GET");
};

export const deleteLastJob = async (id: number, jobId: number) => {
    return await fetchData<unknown>(`company/${id}/last-jobs/${jobId}`, "DELETE");
};

export const deleteAllLastJobs = async (id: number) => {
    return await fetchData<unknown>(`company/${id}/last-jobs`, "DELETE");
};

export const getLastFolders = async (id: number) => {
    return await fetchData<unknown, GetLastFoldersResponse>(`company/${id}/last-folders`, "GET");
};

export const deleteLastFolder = async (id: number, folderId: number) => {
    return await fetchData<unknown>(`company/${id}/last-folders/${folderId}`, "DELETE");
};

export const deleteAllLastFolders = async (id: number) => {
    return await fetchData<unknown>(`company/${id}/last-folders`, "DELETE");
};