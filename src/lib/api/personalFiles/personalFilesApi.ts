import fetchData from "@/lib/api/fetchData";
import {GetFileDownloadLinkResponse, UpdateFileRequestDto, UploadFileResponse} from "@/lib/api/personalFiles/personalFilesApiInterfaces";


export const uploadFile = async (formData: FormData) => {
    return await fetchData<FormData, UploadFileResponse>(`/personal-files/`, "POST", formData, { "Content-Type": "multipart/form-data" });
};

export const deleteFile = async (id: number) => {
    return await fetchData<unknown>(`/personal-files/${id}`, "DELETE");
};

export const updateFile = async (id: number, req: UpdateFileRequestDto) => {
    return await fetchData<UpdateFileRequestDto>(`/personal-files/${id}`, "PATCH", req);
};

export const getFileDownloadLink = async (id: number) => {
    return await fetchData<unknown, GetFileDownloadLinkResponse>(`/personal-files/${id}/download-link`, "GET");
};