export interface UploadFileResponse {
    id: number;
    dateTimeUploadedUtc: string;
}

export interface UpdateFileRequestDto {
    newName: string;
}

export interface GetFileDownloadLinkResponse {
    link: string;
}