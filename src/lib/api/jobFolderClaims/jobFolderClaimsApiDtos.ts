export interface JobFolderClaimSourceFolderDto {
    sourceFolderId: number;
    sourceFolderName: string;
}

export interface JobFolderClaimOverviewDto {
    userCompanyClaimId: number;
    userId: number;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    claimId: number;
    isInherited: boolean;
    inheritedFrom: JobFolderClaimSourceFolderDto | null;
}