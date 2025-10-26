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
    GetCompanyManagementNavbarDtoResponse,
    SearchCompanySharedFoldersRequest,
    SearchCompanySharedFoldersResponse, GetCompanyManagementJobsRequest, GetCompanyManagementJobsResponse,
    GetCompanyResponse,
    GetCompanyLastVisitedFoldersResponse,
    GetCompanyLastVisitedJobsResponse,
    UpdateCompanyRequestDto, GetCompanySharedFoldersResponse, GetCompanySharedFolderChildrenResponse
} from "@/lib/api/companies/companiesApiInterfaces";


export const addCompany = async (req: AddCompanyRequest, avatarFile: File | null) => {

    const form = new FormData();

    form.append("request", JSON.stringify(req));

    if (avatarFile) {
        form.append("file", avatarFile);
    }

    return await fetchData<FormData, AddCompanyResponse>("/companies", "POST", form, {});
};

export const addCompanyEmployee = async (id: number, req: AddCompanyEmployeeRequest) => {
    return await fetchData<AddCompanyEmployeeRequest, AddCompanyEmployeeResponse>(`/companies/${id}/management/users`, "POST", req);
};

export const deleteCompany = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}`, "DELETE");
};

export const getCompany = async (id: number) => {
    return await fetchData<unknown, GetCompanyResponse>(`/companies/${id}`, "GET");
};

export const getCompanyEmployees = async (id: number, req: GetCompanyEmployeesRequest) => {
    return await fetchData<GetCompanyEmployeesRequest, GetCompanyEmployeesResponse>(`/companies/${id}/management/users`, "GET", req);
};

export const getCompanyJobs = async (id: number, req: GetCompanyJobsRequest) => {
    return await fetchData<GetCompanyJobsRequest, GetCompanyJobsResponse>(`/companies/${id}/jobs`, "GET", req);
};

export const getCompanyLastVisitedFolders = async (id: number) => {
    return await fetchData<unknown, GetCompanyLastVisitedFoldersResponse>(`/companies/${id}/management/last-visited-folders`, "GET");
};

export const getCompanyLastVisitedJobs = async (id: number) => {
    return await fetchData<unknown, GetCompanyLastVisitedJobsResponse>(`/companies/${id}/management/last-visited-jobs`, "GET");
};

export const getCompanyManagementNavbarDto = async (id: number) => {
    return await fetchData<unknown, GetCompanyManagementNavbarDtoResponse>(`/companies/${id}/management`, "GET");
};

export const getCompanySharedFolders = async (id: number) => {
    return await fetchData<unknown, GetCompanySharedFoldersResponse>(`/companies/${id}/management/job-folders`, "GET");
};

export const getCompanySharedFolderChildren = async (id: number, parentFolderId: number) => {
    return await fetchData<unknown, GetCompanySharedFolderChildrenResponse>(`/companies/${id}/management/job-folders/${parentFolderId}`, "GET");
};

export const removeCompanyAllLastVisitedFolders = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-visited-folders`, "DELETE");
};

export const removeCompanyLastVisitedFolder = async (id: number, folderId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-visited-folders/${folderId}`, "DELETE");
};

export const removeCompanyAllLastVisitedJobs = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs`, "DELETE");
};

export const removeCompanyLastVisitedJob = async (id: number, jobId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs/${jobId}`, "DELETE");
};

export const removeCompanyEmployee = async (id: number, userId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/users/${userId}`, "DELETE");
};

export const searchCompanySharedFolders = async (id: number, req: SearchCompanySharedFoldersRequest) => {
    return await fetchData<SearchCompanySharedFoldersRequest, SearchCompanySharedFoldersResponse>(`/companies/${id}/management/job-folders/search`, "GET", {...req});
};

export const searchCompanySharedJobs = async (id: number, req: GetCompanyManagementJobsRequest) => {
    return await fetchData<GetCompanyManagementJobsRequest, GetCompanyManagementJobsResponse>(`/companies/${id}/management/jobs/search`, "GET", {...req});
};

export const updateCompany = async (id: number, req: UpdateCompanyRequestDto) => {
    return await fetchData<UpdateCompanyRequestDto>(`/companies/${id}`, "PATCH", req);
};