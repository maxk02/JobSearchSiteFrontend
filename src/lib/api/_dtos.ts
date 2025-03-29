import {EmploymentTypeRecord, SalaryRecord} from "@/lib/api/_sharedInterfaces";

export interface JobInfoDto {
    id: number;
    companyId: number;
    categoryId: number;
    title: string;
    dateTimePublishedUtc: string;
    dateTimeExpiringUtc: string;
    salaryRecord: SalaryRecord | null;
    employmentTypeRecord: EmploymentTypeRecord | null;
}

export interface PersonalFileInfoDto {
    id: number;
    name: string;
    extension: string;
    size: number;
}

export interface CompanyDto {
    id: number;
    name: string;
    countryId: number;
}

export interface JobApplicationInUserProfileDto {
    id: number;
    companyId: number;
    companyName: string;
    jobId: number;
    jobTitle: string;
    dateTimePublishedUtc: string;
    salaryRecord: SalaryRecord | null;
    employmentTypeRecord: EmploymentTypeRecord | null;
    dateTimeAppliedUtc: string;
    status: string;
}

export interface JobApplicationForManagersDto {
    id: number;
    userProfileId: number;
    userFullName: string;
    dateTimeAppliedUtc: string;
    personalFiles: PersonalFileInfoDto[];
    status: string;
}

export interface UserSessionDto {
    tokenId: string;
    firstTimeIssuedUtc: string;
    lastDevice: string | null;
    lastOs: string | null;
    lastClient: string | null;
}

export interface LocationDto {
    id: number;
    countryId: number;
    name: string;
    subdivisions: string[];
    description: string | null;
    code: string | null;
}

export interface JobFolderDto {
    id: number;
    name: string | null;
    description: string | null;
}

export interface JobContractTypeDto {
    id: number;
    name: string;
}