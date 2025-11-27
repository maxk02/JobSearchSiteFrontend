import fetchData from "@/lib/api/fetchData";
import {
    GetCompanyClaimIdsForUserResponse,
    GetCompanyClaimsOverviewRequest,
    GetCompanyClaimsOverviewResponse,
    UpdateCompanyClaimIdsForUserRequest
} from "@/lib/api/companyClaims/companyClaimsApiInterfaces";

export const getCompanyClaimIdsForUser = async (companyId: number, userId: number) => {
    return await fetchData<unknown, GetCompanyClaimIdsForUserResponse>(`/company-claims/company/${companyId}/user/${userId}`, "GET");
};

export const getCompanyClaimsOverview = async (companyId: number, req: GetCompanyClaimsOverviewRequest) => {
    return await fetchData<GetCompanyClaimsOverviewRequest, GetCompanyClaimsOverviewResponse>(`/company-claims/company/${companyId}`, "GET", req);
};

export const updateCompanyClaimIdsForUser = async (
    companyId: number,
    userId: number,
    req: UpdateCompanyClaimIdsForUserRequest
) => {
    return await fetchData<UpdateCompanyClaimIdsForUserRequest>(
        `/company-claims/company/${companyId}/user/${userId}`,
        "PUT",
        req
    );
};