import {PaginationResponse} from "@/lib/api/sharedDtos";
import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsApiDtos";

export interface GetCompanyClaimsOverviewRequest {
    companyClaimIds: number[] | null;
    userQuery: string | null;
    page: number;
    size: number;
}

export interface GetCompanyClaimsOverviewResponse {
    companyClaimOverviewDtos: CompanyClaimOverviewDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateCompanyClaimIdsForUserRequest {
    companyClaimIds: number[];
}