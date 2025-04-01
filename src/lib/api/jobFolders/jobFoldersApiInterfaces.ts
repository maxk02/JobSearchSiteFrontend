import {JobFolderDto} from "@/lib/api/jobFolders/jobFoldersApiDtos";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";

export interface AddJobFolderRequest {
    companyId: number;
    parentId: number;
    name: string | null;
    description: string | null;
}

export interface GetChildFoldersResponse {
    folders: JobFolderDto[];
}

export interface GetJobsResponse {
    jobs: JobCardDto[];
}

export interface UpdateJobFolderRequestDto {
    name: string | null;
    description: string | null;
}