export interface PaginationSpec {
    pageNumber: number;
    pageSize: number;
}

export interface PaginationResponse {
    totalCount: number;
    currentPage: number;
    pageSize: number;
}

export interface SalaryRecord {
    minimum: number | null;
    maximum: number | null;
    currencyCode: string;
    unitOfTime: string;
}

export interface EmploymentTypeRecord {
    isPartTime: boolean;
    isFullTime: boolean;
    isOnSite: boolean;
    isRemote: boolean;
    isHybrid: boolean;
    isMobile: boolean;
}