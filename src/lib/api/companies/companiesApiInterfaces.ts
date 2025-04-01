import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";


export interface AddCompanyRequest {
    name: string;
    description: string | null;
    isPublic: boolean;
    countryId: number;
    logoLink: string | null;
}

export interface AddCompanyResponse {
    id: number;
}

export interface DeleteCompanyRequest {
    id: number;
}

export interface GetCompaniesRequest {
    countryId: number;
    query: string;
    paginationSpec: PaginationSpec;
}

export interface GetCompaniesResponse {
    companyInfoDtos: CompanyInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyByIdRequest {
    id: number;
}

export interface GetCompanyByIdResponse {
    company: CompanyInfoDto | null;
}

export interface UpdateCompanyRequestDto {
    name: string | null;
    description: string | null;
    isPublic: boolean | null;
}