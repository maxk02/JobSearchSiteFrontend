import api from "@/lib/api/httpClient";


//
export interface GetJobFolderClaimIdsForUserRequest {
    userId: number;
    folderId: number;
}

export const getJobFolderClaimIdsForUser = async (req: GetJobFolderClaimIdsForUserRequest) => {
    const response = await api.get("/job-folder-claims", { params: req });
    return response.data as number[];
};


//
export interface UpdateJobFolderClaimIdsForUserRequest {
    userId: number;
    folderId: number;
    jobFolderClaimIds: number[];
}

export const updateJobFolderClaimIdsForUser = async (req: UpdateJobFolderClaimIdsForUserRequest) => {
    const response = await api.patch("/job-folder-claims", req);
    return response.data;
};