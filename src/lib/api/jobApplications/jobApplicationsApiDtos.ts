import {JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {JobApplicationStatus} from "@/lib/api/jobApplications/jobApplicationsApiEnums";
import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";


export interface JobApplicationForManagersDto {
    id: number;
    userId: number;
    userFullName: string;
    dateTimeAppliedUtc: string;
    personalFiles: PersonalFileInfoDto[];
    status: JobApplicationStatus;
}

export interface JobApplicationInUserProfileDto {
    id: number;
    companyId: number;
    companyName: string;
    companyLogoLink: string | null;
    jobId: number;
    jobTitle: string;
    dateTimePublishedUtc: string;
    salaryInfo: JobSalaryInfoDto | null;
    locations: StringLocationDto[];
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    dateTimeAppliedUtc: string;
    personalFiles: PersonalFileInfoDto[];
    statusId: number;
}