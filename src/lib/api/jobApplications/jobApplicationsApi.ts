import fetchData from "@/lib/api/fetchData";
import {
    AddJobApplicationRequest,
    AddJobApplicationResponse, AddJobApplicationTagRequest,
    UpdateJobApplicationFilesRequestDto,
    UpdateJobApplicationStatusRequest
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";

export const addJobApplication = async (req: AddJobApplicationRequest) => {
    return await fetchData<AddJobApplicationRequest, AddJobApplicationResponse>("/job-applications", "POST", req);
};

export const deleteJobApplication = async (id: number) => {
    return await fetchData<unknown>(`/job-applications/${id}`, "DELETE");
};

export const updateJobApplicationStatus = async (id: number, req: UpdateJobApplicationStatusRequest) => {
    return await fetchData<UpdateJobApplicationStatusRequest>(`/job-applications/${id}/status`, "PUT", req);
};

export const updateJobApplicationFiles = async (id: number, req: UpdateJobApplicationFilesRequestDto) => {
    return await fetchData<UpdateJobApplicationFilesRequestDto>(`/job-applications/${id}/files`, "PUT", req);
};

export const addJobApplicationTag = async (id: number, req: AddJobApplicationTagRequest) => {
    return await fetchData<AddJobApplicationTagRequest>(`/job-applications/${id}/tags`, "POST", req);
};

export const deleteJobApplicationTag = async (id: number, tag: string) => {
    return await fetchData<unknown>(`/job-applications/${id}/tags/${tag}`, "DELETE");
};