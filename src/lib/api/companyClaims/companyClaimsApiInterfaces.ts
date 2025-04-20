import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsDtos";

export interface GetCompanyClaimsOverviewRequest {
    userQuery: string;
    companyClaimIds: number[];
    paginationSpec: PaginationSpec;
}

export interface GetCompanyClaimsOverviewResponse {
    companyClaimsOverviewDtos: CompanyClaimOverviewDto[];
    paginationResponse: PaginationResponse;
}

export interface GetCompanyClaimIdsForUserRequest {
    userId: number;
    companyId: number;
}

export interface UpdateCompanyClaimIdsForUserRequestDto {
    companyClaimIds: number[];
}