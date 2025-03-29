import api from "@/lib/api/httpClient";
import {JobFolderDto, JobInfoDto} from "@/lib/api/_dtos";



//
export interface AddJobFolderRequest {
    companyId: number;
    parentId: number;
    name: string | null;
    description: string | null;
}

export const createJobFolder = async (req: AddJobFolderRequest) => {
    const response = await api.post("/job-folders", req);
    return response.data as number;
};


//
export interface DeleteJobFolderRequest {
    id: number;
}

export const deleteJobFolder = async (req: DeleteJobFolderRequest) => {
    const response = await api.delete(`/job-folders/${req.id}`);
    return response.data;
};


//
export interface GetChildFoldersRequest {
    jobFolderId: number;
}

export interface GetChildFoldersResponse {
    folders: JobFolderDto[];
}

export const getChildFolders = async (id: number) => {
    const response = await api.get(`/job-folders/${id}/child-folders`);
    return response.data as GetChildFoldersResponse;
};


//
export interface GetJobsRequest {
    jobFolderId: number;
}

export interface GetJobsResponse {
    jobs: JobInfoDto[];
}

export const getJobs = async (id: number) => {
    const response = await api.get(`/job-folders/${id}/jobs`);
    return response.data as GetJobsResponse;
};


//
export interface UpdateJobFolderRequest {
    id: number;
    name: string | null;
    description: string | null;
}

export const updateJobFolder = async (req: UpdateJobFolderRequest) => {
    const response = await api.patch(`/job-folders/${req.id}`, req);
    return response.data;
};