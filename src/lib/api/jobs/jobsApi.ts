import {
    AddJobRequest,
    DeleteJobRequest,
    GetJobByIdRequest,
    GetJobByIdResponse,
    GetJobsRequest,
    GetJobsResponse,
    UpdateJobRequestDto
} from "@/lib/api/jobs/jobsApiInterfaces";
import fetchData from "@/lib/api/fetchData";


export const addJob = async (req: AddJobRequest) => {
    return await fetchData<AddJobRequest>("/jobs", "POST", req);
};


export const deleteJob = async (id: number) => {
    return await fetchData<DeleteJobRequest>(`/jobs/${id}`, "DELETE");
};


export const getJobs = async (req: GetJobsRequest) => {
    return await fetchData<GetJobsRequest, GetJobsResponse>("/jobs", "GET", req);
};


export const getJobById = async (id: number) => {
    return await fetchData<GetJobByIdRequest, GetJobByIdResponse>(`/jobs/${id}`, "GET");
};


export const updateJob = async (id: number, req: UpdateJobRequestDto) => {
    return await fetchData<UpdateJobRequestDto>(`/jobs/${id}`, "PATCH", req);
};