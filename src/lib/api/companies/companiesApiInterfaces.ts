import {CompanyManagementDetailedDto} from "@/lib/api/companies/companyDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {AccountDataDto} from "@/lib/api/account/accountApiDtos";


export interface AddCompanyRequest {
    name: string;
    description: string | null;
    nip: string;
    // isPublic: boolean;
    // countryId: number;
}

export interface AddCompanyResponse {
    id: number;
}

export interface GetCompaniesRequest {
    countryId: number;
    query: string;
    paginationSpec: PaginationSpec;
}

export interface GetCompaniesResponse {
    companyInfoDtos: CompanyManagementDetailedDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyByIdResponse {
    company: CompanyManagementDetailedDto;
}

export interface UpdateCompanyRequestDto {
    name: string | null;
    description: string | null;
}

export interface GetCompanyJobsRequest {
    paginationSpec: PaginationSpec;
}

export interface GetCompanyJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface UploadAvatarResponse {
    link: string;
}

export interface GetCompanyEmployeesRequest {
    query: string | null;
    paginationSpec: PaginationSpec;
}

export interface GetCompanyEmployeesResponse {
    users: AccountDataDto[];
    paginationResponse: PaginationResponse;
}

export interface AddCompanyEmployeeRequest {
    userId: number;
}