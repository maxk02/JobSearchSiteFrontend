export interface AddJobApplicationRequest {
    jobId: number;
    personalFileIds: number[];
}

export interface AddJobApplicationResponse {
    id: number;
}

export interface AddJobApplicationTagRequest {
    name: string;
}

export interface UpdateJobApplicationFilesRequest {
    personalFileIds: number[];
}

export interface UpdateJobApplicationStatusRequest {
    statusId: number;
}