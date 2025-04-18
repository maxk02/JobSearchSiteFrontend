import {JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {StringLocationDto} from "@/lib/api/locations/locationsApiDtos";


export interface JobApplicationForManagersDto {
    id: number;
    userId: number;
    userFullName: string;
    avatarLink: string;
    email: string;
    phone: string | null;
    tags: string[];
    dateTimeAppliedUtc: string;
    personalFiles: PersonalFileInfoDto[];
    statusId: number;
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