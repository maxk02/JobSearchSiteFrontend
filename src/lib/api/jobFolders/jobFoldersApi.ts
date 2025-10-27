import fetchData from "@/lib/api/fetchData";
import {
    AddJobFolderRequest,
    GetFolderJobsResponse,
    GetJobFolderResponse,
    UpdateJobFolderRequestDto
} from "@/lib/api/jobFolders/jobFoldersApiInterfaces";
import {PaginationSpec} from "@/lib/api/sharedDtos";


export const createJobFolder = async (req: AddJobFolderRequest) => {
    return await fetchData<AddJobFolderRequest, number>("/job-folders", "POST", req);
};

export const deleteJobFolder = async (id: number) => {
    return await fetchData<unknown>(`/job-folders/${id}`, "DELETE");
};

// export const getChildFolders = async (id: number) => {
//     return await fetchData<unknown, GetChildFoldersResponse>(`/job-folders/${id}`, "GET");
// };

export const getJobFolder = async (id: number) => {
    return await fetchData<unknown, GetJobFolderResponse>(`/job-folders/${id}`, "GET");
};

export const getJobs = async (id: number, paginationSpec: PaginationSpec) => {
    return await fetchData<unknown, GetFolderJobsResponse>(`/job-folders/${id}/jobs`, "GET", paginationSpec);
};

export const updateJobFolder = async (id: number, req: UpdateJobFolderRequestDto) => {
    return await fetchData<UpdateJobFolderRequestDto>(`/job-folders/${id}`, "PATCH", req);
};