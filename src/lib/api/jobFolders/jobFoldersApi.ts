import api from "@/lib/api/httpClient";
import {
    AddJobFolderRequest,
    GetChildFoldersResponse,
    GetJobsResponse,
    UpdateJobFolderRequestDto
} from "@/lib/api/jobFolders/jobFoldersApiInterfaces";


export const createJobFolder = async (req: AddJobFolderRequest) => {
    const response = await api.post("/job-folders", req);
    return response.data as number;
};


export const deleteJobFolder = async (id: number) => {
    const response = await api.delete(`/job-folders/${id}`);
    return response.data;
};


export const getChildFolders = async (id: number) => {
    const response = await api.get(`/job-folders/${id}/child-folders`);
    return response.data as GetChildFoldersResponse;
};


export const getJobs = async (id: number) => {
    const response = await api.get(`/job-folders/${id}/jobs`);
    return response.data as GetJobsResponse;
};


export const updateJobFolder = async (id: number, req: UpdateJobFolderRequestDto) => {
    const response = await api.patch(`/job-folders/${id}`, req);
    return response.data;
};