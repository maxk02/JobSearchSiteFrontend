export interface UploadFileResponse {
    id: number;
    dateTimeUploaded: string;
}

export interface UpdateFileRequestDto {
    newName: string;
}

export interface GetFileDownloadLinkResponse {
    link: string;
}