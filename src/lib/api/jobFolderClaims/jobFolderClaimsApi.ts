import axiosClient from "@/lib/api/axiosClient";
import {UpdateJobFolderClaimIdsForUserRequestDto} from "@/lib/api/jobFolderClaims/jobFolderClaimsApiInterfaces";


export const getJobFolderClaimIdsForUser = async (folderId: number, userId: number) => {
    const response = await axiosClient.get(`/job-folder-claims/folder/${folderId}/user/${userId}`);
    return response.data as number[];
};


export const updateJobFolderClaimIdsForUser =
    async (folderId: number, userId: number, req: UpdateJobFolderClaimIdsForUserRequestDto) => {
        const response = await axiosClient.patch(`/job-folder-claims/folder/${folderId}/user/${userId}`, req);
        return response.data;
    };