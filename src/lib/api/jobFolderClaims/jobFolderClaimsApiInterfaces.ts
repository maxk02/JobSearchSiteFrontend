import {PaginationResponse} from "@/lib/api/sharedDtos";
import {JobFolderClaimsOverviewDto} from "@/lib/api/jobFolderClaims/jobFolderClaimsApiDtos";

export interface GetJobFolderClaimIdsForUserResponse {
    claimIds: number[];
}

export interface GetJobFolderClaimsOverviewRequest {
    userQuery: string | null;
    jobFolderClaimIds: number[] | null;
    page: number;
    size: number;
}

export interface GetJobFolderClaimsOverviewResponse {
    jobFolderClaimOverviewDtos: JobFolderClaimsOverviewDto[];
    paginationResponse: PaginationResponse;
}

export interface UpdateJobFolderClaimIdsForUserRequest {
    jobFolderClaimIds: number[];
}