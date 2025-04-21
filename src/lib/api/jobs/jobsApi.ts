import {
    AddJobRequest,
    AddJobResponse,
    DeleteJobRequest,
    GetApplicationsRequest,
    GetApplicationsResponse,
    GetJobManagementDtoResponse,
    GetJobResponse,
    GetJobsRequest,
    GetJobsResponse,
    UpdateJobRequestDto
} from "@/lib/api/jobs/jobsApiInterfaces";
import fetchData from "@/lib/api/fetchData";


export const addJob = async (req: AddJobRequest) => {
    return await fetchData<AddJobRequest, AddJobResponse>("/jobs", "POST", req);
};


export const deleteJob = async (id: number) => {
    return await fetchData<DeleteJobRequest>(`/jobs/${id}`, "DELETE");
};


export const getJobs = async (req: GetJobsRequest) => {
    return await fetchData<GetJobsRequest, GetJobsResponse>("/jobs", "GET", req);
};


export const getJob = async (id: number) => {
    return await fetchData<unknown, GetJobResponse>(`/jobs/${id}`, "GET");
};

export const getJobManagementDto = async (id: number) => {
    return await fetchData<unknown, GetJobManagementDtoResponse>(`/jobs/${id}?type=management`, "GET");
};

export const updateJob = async (id: number, req: UpdateJobRequestDto) => {
    return await fetchData<UpdateJobRequestDto>(`/jobs/${id}`, "PATCH", req);
};

export const getApplications = async (id: number, req: GetApplicationsRequest) => {
    return await fetchData<GetApplicationsRequest, GetApplicationsResponse>(`/jobs/${id}/applications`, "GET", req);
};