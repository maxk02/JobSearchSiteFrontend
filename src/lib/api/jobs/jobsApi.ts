import api from "@/lib/api/httpClient"
import {
    AddJobRequest,
    GetJobByIdResponse,
    GetJobsRequest,
    GetJobsResponse,
    UpdateJobRequestDto
} from "@/lib/api/jobs/jobsApiInterfaces";


export const addJob = async (req: AddJobRequest) => {
    const response = await api.post("/jobs", req);
    return response.data;
};


export const deleteJob = async (id: number) => {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
};


export const getJobs = async (req: GetJobsRequest) => {
    const response = await api.get("/jobs", {params: req});
    return response.data as GetJobsResponse;
};


export const getJobById = async (id: number) => {
    const response = await api.get(`/jobs/${id}`);
    return response.data as GetJobByIdResponse;
};


export const updateJob = async (id: number, req: UpdateJobRequestDto) => {
    const response = await api.patch(`/jobs/${id}`, {params: req});
    return response.data;
};