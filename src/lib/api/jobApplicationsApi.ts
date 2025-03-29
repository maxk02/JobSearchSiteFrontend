import api from "@/lib/api/httpClient";
import {PaginationResponse, PaginationSpec} from "@/lib/api/_sharedInterfaces";
import {JobApplicationForManagersDto} from "@/lib/api/_dtos";


//
export interface AddJobApplicationRequest {
    userId: number;
    jobId: number;
    personalFileIds: number[];
}

export interface AddJobApplicationResponse {
    addedApplicationId: number;
}

export const addJobApplication = async (req: AddJobApplicationRequest) => {
    const response = await api.post("/job-applications", req);
    return response.data as AddJobApplicationResponse;
};


//
export interface DeleteJobApplicationRequest {
    jobApplicationId: number;
}

export const deleteJobApplication = async (req: DeleteJobApplicationRequest) => {
    const response = await api.delete(`/job-applications/${req.jobApplicationId}`);
    return response.data;
};


//
export interface GetApplicationsForJobIdRequest {
    jobId: number;
    query: string;
    paginationSpec: PaginationSpec;
}

export interface GetApplicationsForJobIdResponse {
    jobApplications: JobApplicationForManagersDto[];
    paginationResponse: PaginationResponse;
}

export const getApplicationsForJobId = async (req: GetApplicationsForJobIdRequest) => {
    const response = await api.get("/job-applications", { params: req });
    return response.data as GetApplicationsForJobIdResponse;
};


//
export interface UpdateJobApplicationRequest {
    jobApplicationId: number;
    status: string;
}

export const updateJobApplication = async (req: UpdateJobApplicationRequest) => {
    const response = await api.patch("/job-applications", req);
    return response.data;
};


//
export interface UpdateJobApplicationFilesRequest {
    jobApplicationId: number;
    personalFileIds: number[];
}

export const updateJobApplicationFiles = async (req: UpdateJobApplicationFilesRequest) => {
    const response = await api.put("/job-applications/files", req);
    return response.data;
};