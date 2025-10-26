import {
    CompanyDto,
    CompanyEmployeeDto,
    CompanyJobFolderListItemDto,
    CompanyJobListItemDto,
    CompanyManagementDetailedDto
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

export interface AddCompanyEmployeeRequest {
    email: string;
}

export interface AddCompanyEmployeeResponse {
    id: number;
}

// export interface GetCompaniesRequest {
//     countryId: number;
//     query: string;
//     page: number;
//     size: number;
// }
//
// export interface GetCompaniesResponse {
//     companyInfoDtos: CompanyDto[];
//     paginationResponse: PaginationResponse;
// }

export interface GetCompanyResponse {
    company: CompanyDto;
}

export interface GetCompanyManagementNavbarDtoResponse {
    company: CompanyManagementDetailedDto;
}

export interface GetCompanyEmployeesRequest {
    query: string | null;
    paginationSpec: PaginationSpec;
}

export interface GetCompanyEmployeesResponse {
    users: CompanyEmployeeDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyJobsRequest {
    paginationSpec: PaginationSpec;
}

export interface GetCompanyJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyManagementJobsRequest {
    query: string;
}

export interface GetCompanyManagementJobsResponse {
    jobs: CompanyJobListItemDto[];
}

export interface GetCompanySharedFoldersResponse {
    jobFolders: CompanyJobFolderListItemDto[];
}

export interface GetCompanySharedFolderChildrenResponse {
    jobFolders: CompanyJobFolderListItemDto[];
}

export interface GetCompanyLastVisitedJobsResponse {
    jobs: CompanyJobListItemDto[];
}

export interface GetCompanyLastVisitedFoldersResponse {
    jobFolders: CompanyJobFolderListItemDto[];
}

export interface SearchCompanySharedFoldersRequest {
    query: string;
}

export interface SearchCompanySharedFoldersResponse {
    jobFolders: CompanyJobFolderListItemDto[];
}

export interface UpdateCompanyRequestDto {
    name: string | null;
    description: string | null;
}