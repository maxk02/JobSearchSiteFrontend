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