import api from "@/lib/api/httpClient";


//
export interface GetCompanyClaimIdsForUserRequest {
    userId: number;
    companyId: number;
}

export const getCompanyClaimIdsForUser = async (req: GetCompanyClaimIdsForUserRequest) => {
    const response = await api.get("/api/company-claims", { params: req });
    return response.data as number[];
};


//
export interface UpdateCompanyClaimIdsForUserRequest {
    userId: number;
    companyId: number;
    companyClaimIds: number[];
}

export const updateCompanyClaimIdsForUser = async (req: UpdateCompanyClaimIdsForUserRequest) => {
    const response = await api.patch("/api/company-claims", req);
    return response.data;
};