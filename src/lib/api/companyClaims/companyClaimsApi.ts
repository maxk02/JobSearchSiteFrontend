import fetchData from "@/lib/api/fetchData";
import { UpdateCompanyClaimIdsForUserRequestDto } from "@/lib/api/companyClaims/companyClaimsApiInterfaces";

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