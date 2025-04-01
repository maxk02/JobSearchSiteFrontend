import api from "@/lib/api/httpClient";
import {
    AddJobApplicationRequest,
    AddJobApplicationResponse,
    GetApplicationsForJobIdRequest,
    GetApplicationsForJobIdResponse,
    UpdateJobApplicationFilesRequestDto,
    UpdateJobApplicationRequestDto
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";


export const addJobApplication = async (req: AddJobApplicationRequest) => {
    const response = await api.post("/job-applications", {params: req});
    return response.data as AddJobApplicationResponse;
};

export const deleteJobApplication = async (id: number) => {
    const response = await api.delete(`/job-applications/${id}`);
    return response.data;
};

export const getApplicationsForJobId = async (req: GetApplicationsForJobIdRequest) => {
    const response = await api.get("/job-applications", {params: req});
    return response.data as GetApplicationsForJobIdResponse;
};

export const updateJobApplication = async (id: number, req: UpdateJobApplicationRequestDto) => {
    const response = await api.patch(`/job-applications/${id}`, {params: req});
    return response.data;
};

export const updateJobApplicationFiles = async (id: number, req: UpdateJobApplicationFilesRequestDto) => {
    const response = await api.put(`/job-applications/${id}/files`, {params: req});
    return response.data;
};