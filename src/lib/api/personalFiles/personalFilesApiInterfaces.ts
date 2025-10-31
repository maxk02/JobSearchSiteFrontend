export interface UploadFileResponse {
    id: number;
}

export interface UpdateFileRequestDto {
    newName: string;
}

export interface GetDownloadLinkResponse {
    link: string;
}