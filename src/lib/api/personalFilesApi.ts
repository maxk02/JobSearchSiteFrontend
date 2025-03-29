import api from "@/lib/api/httpClient";


//
export interface UploadFileRequest {
    file: File;
    fileName: string;
    extension: string;
}

export const uploadFile = async (req: UploadFileRequest) => {
    const formData = new FormData();
    formData.append("file", req.file);
    formData.append("fileName", req.fileName);
    formData.append("extension", req.extension);

    const response = await api.post("/api/personal-files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};


//
export interface DeleteFileRequest {
    fileId: number;
}

export const deleteFile = async (id: number) => {
    const response = await api.delete(`/api/personal-files/${id}`);
    return response.data;
};


//
export interface UpdateFileRequest {
    fileId: number;
    newName: string;
}

export const updateFile = async (req: UpdateFileRequest) => {
    const response = await api.patch("/api/personal-files", req);
    return response.data;
};