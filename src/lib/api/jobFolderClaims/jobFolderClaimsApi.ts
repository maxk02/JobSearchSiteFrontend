import fetchData from "@/lib/api/fetchData";
import {
    GetJobFolderClaimsOverviewRequest,
    GetJobFolderClaimsOverviewResponse,
    UpdateJobFolderClaimIdsForUserRequestDto
} from "@/lib/api/jobFolderClaims/jobFolderClaimsApiInterfaces";


export const getJobFolderClaimsOverview = async (folderId: number, req: GetJobFolderClaimsOverviewRequest) => {
    return await fetchData<GetJobFolderClaimsOverviewRequest, GetJobFolderClaimsOverviewResponse>(`/job-folder-claims/folder/${folderId}`, "GET", req);
};

export const getJobFolderClaimIdsForUser = async (folderId: number, userId: number) => {
    return await fetchData<unknown, number[]>(`/job-folder-claims/folder/${folderId}/user/${userId}`, "GET");
};

export const updateJobFolderClaimIdsForUser = async (
    folderId: number,
    userId: number,
    req: UpdateJobFolderClaimIdsForUserRequestDto
) => {
    return await fetchData<UpdateJobFolderClaimIdsForUserRequestDto>(
        `/job-folder-claims/folder/${folderId}/user/${userId}`,
        "PUT",
        req
    );
};