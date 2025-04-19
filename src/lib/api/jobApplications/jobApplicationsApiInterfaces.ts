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

export interface UpdateJobApplicationStatusRequest {
    statusId: number;
}

export interface UpdateJobApplicationFilesRequestDto {
    personalFileIds: number[];
}

export interface AddJobApplicationTagRequest {
    name: string;
}