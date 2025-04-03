import axiosClient from "@/lib/api/axiosClient";
import {UpdateCompanyClaimIdsForUserRequestDto} from "@/lib/api/companyClaims/companyClaimsApiInterfaces";


export const getCompanyClaimIdsForUser = async (companyId: number, userId: number) => {
    const response = await axiosClient.get(`/company-claims/company/${companyId}/user/${userId}`);
    return response.data as number[];
};

export const updateCompanyClaimIdsForUser =
    async (companyId: number, userId: number, req: UpdateCompanyClaimIdsForUserRequestDto) => {
    const response = await axiosClient.patch(`/company-claims/company/${companyId}/user/${userId}`, req);
    return response.data;
};