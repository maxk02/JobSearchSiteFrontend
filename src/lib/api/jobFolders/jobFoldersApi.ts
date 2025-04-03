import axiosClient from "@/lib/api/axiosClient";
import {
    AddJobFolderRequest,
    GetChildFoldersResponse,
    GetJobsResponse,
    UpdateJobFolderRequestDto
} from "@/lib/api/jobFolders/jobFoldersApiInterfaces";


export const createJobFolder = async (req: AddJobFolderRequest) => {
    const response = await axiosClient.post("/job-folders", req);
    return response.data as number;
};


export const deleteJobFolder = async (id: number) => {
    const response = await axiosClient.delete(`/job-folders/${id}`);
    return response.data;
};


export const getChildFolders = async (id: number) => {
    const response = await axiosClient.get(`/job-folders/${id}/child-folders`);
    return response.data as GetChildFoldersResponse;
};


export const getJobs = async (id: number) => {
    const response = await axiosClient.get(`/job-folders/${id}/jobs`);
    return response.data as GetJobsResponse;
};


export const updateJobFolder = async (id: number, req: UpdateJobFolderRequestDto) => {
    const response = await axiosClient.patch(`/job-folders/${id}`, req);
    return response.data;
};