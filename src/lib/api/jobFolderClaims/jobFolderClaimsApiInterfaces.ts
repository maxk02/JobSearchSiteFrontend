import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobFolderClaimsOverviewDto} from "@/lib/api/jobFolderClaims/jobFolderClaimsApiDtos";

export interface GetJobFolderClaimsOverviewRequest {
    userQuery: string;
    jobFolderClaimIds: number[];
    paginationSpec: PaginationSpec;
}

export interface GetJobFolderClaimsOverviewResponse {
    jobFolderClaimOverviewDtos: JobFolderClaimsOverviewDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobFolderClaimIdsForUserRequest {
    userId: number;
    folderId: number;
}

export interface UpdateJobFolderClaimIdsForUserRequestDto {
    jobFolderClaimIds: number[];
}