import fetchData from "@/lib/api/fetchData";
import {GetDownloadLinkResponse, UpdateFileRequest, UploadFileResponse} from "@/lib/api/personalFiles/personalFilesApiInterfaces";


export const deleteFile = async (id: number) => {
    return await fetchData<unknown>(`/personal-files/${id}`, "DELETE");
};

export const getDownloadLink = async (id: number) => {
    return await fetchData<unknown, GetDownloadLinkResponse>(`/personal-files/${id}/download-link`, "GET");
};

export const updateFile = async (id: number, req: UpdateFileRequest) => {
    return await fetchData<UpdateFileRequest>(`/personal-files/${id}`, "PATCH", req);
};

export const uploadFile = async (formData: FormData) => {
    return await fetchData<FormData, UploadFileResponse>(`/personal-files/`, "POST", formData, { "Content-Type": "multipart/form-data" });
};