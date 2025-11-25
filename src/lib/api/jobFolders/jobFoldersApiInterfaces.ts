import {JobFolderDetailedDto, JobFolderMinimalDto, JobManagementCardDto} from "@/lib/api/jobFolders/jobFoldersApiDtos";
import {PaginationResponse} from "@/lib/api/sharedDtos";

export interface AddJobFolderRequest {
    companyId: number;
    parentId: number;
    name: string | null;
    description: string | null;
}

export interface GetChildFoldersResponse {
    folders: JobFolderMinimalDto[]; //todo
}

export interface GetFolderJobsResponse {
    jobs: JobManagementCardDto[];
    paginationResponse: PaginationResponse;
}

export interface GetJobFolderResponse {
    folder: JobFolderDetailedDto;
}

export interface UpdateJobFolderRequest {
    name: string | null;
    description: string | null;
}