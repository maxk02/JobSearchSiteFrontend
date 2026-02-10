import fetchData from "@/lib/api/fetchData";
import {
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
    AddCompanyEmployeeInvitationRequest,
    GetCompanyBalanceTransactionsResponse,
    GetCompanyBalanceTransactionsRequest,
    GetCompanyBalanceResponse,
    GetJobApplicationTagsRequest,
    GetJobApplicationTagsResponse, AcceptCompanyEmployeeInvitationRequest, GetCompanyEmployeeInvitationRequest,
    GetCompanyEmployeeInvitationResponse, SendCompanyEmployeeInvitationRequest
} from "@/lib/api/companies/companiesApiInterfaces";


export const addCompany = async (req: AddCompanyRequest, avatarFile: File | null) => {

    const form = new FormData();

    form.append("request", JSON.stringify(req));

    if (avatarFile) {
        form.append("file", avatarFile);
    }

    return await fetchData<FormData, AddCompanyResponse>("/companies", "POST", form, {});
};

export const acceptCompanyEmployeeInvitation = async (id: number, req: AcceptCompanyEmployeeInvitationRequest) => {
    return await fetchData<AcceptCompanyEmployeeInvitationRequest, unknown>(`/companies/${id}/management/employees`, "POST", req);
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

export const getCompanyBalance = async (id: number) => {
    return await fetchData<unknown, GetCompanyBalanceResponse>(`/companies/${id}/management/balance`, "GET");
};

export const getCompanyBalanceTransactions = async (id: number, req: GetCompanyBalanceTransactionsRequest) => {
    return await fetchData<GetCompanyBalanceTransactionsRequest, GetCompanyBalanceTransactionsResponse>(`/companies/${id}/management/balance/transactions`, "GET", req);
};

export const getCompanyEmployeeInvitation = async (id: number, req: GetCompanyEmployeeInvitationRequest) => {
    return await fetchData<GetCompanyEmployeeInvitationRequest, GetCompanyEmployeeInvitationResponse>(`/companies/${id}/management/employees/invitation`, "GET", req);
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

export const getJobApplicationTags = async (id: number, req: GetJobApplicationTagsRequest) => {
    return await fetchData<GetJobApplicationTagsRequest, GetJobApplicationTagsResponse>(`/companies/${id}/management/job-application-tags`, "GET", req);
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

export const sendCompanyEmployeeInvitation = async (id: number, req: SendCompanyEmployeeInvitationRequest) => {
    return await fetchData<SendCompanyEmployeeInvitationRequest, unknown>(`/companies/${id}/management/employees/invitations`, "POST", req);
};

export const updateCompany = async (id: number, req: UpdateCompanyRequest) => {
    return await fetchData<UpdateCompanyRequest>(`/companies/${id}`, "PATCH", req);
};