import axiosClient from "@/lib/api/axiosClient"
import {
    AddCompanyRequest,
    AddCompanyResponse,
    GetCompaniesRequest,
    GetCompaniesResponse,
    GetCompanyByIdResponse,
    UpdateCompanyRequestDto
} from "@/lib/api/companies/companiesApiInterfaces";


export const addCompany = async (req: AddCompanyRequest) => {
    const response = await axiosClient.post("/companies", req);
    return response.data as AddCompanyResponse;
};

export const deleteCompany = async (id: number) => {
    const response = await axiosClient.delete(`/companies/${id}`);
    return response.data;
};

export const updateCompany = async (id: number, req: UpdateCompanyRequestDto) => {
    const response = await axiosClient.patch(`/companies/${id}`, { params: req });
    return response.data;
};

export const getCompanies = async (req: GetCompaniesRequest) => {
    const response = await axiosClient.get("/companies", { params: req });
    return response.data as GetCompaniesResponse;
};

export const getCompanyById = async (id: number) => {
    const response = await axiosClient.get(`/companies/${id}`);
    return response.data as GetCompanyByIdResponse;
};
