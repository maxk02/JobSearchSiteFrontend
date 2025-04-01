import api from "@/lib/api/httpClient"
import {
    AddCompanyRequest,
    AddCompanyResponse,
    GetCompaniesRequest,
    GetCompaniesResponse,
    GetCompanyByIdResponse,
    UpdateCompanyRequestDto
} from "@/lib/api/companies/companiesApiInterfaces";


export const addCompany = async (req: AddCompanyRequest) => {
    const response = await api.post("/companies", req);
    return response.data as AddCompanyResponse;
};

export const deleteCompany = async (id: number) => {
    const response = await api.delete(`/companies/${id}`);
    return response.data;
};

export const updateCompany = async (id: number, req: UpdateCompanyRequestDto) => {
    const response = await api.patch(`/companies/${id}`, { params: req });
    return response.data;
};

export const getCompanies = async (req: GetCompaniesRequest) => {
    const response = await api.get("/companies", { params: req });
    return response.data as GetCompaniesResponse;
};

export const getCompanyById = async (id: number) => {
    const response = await api.get(`/companies/${id}`);
    return response.data as GetCompanyByIdResponse;
};
