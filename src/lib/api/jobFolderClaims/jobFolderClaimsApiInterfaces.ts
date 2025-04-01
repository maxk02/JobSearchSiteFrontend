export interface GetJobFolderClaimIdsForUserRequest {
    userId: number;
    folderId: number;
}

export interface UpdateJobFolderClaimIdsForUserRequestDto {
    jobFolderClaimIds: number[];
}