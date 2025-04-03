import axiosClient from "@/lib/api/axiosClient";
import {UpdateFileRequestDto} from "@/lib/api/personalFiles/personalFilesApiInterfaces";


export const uploadFile = async (formFile: File) => {
    const formData = new FormData();
    formData.append("file", formFile);

    const response = await axiosClient.post("/personal-files", formData, {
        headers: {"Content-Type": "multipart/form-data"},
    });
    return response.data;
};


export const deleteFile = async (id: number) => {
    const response = await axiosClient.delete(`/personal-files/${id}`);
    return response.data;
};


export const updateFile = async (id: number, req: UpdateFileRequestDto) => {
    const response = await axiosClient.patch(`/personal-files/${id}`, req);
    return response.data;
};