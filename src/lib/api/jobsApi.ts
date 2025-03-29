import api from "@/lib/api/httpClient"
import {
    EmploymentTypeRecord,
    PaginationResponse,
    PaginationSpec,
    SalaryRecord
} from "@/lib/api/_sharedInterfaces";
import {JobContractTypeDto, JobInfoDto, LocationDto} from "@/lib/api/_dtos";


//
export interface AddJobRequest {
    jobFolderId: number;
    categoryId: number;
    title: string;
    description: string;
    isPublic: boolean;
    dateTimeExpiringUtc: string;
    responsibilities: string[];
    requirements: string[];
    advantages: string[];
    salaryRecord: SalaryRecord;
    employmentTypeRecord: EmploymentTypeRecord;
    contractTypeIds: number[];
    locationIds: number[];
}

export const addJob = async (req: AddJobRequest) => {
    const response = await api.post("/jobs", req);
    return response.data;
};


//
export interface DeleteJobRequest {
    jobId: number;
}

export const deleteJob = async (req: DeleteJobRequest) => {
    const response = await api.delete(`/jobs/${req.jobId}`);
    return response.data;
};


//
export interface GetJobsRequest {
    query: string;
    paginationSpec: PaginationSpec;
    mustHaveSalaryRecord: boolean | null;
    employmentTypeRecord: EmploymentTypeRecord | null;
    countryIds: number[] | null;
    categoryIds: number[] | null;
    contractTypeIds: number[] | null;
}

export interface GetJobsResponse {
    jobInfoCards: JobInfoDto[];
    paginationResponse: PaginationResponse;
}

export const getJobs = async (req: GetJobsRequest) => {
    const response = await api.get("/jobs", { params: req });
    return response.data as GetJobsResponse;
};


//
export interface GetJobByIdRequest {
    id: number;
}

export interface GetJobByIdResponse {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    dateTimePublishedUtc: string; // DateTime maps to ISO string
    dateTimeExpiringUtc: string; // DateTime maps to ISO string
    responsibilities: string[];
    requirements: string[];
    advantages: string[];
    salaryRecord: SalaryRecord | null;
    employmentTypeRecord: EmploymentTypeRecord | null;
    jobContractTypes: JobContractTypeDto[];
    locations: LocationDto[];
}

export const getJobById = async (id: number) => {
    const response = await api.get(`/jobs/${id}`);
    return response.data as GetJobByIdResponse;
};


//
export interface UpdateJobRequest {
    id: number;
    jobFolderId: number | null;
    categoryId: number | null;
    title: string | null;
    description: string | null;
    isPublic: boolean | null;
    newDateTimeExpiringUtc: string | null;
    responsibilities: string[] | null;
    requirements: string[] | null;
    advantages: string[] | null;
    salaryRecord: SalaryRecord | null;
    employmentTypeRecord: EmploymentTypeRecord | null;
    contractTypeIds: number[] | null;
    locationIds: number[] | null;
}

export const updateJob = async (req: UpdateJobRequest) => {
    const response = await api.patch("/jobs", req);
    return response.data;
};