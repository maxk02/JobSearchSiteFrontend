import {
    CompanyBalanceTransactionDto,
    CompanyDto,
    CompanyEmployeeDto, CompanyEmployeeInvitationDto,
    CompanyJobListItemDto,
    CompanyManagementDetailedDto
} from "@/lib/api/companies/companiesApiDtos";
import {PaginationResponse} from "@/lib/api/sharedDtos";
import {JobCardDto, JobManagementCardDto} from "@/lib/api/jobs/jobsApiDtos";


export interface AcceptCompanyEmployeeInvitationRequest {
    userId: number;
    token: string;
}

export interface AddCompanyEmployeeInvitationRequest {
    invitedUserEmail: string;
}

export interface AddCompanyRequest {
    name: string;
    description: string | null;
    nip: string;
    countryId: number;
}

export interface AddCompanyResponse {
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

export interface GetCompanyBalanceResponse {
    currencyCode: string;
    balance: number;
}

export interface GetCompanyBalanceTransactionsRequest {
    page: number;
    size: number;
}

export interface GetCompanyBalanceTransactionsResponse {
    companyBalanceTransactionDtos: CompanyBalanceTransactionDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyEmployeeInvitationRequest {
    invitedUserEmail: string;
}

export interface GetCompanyEmployeeInvitationResponse {
    companyEmployeeInvitationDto: CompanyEmployeeInvitationDto;
}

export interface GetCompanyEmployeesRequest {
    query: string | null;
    page: number;
    size: number;
}

export interface GetCompanyEmployeesResponse {
    employees: CompanyEmployeeDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyJobManagementCardDtosRequest {
    query: string | null;
    page: number;
    size: number;
    mustHaveSalaryRecord: boolean;
    locationId: number | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
    employmentOptionIds: number[] | null;
}

export interface GetCompanyJobManagementCardDtosResponse {
    jobManagementCardDtos: JobManagementCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyJobsRequest {
    query: string | null;
    page: number;
    size: number;
    mustHaveSalaryRecord: boolean;
    employmentTypeIds: number[] | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetCompanyJobsResponse {
    jobCards: JobCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyLastVisitedJobsResponse {
    jobs: CompanyJobListItemDto[];
}

export interface GetCompanyManagementNavbarDtoResponse {
    company: CompanyManagementDetailedDto;
}

export interface GetCompanyResponse {
    company: CompanyDto;
}

export interface GetJobApplicationTagsRequest {
    searchQuery: string | null;
    size: number;
}

export interface GetJobApplicationTagsResponse {
    tags: string[];
    paginationResponse: PaginationResponse;
}

export interface SearchCompanySharedJobsRequest {
    query: string; //todo
}

export interface SearchCompanySharedJobsResponse {
    jobs: CompanyJobListItemDto[]; //todo
}

export interface SendCompanyEmployeeInvitationRequest {
    invitedUserEmail: string;
}

export interface UpdateCompanyRequest {
    name: string | null;
    description: string | null;
    isPublic: boolean | null;
}

export interface UploadCompanyAvatarResponse {
    id: number; //todo
}