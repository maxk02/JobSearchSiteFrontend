import {PaginationResponse, PaginationSpec} from "@/lib/api/sharedDtos";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {JobApplicationStatus} from "@/lib/api/jobApplications/jobApplicationsApiEnums";

export interface AddJobApplicationRequest {
    userId: number;
    jobId: number;
    personalFileIds: number[];
}

export interface AddJobApplicationResponse {
    id: number;
}

export interface DeleteJobApplicationRequest {
    id: number;
}

export interface UpdateJobApplicationRequestDto {
    status: JobApplicationStatus;
}

export interface UpdateJobApplicationFilesRequestDto {
    personalFileIds: number[];
}