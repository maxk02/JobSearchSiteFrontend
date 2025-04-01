import {JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {JobApplicationStatus} from "@/lib/api/jobApplications/jobApplicationsApiEnums";


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
    jobId: number;
    jobTitle: string;
    dateTimePublishedUtc: string;
    jobSalaryInfoDto: JobSalaryInfoDto | null;
    employmentTypeIds: number[] | null;
    dateTimeAppliedUtc: string;
    status: JobApplicationStatus;
}