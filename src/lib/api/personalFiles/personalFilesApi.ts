import fetchData from "@/lib/api/fetchData";
import {UpdateFileRequestDto} from "@/lib/api/personalFiles/personalFilesApiInterfaces";


export const uploadFile = async (formFile: File) => {
    const formData = new FormData();
    formData.append("file", formFile);

    return await fetchData<FormData>(`/personal-files/`, "POST", formData, { "Content-Type": "multipart/form-data" });
};

export const deleteFile = async (id: number) => {
    return await fetchData<unknown>(`/personal-files/${id}`, "DELETE");
};

export const updateFile = async (id: number, req: UpdateFileRequestDto) => {
    return await fetchData<UpdateFileRequestDto>(`/personal-files/${id}`, "PATCH", req);
};