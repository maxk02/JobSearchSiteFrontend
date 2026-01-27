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
    GetCompanyResponse,
    GetCompanyLastVisitedJobsResponse,
    UpdateCompanyRequest, SearchCompanySharedJobsRequest, SearchCompanySharedJobsResponse,
    GetCompanyJobManagementCardDtosRequest, GetCompanyJobManagementCardDtosResponse,
    AddCompanyEmployeeInvitationRequest
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
    return await fetchData<AddCompanyEmployeeRequest, AddCompanyEmployeeResponse>(`/companies/${id}/management/employees`, "POST", req);
};

export const addCompanyEmployeeInvitation = async (id: number, req: AddCompanyEmployeeInvitationRequest) => {
    return await fetchData<AddCompanyEmployeeInvitationRequest, unknown>(`/companies/${id}/management/employees/invitations`, "POST", req);
};

export const deleteCompany = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}`, "DELETE");
};

export const getCompany = async (id: number) => {
    return await fetchData<unknown, GetCompanyResponse>(`/companies/${id}`, "GET");
};

export const getCompanyEmployees = async (id: number, req: GetCompanyEmployeesRequest) => {
    return await fetchData<GetCompanyEmployeesRequest, GetCompanyEmployeesResponse>(`/companies/${id}/management/employees`, "GET", req);
};

export const getCompanyJobManagementCardDtos = async (id: number, req: GetCompanyJobManagementCardDtosRequest) => {
    return await fetchData<GetCompanyJobManagementCardDtosRequest, GetCompanyJobManagementCardDtosResponse>(`/companies/${id}/management/jobs`, "GET", req);
};

export const getCompanyJobs = async (id: number, req: GetCompanyJobsRequest) => {
    return await fetchData<GetCompanyJobsRequest, GetCompanyJobsResponse>(`/companies/${id}/jobs`, "GET", req);
};

export const getCompanyLastVisitedJobs = async (id: number) => {
    return await fetchData<unknown, GetCompanyLastVisitedJobsResponse>(`/companies/${id}/management/last-visited-jobs`, "GET");
};

export const getCompanyManagementNavbarDto = async (id: number) => {
    return await fetchData<unknown, GetCompanyManagementNavbarDtoResponse>(`/companies/${id}/management`, "GET");
};

export const removeCompanyAllLastVisitedJobs = async (id: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs`, "DELETE");
};

export const removeCompanyLastVisitedJob = async (id: number, jobId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/last-jobs/${jobId}`, "DELETE");
};

export const removeCompanyEmployee = async (id: number, userId: number) => {
    return await fetchData<unknown>(`/companies/${id}/management/employees/${userId}`, "DELETE");
};

export const searchCompanySharedJobs = async (id: number, req: SearchCompanySharedJobsRequest) => {
    return await fetchData<SearchCompanySharedJobsRequest, SearchCompanySharedJobsResponse>(`/companies/${id}/management/jobs/search`, "GET", {...req});
};

export const updateCompany = async (id: number, req: UpdateCompanyRequest) => {
    return await fetchData<UpdateCompanyRequest>(`/companies/${id}`, "PATCH", req);
};