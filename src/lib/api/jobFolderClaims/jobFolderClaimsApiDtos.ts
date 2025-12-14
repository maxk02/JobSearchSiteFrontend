export interface JobFolderClaimsOverviewDto {
    userJobFolderClaimId: number;
    userId: number;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    claimId: number;
    isInherited: boolean;
    inheritedFrom: JobFolderClaimSourceFolderDto | null;
}

export interface JobFolderClaimSourceFolderDto {
    sourceFolderId: number;
    sourceFolderName: string | null;
}