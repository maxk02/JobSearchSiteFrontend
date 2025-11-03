
export interface CompanyDto {
    id: number;
    name: string;
    description: string;
    logoLink: string | null;
}

export interface CompanyManagementListItemDto {
    id: number;
    name: string;
    logoLink: string | null;
}

export interface CompanyManagementDetailedDto {
    id: number;
    name: string;
    description: string | null;
    countryId: number;
    logoLink: string | null;
    nip: string;
    claimIds: number[];
}

export interface CompanyEmployeeDto {
    id: number;
    email: string;
    fullName: string;
    avatarLink: string | null;
}

export interface CompanyJobListItemDto {
    id: number;
    name: string;
    folderName: string;
}

export interface CompanyJobFolderListItemDto {
    id: number;
    name: string;
    claimIds: number[];
}