import axiosClient from "@/lib/api/axiosClient";
import {
    AddJobApplicationRequest,
    AddJobApplicationResponse,
    GetApplicationsForJobIdRequest,
    GetApplicationsForJobIdResponse,
    UpdateJobApplicationFilesRequestDto,
    UpdateJobApplicationRequestDto
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";


export const addJobApplication = async (req: AddJobApplicationRequest) => {
    const response = await axiosClient.post("/job-applications", {params: req});
    return response.data as AddJobApplicationResponse;
};

export const deleteJobApplication = async (id: number) => {
    const response = await axiosClient.delete(`/job-applications/${id}`);
    return response.data;
};

export const getApplicationsForJobId = async (req: GetApplicationsForJobIdRequest) => {
    const response = await axiosClient.get("/job-applications", {params: req});
    return response.data as GetApplicationsForJobIdResponse;
};

export const updateJobApplication = async (id: number, req: UpdateJobApplicationRequestDto) => {
    const response = await axiosClient.patch(`/job-applications/${id}`, {params: req});
    return response.data;
};

export const updateJobApplicationFiles = async (id: number, req: UpdateJobApplicationFilesRequestDto) => {
    const response = await axiosClient.put(`/job-applications/${id}/files`, {params: req});
    return response.data;
};