import {
    AddJobRequest,
    AddJobResponse,
    GetApplicationsForJobRequest,
    GetApplicationsForJobResponse,
    GetJobManagementDtoResponse,
    GetJobResponse,
    GetJobsRequest,
    GetJobsResponse,
    UpdateJobRequest
} from "@/lib/api/jobs/jobsApiInterfaces";
import fetchData from "@/lib/api/fetchData";


export const addJob = async (req: AddJobRequest) => {
    return await fetchData<AddJobRequest, AddJobResponse>("/jobs", "POST", req);
};

export const deleteJob = async (id: number) => {
    return await fetchData<unknown>(`/jobs/${id}`, "DELETE");
};

export const getApplicationsForJob = async (id: number, req: GetApplicationsForJobRequest) => {
    return await fetchData<GetApplicationsForJobRequest, GetApplicationsForJobResponse>(`/jobs/${id}/applications`, "GET", req);
};

export const getJob = async (id: number) => {
    return await fetchData<unknown, GetJobResponse>(`/jobs/${id}`, "GET");
};

export const getJobManagementDto = async (id: number) => {
    return await fetchData<unknown, GetJobManagementDtoResponse>(`/jobs/${id}/management`, "GET");
};

export const getJobs = async (req: GetJobsRequest) => {
    return await fetchData<GetJobsRequest, GetJobsResponse>("/jobs", "GET", req);
};

export const updateJob = async (id: number, req: UpdateJobRequest) => {
    return await fetchData<UpdateJobRequest>(`/jobs/${id}`, "PATCH", req);
};