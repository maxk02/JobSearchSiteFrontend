export interface AddJobApplicationRequest {
    jobId: number;
    locationId: number;
    personalFileIds: number[];
}

export interface AddJobApplicationResponse {
    id: number;
}

export interface AddJobApplicationTagRequest {
    name: string;
}

export interface GetFileDownloadLinkFromJobApplicationResponse {
    downloadLink: string;
}

export interface UpdateJobApplicationFilesRequest {
    locationId: number;
    personalFileIds: number[];
}

export interface UpdateJobApplicationStatusRequest {
    statusId: number;
}