import {PaginationResponse} from "@/lib/api/sharedDtos";
import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsApiDtos";

export interface GetCompanyClaimsOverviewRequest {
    companyClaimIds: number[];
    userQuery: string;
    page: number;
    size: number;
}

export interface GetCompanyClaimsOverviewResponse {
    companyClaimsOverviewDtos: CompanyClaimOverviewDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateCompanyClaimIdsForUserRequestDto {
    companyClaimIds: number[];
}