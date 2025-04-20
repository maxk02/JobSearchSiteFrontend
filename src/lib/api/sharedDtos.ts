export interface PaginationSpec {
    pageNumber: number;
    pageSize: number;
}

export interface PaginationResponse {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export interface JobSalaryInfoDto {
    minimum: number | null;
    maximum: number | null;
    currency: string;
    unitOfTime: string;
    isAfterTaxes: boolean;
}