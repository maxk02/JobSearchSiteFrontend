import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";


export interface UserSessionDto {
    token: string;
    firstTimeIssuedUtc: string;
}

export interface AccountDataDto {
    id: number;
    email: string;
    fullName: string;
    companiesManaged: CompanyInfoDto[]
}