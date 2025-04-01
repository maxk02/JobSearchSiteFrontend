import api from "@/lib/api/httpClient";
import {UpdateCompanyClaimIdsForUserRequestDto} from "@/lib/api/companyClaims/companyClaimsApiInterfaces";


export const getCompanyClaimIdsForUser = async (companyId: number, userId: number) => {
    const response = await api.get(`/company-claims/company/${companyId}/user/${userId}`);
    return response.data as number[];
};

export const updateCompanyClaimIdsForUser =
    async (companyId: number, userId: number, req: UpdateCompanyClaimIdsForUserRequestDto) => {
    const response = await api.patch(`/company-claims/company/${companyId}/user/${userId}`, req);
    return response.data;
};