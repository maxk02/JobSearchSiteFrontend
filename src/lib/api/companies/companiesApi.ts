import fetchData from "@/lib/api/fetchData";
import {
    AddCompanyRequest,
    AddCompanyResponse,
    GetCompaniesRequest,
    GetCompaniesResponse,
    GetCompanyByIdResponse,
    UpdateCompanyRequestDto
} from "@/lib/api/companies/companiesApiInterfaces";

export const addCompany = async (req: AddCompanyRequest) => {
    return await fetchData<AddCompanyRequest, AddCompanyResponse>("/companies", "POST", req);
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