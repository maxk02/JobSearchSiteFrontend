import fetchData from "@/lib/api/fetchData";
import {
    GetCompanyClaimsOverviewRequest, GetCompanyClaimsOverviewResponse,
    UpdateCompanyClaimIdsForUserRequestDto
} from "@/lib/api/companyClaims/companyClaimsApiInterfaces";

export const getCompanyClaimsOverview = async (companyId: number, req: GetCompanyClaimsOverviewRequest) => {
    return await fetchData<GetCompanyClaimsOverviewRequest, GetCompanyClaimsOverviewResponse>(`/company-claims/company/${companyId}`, "GET", req);
};

export const getCompanyClaimIdsForUser = async (companyId: number, userId: number) => {
    return await fetchData<unknown, number[]>(`/company-claims/company/${companyId}/user/${userId}`, "GET");
};

export const updateCompanyClaimIdsForUser = async (
    companyId: number,
    userId: number,
    req: UpdateCompanyClaimIdsForUserRequestDto
) => {
    return await fetchData<UpdateCompanyClaimIdsForUserRequestDto>(
        `/company-claims/company/${companyId}/user/${userId}`,
        "PATCH",
        req
    );
};