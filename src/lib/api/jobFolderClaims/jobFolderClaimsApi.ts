import fetchData from "@/lib/api/fetchData";
import { UpdateJobFolderClaimIdsForUserRequestDto } from "@/lib/api/jobFolderClaims/jobFolderClaimsApiInterfaces";

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
        "PATCH",
        req
    );
};