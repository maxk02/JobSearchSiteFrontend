import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";
import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";


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
    companyInfoDtos: CompanyInfoDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyByIdResponse {
    company: CompanyInfoDto;
}

export interface UpdateCompanyRequestDto {
    name: string | null;
    description: string | null;
}

//
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