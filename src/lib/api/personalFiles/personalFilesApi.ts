import api from "@/lib/api/httpClient";
import {UpdateFileRequestDto} from "@/lib/api/personalFiles/personalFilesApiInterfaces";


export const uploadFile = async (formFile: File) => {
    const formData = new FormData();
    formData.append("file", formFile);

    const response = await api.post("/personal-files", formData, {
        headers: {"Content-Type": "multipart/form-data"},
    });
    return response.data;
};


export const deleteFile = async (id: number) => {
    const response = await api.delete(`/personal-files/${id}`);
    return response.data;
};


export const updateFile = async (id: number, req: UpdateFileRequestDto) => {
    const response = await api.patch(`/personal-files/${id}`, req);
    return response.data;
};