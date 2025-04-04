import fetchData from "@/lib/api/fetchData";
import {
    AddJobFolderRequest,
    GetChildFoldersResponse,
    GetJobsResponse,
    UpdateJobFolderRequestDto
} from "@/lib/api/jobFolders/jobFoldersApiInterfaces";

export const createJobFolder = async (req: AddJobFolderRequest) => {
    return await fetchData<AddJobFolderRequest, number>("/job-folders", "POST", req);
};

export const deleteJobFolder = async (id: number) => {
    return await fetchData<unknown>(`/job-folders/${id}`, "DELETE");
};

export const getChildFolders = async (id: number) => {
    return await fetchData<unknown, GetChildFoldersResponse>(`/job-folders/${id}/child-folders`, "GET");
};

export const getJobs = async (id: number) => {
    return await fetchData<unknown, GetJobsResponse>(`/job-folders/${id}/jobs`, "GET");
};

export const updateJobFolder = async (id: number, req: UpdateJobFolderRequestDto) => {
    return await fetchData<UpdateJobFolderRequestDto>(`/job-folders/${id}`, "PATCH", req);
};