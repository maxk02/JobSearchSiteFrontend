import fetchData from "@/lib/api/fetchData";
import {
    AddCompanyResponse,
    GetCompaniesRequest,
    GetCompaniesResponse,
    GetCompanyByIdResponse,
    GetCompanyJobsRequest,
    GetCompanyJobsResponse,
    UpdateCompanyRequestDto
} from "@/lib/api/companies/companiesApiInterfaces";
import {UploadAvatarResponse} from "@/lib/api/userProfiles/userProfilesApiInterfaces";


export const addCompany = async (form: FormData) => {
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

export const getCompanyById = async (id: number) => {
    return await fetchData<unknown, GetCompanyByIdResponse>(`/companies/${id}`, "GET");
};

//
export const getCompanyJobs = async (id: number, req: GetCompanyJobsRequest) => {
    return await fetchData<GetCompanyJobsRequest, GetCompanyJobsResponse>(`company/${id}/jobs`, "GET", req);
};

export const uploadAvatar = async (formData: FormData) => {
    return await fetchData<FormData, UploadAvatarResponse>(`/company/avatar`, "PUT", formData, { "Content-Type": "multipart/form-data" });
};