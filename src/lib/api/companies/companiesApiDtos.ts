
export interface CompanyDto {
    id: number;
    name: string;
    description: string;
    countryId: number;
    avatarLink: string | null;
}

export interface CompanyEmployeeDto {
    id: number;
    email: string;
    fullName: string;
    avatarLink: string | null;
}

export interface CompanyJobFolderListItemDto {
    id: number;
    name: string | null;
    claimIds: number[];
}

export interface CompanyJobListItemDto {
    id: number;
    title: string;
    folderName: string | null;
}

export interface CompanyManagementDetailedDto {
    id: number;
    name: string;
    description: string | null;
    countryId: number;
    avatarLink: string | null;
    claimIds: number[];
    countrySpecificFieldsJson: string;
}

export interface CompanyManagementListItemDto {
    id: number;
    name: string;
    countryId: number;
    avatarLink: string | null;
}