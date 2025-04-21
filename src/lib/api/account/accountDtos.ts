import {CompanyManagementListItemDto} from "@/lib/api/companies/companiesApiDtos";


export interface AccountDataDto {
    id: number;
    email: string;
    fullName: string | null;
    avatarLink: string | null;
    companiesManaged: CompanyManagementListItemDto[];
}