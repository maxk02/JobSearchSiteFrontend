import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {LocationDto} from "@/lib/api/locations/locationsApiDtos";
import {JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";


export interface JobApplicationForManagersDto {
    id: number;
    userId: number;
    userFullName: string;
    avatarLink: string | null;
    email: string;
    phone: string | null;
    tags: string[];
    dateTimeAppliedUtc: string;
    personalFiles: PersonalFileInfoDto[];
    status: number;
}

export interface JobApplicationInUserProfileDto {
    id: number;
    companyId: number;
    companyName: string;
    companyAvatarLink: string | null;
    jobId: number;
    jobTitle: string;
    dateTimePublishedUtc: string;
    jobSalaryInfoDto: JobSalaryInfoDto | null;
    locationDto: LocationDto;
    employmentOptionIds: number[] | null;
    contractTypeIds: number[] | null;
    dateTimeAppliedUtc: string;
    personalFileInfoDtos: PersonalFileInfoDto[];
    status: number;
}