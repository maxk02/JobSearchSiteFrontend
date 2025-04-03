import axiosClient from "@/lib/api/axiosClient"
import {
    AddJobRequest,
    GetJobByIdResponse,
    GetJobsRequest,
    GetJobsResponse,
    UpdateJobRequestDto
} from "@/lib/api/jobs/jobsApiInterfaces";


export const addJob = async (req: AddJobRequest) => {
    const response = await axiosClient.post("/jobs", req);
    return response.data;
};


export const deleteJob = async (id: number) => {
    const response = await axiosClient.delete(`/jobs/${id}`);
    return response.data;
};


export const getJobs = async (req: GetJobsRequest) => {
    const response = await axiosClient.get("/jobs", {params: req});
    return response.data as GetJobsResponse;
};


export const getJobById = async (id: number) => {
    const response = await axiosClient.get(`/jobs/${id}`);
    return response.data as GetJobByIdResponse;
};


export const updateJob = async (id: number, req: UpdateJobRequestDto) => {
    const response = await axiosClient.patch(`/jobs/${id}`, {params: req});
    return response.data;
};