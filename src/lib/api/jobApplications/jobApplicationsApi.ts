import fetchData from "@/lib/api/fetchData";
import {
    AddJobApplicationRequest,
    AddJobApplicationResponse,
    UpdateJobApplicationFilesRequestDto,
    UpdateJobApplicationRequestDto
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";

export const addJobApplication = async (req: AddJobApplicationRequest) => {
    return await fetchData<AddJobApplicationRequest, AddJobApplicationResponse>("/job-applications", "POST", req);
};

export const deleteJobApplication = async (id: number) => {
    return await fetchData<unknown>(`/job-applications/${id}`, "DELETE");
};

export const updateJobApplication = async (id: number, req: UpdateJobApplicationRequestDto) => {
    return await fetchData<UpdateJobApplicationRequestDto>(`/job-applications/${id}`, "PATCH", req);
};

export const updateJobApplicationFiles = async (id: number, req: UpdateJobApplicationFilesRequestDto) => {
    return await fetchData<UpdateJobApplicationFilesRequestDto>(`/job-applications/${id}/files`, "PUT", req);
};