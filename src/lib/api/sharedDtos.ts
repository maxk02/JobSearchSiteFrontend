export interface PaginationSpec {
    pageNumber: number;
    pageSize: number;
}

export interface PaginationResponse {
    totalCount: number;
    currentPage: number;
    pageSize: number;
}