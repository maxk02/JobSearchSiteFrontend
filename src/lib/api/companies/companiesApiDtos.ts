export interface CompanyBalanceTransactionDto {
    id: number;
    dateTimeCommittedUtc: string;
    userId: number | null;
    userFullName: string | null;
    userEmail: string | null;
    amount: number;
    currencyId: number;
    description: string | null;
}

export interface CompanyEmployeeInvitationDto {
    id: number;
    dateTimeCreatedUtc: string;
    dateTimeValidUtc: string;
    isAccepted: boolean;
}

export interface CompanyDto {
    id: number;
    name: string;
    description: string;
    countryId: number;
    avatarLink: string | null;
}

export interface CompanyDashboardStatsDto {
    jobViewsToday: number;
    jobViewsLastWeek: number;
    jobApplicationsToday: number;
    jobApplicationsLastWeek: number;
}

export interface CompanyEmployeeDto {
    id: number;
    email: string;
    fullName: string;
    avatarLink: string | null;
}

export interface CompanyJobListItemDto {
    id: number;
    title: string;
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

export type CompanyJobManagementCardDtosSortOption = 'dateAsc' | 'dateDesc';