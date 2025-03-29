import api from "@/lib/api/httpClient"
import {PaginationResponse, PaginationSpec} from "@/lib/api/_sharedInterfaces";


////
export interface CompanyInfocardDto {
    id: number;
    name: string;
    countryId: number;
}
////


//
export interface AddCompanyRequest {
    name: string;
    description: string | null;
    isPublic: boolean;
    countryId: number;
}

export interface AddCompanyResponse {
    id: number;
}

export const addCompany = async (req: AddCompanyRequest) => {
    const response = await api.post("/api/companies", req);
    return response.data as AddCompanyResponse;
};


//
export interface UpdateCompanyRequest {
    companyId: number;
    name: string | null;
    description: string | null;
    isPublic: boolean | null;
}


//
export interface DeleteCompanyRequest {
    companyId: number;
}

export const deleteCompany = async (req: DeleteCompanyRequest) => {
    const response = await api.delete(`/api/companies/${req.companyId}`);
    return response.data;
};


//
export interface GetCompaniesRequest {
    countryId: number;
    query: string;
    paginationSpec: PaginationSpec;
}

export interface GetCompaniesResponse {
    companyInfocardDtos: CompanyInfocardDto[];
    paginationResponse: PaginationResponse;
}

export const getCompanies = async (req: GetCompaniesRequest) => {
    const response = await api.get("/api/companies", { params: req });
    return response.data as GetCompaniesResponse;
};


//
export interface GetCompanyByIdRequest {
    id: number;
}

export interface GetCompanyByIdResponse {
    name: string;
    description: string | null;
    countryId: number;
}

export const getCompanyById = async (req: GetCompanyByIdRequest) => {
    const response = await api.get(`/api/companies/${req.id}`);
    return response.data as GetCompanyByIdResponse;
};
