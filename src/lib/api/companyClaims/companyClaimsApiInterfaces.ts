export interface GetCompanyClaimIdsForUserRequest {
    userId: number;
    companyId: number;
}

export interface UpdateCompanyClaimIdsForUserRequestDto {
    companyClaimIds: number[];
}