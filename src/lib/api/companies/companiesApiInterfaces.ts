import {
    CompanyDto,
    CompanyManagementDetailedDto,
    CompanyEmployeeDto,
    CompanyLastJobDto, CompanyLastFolderDto
} from "@/lib/api/companies/companiesApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";


export interface AddCompanyRequest {
    name: string;
    description: string | null;
    nip: string;
    countryId: number;
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
    companyInfoDtos: CompanyDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyResponse {
    company: CompanyDto;
}

export interface GetCompanyManagementDtoResponse {
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
    users: CompanyEmployeeDto[];
    paginationResponse: PaginationResponse;
}

export interface AddCompanyEmployeeRequest {
    email: string;
}

export interface AddCompanyEmployeeResponse {
    id: number;
}

export interface GetLastJobsResponse {
    jobs: CompanyLastJobDto[];
}

export interface GetLastFoldersResponse {
    folders: CompanyLastFolderDto[];
}